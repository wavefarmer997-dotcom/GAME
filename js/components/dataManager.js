/**
 * NEXUS GAMING TH - Data Management & Database Center Component
 * Handles Persistent Database Sync, Auto-Save, JSON Export/Import, and Diagnostics
 */

import { store } from '../store.js';
import { sound } from '../audio.js';
import { showToast } from './effects.js';
import { api } from '../api.js';

export function initDataManager() {
  const modal = document.getElementById('modal-data-management');
  const triggerBtn = document.getElementById('btn-header-data');
  const closeBtn = document.getElementById('btn-close-data-modal');

  if (triggerBtn) {
    triggerBtn.addEventListener('click', () => {
      sound.play('click');
      openDataManagementModal();
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  // 1. Sync Database Button
  const syncBtn = document.getElementById('btn-sync-database');
  if (syncBtn) {
    syncBtn.addEventListener('click', async () => {
      sound.play('click');
      syncBtn.disabled = true;
      syncBtn.textContent = '⏳ กำลังซิงค์...';

      try {
        const res = await api.syncState(store.state);
        if (res && res.success) {
          sound.play('success');
          showToast('🟢 ซิงค์ข้อมูลกับฐานข้อมูลเซิร์ฟเวอร์สำเร็จ 100%', 'success');
        } else {
          showToast('💾 ฐานข้อมูล Local Storage บันทึกเรียบร้อย (เซิร์ฟเวอร์ออฟไลน์)', 'info');
        }
      } catch (e) {
        showToast('💾 ข้อมูลถูกจัดเก็บในเครื่องอย่างปลอดภัย', 'info');
      } finally {
        syncBtn.disabled = false;
        syncBtn.textContent = '🔄 ซิงค์ตอนนี้';
        renderDataStats();
      }
    });
  }

  // 2. Manual Save Button
  const saveNowBtn = document.getElementById('btn-manual-save-now');
  if (saveNowBtn) {
    saveNowBtn.addEventListener('click', () => {
      sound.play('success');
      const res = store.save();
      showToast(`💾 บันทึกข้อมูลทั้งหมดลงในเครื่องและฐานข้อมูลเรียบร้อยแล้ว (${res.timestamp})`, 'success');
      renderDataStats();
    });
  }

  // 3. Export JSON Backup Button
  const exportBtn = document.getElementById('btn-export-backup');
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      sound.play('success');
      const backupData = store.exportBackup();
      const jsonStr = JSON.stringify(backupData, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      const dateStr = new Date().toISOString().slice(0, 10);
      a.href = url;
      a.download = `nexus-gaming-database-${dateStr}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      showToast('📥 ดาวน์โหลดไฟล์สำรองฐานข้อมูล (JSON Snapshot) เรียบร้อยแล้ว!', 'success');
    });
  }

  // 4. Import JSON Backup File Input
  const importInput = document.getElementById('input-import-backup');
  if (importInput) {
    importInput.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = async (evt) => {
        try {
          const content = evt.target.result;
          const result = store.importBackup(content);
          if (result.success) {
            sound.play('levelUp');
            showToast(result.message, 'success');
            await api.syncState(store.state);
            renderDataStats();
            if (modal) modal.classList.remove('active');
          } else {
            sound.play('wrong');
            showToast(result.message, 'error');
          }
        } catch (err) {
          sound.play('wrong');
          showToast('ไม่สามารถอ่านไฟล์ JSON ได้: ' + err.message, 'error');
        }
      };
      reader.readAsText(file);
      importInput.value = '';
    });
  }

  // 5. Reset Database Button
  const resetBtn = document.getElementById('btn-reset-demo-data');
  if (resetBtn) {
    resetBtn.addEventListener('click', async () => {
      const confirmed = window.confirm('⚠️ คุณต้องการรีเซ็ตฐานข้อมูลทั้งหมดกลับเป็นค่าเริ่มต้นใช่หรือไม่?');
      if (confirmed) {
        sound.play('click');
        await api.resetDB();
        const res = store.resetToDefaultData();
        showToast('🔄 รีเซ็ตฐานข้อมูลและข้อมูลตัวอย่างเรียบร้อยแล้ว', 'info');
        renderDataStats();
        if (modal) modal.classList.remove('active');
      }
    });
  }

  // Auto-save on page exit
  window.addEventListener('beforeunload', () => {
    store.save();
  });
}

export function openDataManagementModal() {
  const modal = document.getElementById('modal-data-management');
  if (!modal) return;

  updateDatabaseBanner();
  renderDataStats();
  modal.classList.add('active');
}

function updateDatabaseBanner() {
  const dot = document.getElementById('db-status-dot');
  const title = document.getElementById('db-status-title');
  const desc = document.getElementById('data-status-details');

  if (api.isOnline) {
    if (dot) dot.textContent = '🟢';
    if (title) title.textContent = 'ระบบฐานข้อมูล Persistent Database (Connected)';
    if (desc) desc.textContent = 'เชื่อมต่อฐานข้อมูล Server Database (data/nexus_db.json) และแคช LocalStorage ถาวร';
  } else {
    if (dot) dot.textContent = '💾';
    if (title) title.textContent = 'ระบบฐานข้อมูล Local Storage Mode (Active)';
    if (desc) desc.textContent = 'จัดเก็บข้อมูลบนเบราว์เซอร์อย่างถาวร (พร้อมซิงค์อัตโนมัติเมื่อเชื่อมต่อเซิร์ฟเวอร์)';
  }
}

function renderDataStats() {
  const stats = store.getStatsSummary();
  const grid = document.getElementById('data-stats-grid');
  if (!grid) return;

  grid.innerHTML = `
    <div class="data-stat-card">
      <span class="data-stat-icon">📝</span>
      <div class="data-stat-info">
        <strong class="data-stat-val text-primary">${stats.postsCount}</strong>
        <span class="data-stat-label">กระทู้ในระบบ</span>
      </div>
    </div>

    <div class="data-stat-card">
      <span class="data-stat-icon">🤝</span>
      <div class="data-stat-info">
        <strong class="data-stat-val text-cyan">${stats.squadsCount}</strong>
        <span class="data-stat-label">ห้องหาตี้ (LFG)</span>
      </div>
    </div>

    <div class="data-stat-card">
      <span class="data-stat-icon">⭐</span>
      <div class="data-stat-info">
        <strong class="data-stat-val text-gold">${stats.reviewsCount}</strong>
        <span class="data-stat-label">บทวิจารณ์เกม</span>
      </div>
    </div>

    <div class="data-stat-card">
      <span class="data-stat-icon">👥</span>
      <div class="data-stat-info">
        <strong class="data-stat-val" style="color: #a855f7;">${stats.accountsCount}</strong>
        <span class="data-stat-label">บัญชีเกมเมอร์</span>
      </div>
    </div>

    <div class="data-stat-card">
      <span class="data-stat-icon">💬</span>
      <div class="data-stat-info">
        <strong class="data-stat-val text-cyan">${stats.chatCount}</strong>
        <span class="data-stat-label">ข้อความแชท</span>
      </div>
    </div>

    <div class="data-stat-card">
      <span class="data-stat-icon">💾</span>
      <div class="data-stat-info">
        <strong class="data-stat-val" style="color: #00ff88;">${stats.storageKb} KB</strong>
        <span class="data-stat-label">ขนาดข้อมูลแคช</span>
      </div>
    </div>
  `;
}
