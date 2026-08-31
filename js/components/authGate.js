/**
 * NEXUS GAMING TH - Authentication Gate (Login & Register Modal/Portal)
 * Controls user entry gate, login validation, registration, demo accounts, and logout.
 */

import { store } from '../store.js';
import { sound } from '../audio.js';
import { showToast, triggerConfetti } from './effects.js';

export function initAuthGate() {
  const gateScreen = document.getElementById('auth-gate-screen');
  const loginForm = document.getElementById('form-auth-login');
  const regForm = document.getElementById('form-auth-register');
  const tabBtns = document.querySelectorAll('.auth-tab-btn');
  const logoutBtn = document.getElementById('btn-header-logout');
  const guestBtn = document.getElementById('btn-guest-quick-login');
  
  // Login password elements
  const loginPwdToggle = document.getElementById('btn-toggle-login-pwd');
  const loginPwdInput = document.getElementById('login-password');
  
  // Register password elements
  const regPwdToggle = document.getElementById('btn-toggle-reg-pwd');
  const regPwdInput = document.getElementById('reg-password');
  const regPwdConfirmInput = document.getElementById('reg-password-confirm');
  const pwdStrengthIndicator = document.getElementById('pwd-strength-indicator');
  const pwdStrengthLabel = document.getElementById('pwd-strength-label');
  
  // Random Tag Button
  const btnRandomTag = document.getElementById('btn-random-tag');
  const regTagInput = document.getElementById('reg-tag');

  // Forgot password link
  const forgotLink = document.getElementById('btn-auth-forgot');

  if (!gateScreen) return;

  // 1. Sync initial gate visibility
  const syncGateVisibility = (isAuth) => {
    if (isAuth) {
      gateScreen.classList.remove('active');
      document.body.classList.remove('auth-locked');
    } else {
      gateScreen.classList.add('active');
      document.body.classList.add('auth-locked');
    }
  };

  syncGateVisibility(store.state.isAuthenticated);

  // Subscribe to auth state changes
  store.subscribe('auth:changed', (isAuth) => {
    syncGateVisibility(isAuth);
  });

  // 2. Tab switching: Login vs Register
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sound.play('tab');
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetTab = btn.dataset.atab;
      if (targetTab === 'login') {
        if (loginForm) loginForm.style.display = 'block';
        if (regForm) regForm.style.display = 'none';
        document.getElementById('login-identifier')?.focus();
      } else {
        if (loginForm) loginForm.style.display = 'none';
        if (regForm) regForm.style.display = 'block';
        document.getElementById('reg-name')?.focus();
      }
    });
  });

  // 3. Password visibility toggles
  if (loginPwdToggle && loginPwdInput) {
    loginPwdToggle.addEventListener('click', () => {
      const isPwd = loginPwdInput.type === 'password';
      loginPwdInput.type = isPwd ? 'text' : 'password';
      loginPwdToggle.textContent = isPwd ? '🙈' : '👁️';
    });
  }

  if (regPwdToggle && regPwdInput) {
    regPwdToggle.addEventListener('click', () => {
      const isPwd = regPwdInput.type === 'password';
      regPwdInput.type = isPwd ? 'text' : 'password';
      regPwdToggle.textContent = isPwd ? '🙈' : '👁️';
    });
  }

  // 4. Password strength calculator for register
  if (regPwdInput && pwdStrengthIndicator && pwdStrengthLabel) {
    regPwdInput.addEventListener('input', () => {
      const val = regPwdInput.value;
      if (!val) {
        pwdStrengthIndicator.style.width = '0%';
        pwdStrengthIndicator.style.background = 'transparent';
        pwdStrengthLabel.textContent = 'ระดับความปลอดภัย: -';
        return;
      }

      let score = 0;
      if (val.length >= 4) score += 1;
      if (val.length >= 8) score += 1;
      if (/[A-Z]/.test(val)) score += 1;
      if (/[0-9]/.test(val)) score += 1;
      if (/[^A-Za-z0-9]/.test(val)) score += 1;

      if (score <= 2) {
        pwdStrengthIndicator.style.width = '35%';
        pwdStrengthIndicator.style.background = 'var(--accent-red, #ff4655)';
        pwdStrengthLabel.innerHTML = 'ระดับความปลอดภัย: <span style="color: #ff4655;">ง่าย (พอใช้)</span>';
      } else if (score <= 3) {
        pwdStrengthIndicator.style.width = '70%';
        pwdStrengthIndicator.style.background = 'var(--accent-gold, #ffaa00)';
        pwdStrengthLabel.innerHTML = 'ระดับความปลอดภัย: <span style="color: #ffaa00;">ปานกลาง (ปลอดภัย)</span>';
      } else {
        pwdStrengthIndicator.style.width = '100%';
        pwdStrengthIndicator.style.background = 'var(--accent-green, #00ff88)';
        pwdStrengthLabel.innerHTML = 'ระดับความปลอดภัย: <span style="color: #00ff88;">แข็งแกร่งมาก (ยอดเยี่ยม)</span>';
      }
    });
  }

  // 5. Random Gamer Tag Button
  if (btnRandomTag && regTagInput) {
    btnRandomTag.addEventListener('click', () => {
      sound.play('click');
      const randomTag = '#' + Math.floor(1000 + Math.random() * 9000);
      regTagInput.value = randomTag;
    });
  }

  // 6. Favorite Games Tag Picker
  document.querySelectorAll('#reg-games-selector .game-checkbox-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      sound.play('click');
      const checkbox = pill.querySelector('input[type="checkbox"]');
      if (checkbox) {
        checkbox.checked = !checkbox.checked;
        pill.classList.toggle('active', checkbox.checked);
      }
    });
  });

  // 7. Avatar Selector in Register Form
  const avatarChoices = document.querySelectorAll('.auth-avatar-choice');
  const selectedAvatarInput = document.getElementById('reg-selected-avatar');
  avatarChoices.forEach(choice => {
    choice.addEventListener('click', () => {
      sound.play('click');
      avatarChoices.forEach(c => c.classList.remove('selected'));
      choice.classList.add('selected');
      if (selectedAvatarInput) {
        selectedAvatarInput.value = choice.dataset.avatar;
      }
    });
  });

  // 8. 1-Click Demo Accounts Chips
  document.querySelectorAll('.btn-demo-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const targetUser = chip.dataset.user;
      const res = store.login({ identifier: targetUser, password: 'password123' });
      if (res.success) {
        sound.play('success');
        triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 40);
        showToast(res.message, 'success');
      } else {
        showToast(`⚠️ ${res.message}`, 'danger');
      }
    });
  });

  // 9. Guest quick login
  if (guestBtn) {
    guestBtn.addEventListener('click', () => {
      const res = store.loginAsGuest();
      sound.play('success');
      triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 25);
      showToast(res.message, 'info');
    });
  }

  // 10. Handle Login Submission
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const identifier = document.getElementById('login-identifier')?.value.trim();
      const password = document.getElementById('login-password')?.value;
      const remember = document.getElementById('login-remember')?.checked;

      if (!identifier) {
        showToast('⚠️ กรุณากรอกชื่อผู้ใช้หรืออีเมล', 'warning');
        return;
      }

      if (!password) {
        showToast('⚠️ กรุณากรอกรหัสผ่าน', 'warning');
        return;
      }

      const res = store.login({ identifier, password, rememberMe: remember });
      if (res.success) {
        sound.play('success');
        triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 40);
        showToast(res.message, 'success');
        loginForm.reset();
      } else {
        sound.play('click');
        showToast(`⚠️ ${res.message}`, 'danger');
      }
    });
  }

  // 11. Handle Register Submission
  if (regForm) {
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('reg-name')?.value.trim();
      const gamerTag = document.getElementById('reg-tag')?.value.trim();
      const email = document.getElementById('reg-email')?.value.trim();
      const password = document.getElementById('reg-password')?.value;
      const passwordConfirm = document.getElementById('reg-password-confirm')?.value;
      const avatar = selectedAvatarInput?.value;

      // Extract checked favorite games
      const selectedGames = [];
      document.querySelectorAll('#reg-games-selector input[type="checkbox"]:checked').forEach(cb => {
        selectedGames.push(cb.value);
      });

      if (!name) {
        showToast('⚠️ กรุณากรอกชื่อเกมเมอร์ของคุณ', 'warning');
        return;
      }

      if (name.length < 2) {
        showToast('⚠️ ชื่อเกมเมอร์ต้องมีความยาวอย่างน้อย 2 ตัวอักษร', 'warning');
        return;
      }

      if (!email || !email.includes('@')) {
        showToast('⚠️ กรุณากรอกที่อยู่อีเมลที่ถูกต้อง', 'warning');
        return;
      }

      if (!password || password.length < 4) {
        showToast('⚠️ รหัสผ่านต้องมีความยาวอย่างน้อย 4 ตัวอักษร', 'warning');
        return;
      }

      if (password !== passwordConfirm) {
        sound.play('click');
        showToast('⚠️ รหัสผ่านและการยืนยันรหัสผ่านไม่ตรงกัน กรุณาตรวจสอบอีกครั้ง', 'danger');
        document.getElementById('reg-password-confirm')?.focus();
        return;
      }

      const res = store.register({
        name,
        gamerTag,
        email,
        password,
        favoriteGames: selectedGames,
        avatar
      });

      if (res.success) {
        sound.play('levelUp');
        triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 50);
        showToast(res.message, 'level');
        regForm.reset();
      } else {
        sound.play('click');
        showToast(`⚠️ ${res.message}`, 'danger');
      }
    });
  }

  // 12. Forgot password modal helper
  if (forgotLink) {
    forgotLink.addEventListener('click', (e) => {
      e.preventDefault();
      sound.play('click');
      const email = prompt('กรุณากรอกอีเมลหรือชื่อผู้ใช้ที่ลงทะเบียนไว้ เพื่อรับลิงก์รีเซ็ตรหัสผ่าน:');
      if (email && email.trim()) {
        sound.play('success');
        showToast(`📬 ลิงก์สำหรับกู้คืนรหัสผ่านถูกส่งไปยัง "${email.trim()}" เรียบร้อยแล้ว (Demo)`, 'info');
      }
    });
  }

  // 13. Header Logout Button
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      sound.play('click');
      if (confirm(`คุณต้องการออกจากระบบ "${store.state.user.name}" ใช่หรือไม่?`)) {
        store.logout();
        showToast('🚪 ออกจากระบบเรียบร้อยแล้ว', 'info');
      }
    });
  }
}
