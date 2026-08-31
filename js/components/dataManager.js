/**
 * NEXUS GAMING TH - Data Management & Backup Component
 * Handles LocalStorage Auto-Save, Manual Sync, JSON Export/Import, and Storage Diagnostics
 */

import { store } from '../store.js';
import { sound } from '../audio.js';
import { showToast } from './effects.js';

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

  // 1. Manual Save Button
  const saveNowBtn = document.getElementById('btn-manual-save-now');
  if (saveNowBtn) {
    saveNowBtn.addEventListener('click', () => {
      sound.play('success');
      const res = store.save();
      showToast(`💾 บันทึกข้อมูลทั้งหมดลงในเครื่องเรียบร้อยแล้ว (${res.timestamp})`, 'success');
      renderDataStats();
    });
  }

  // 2. Export JSON Backup Button
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
      a.download = `nexus-gaming-backup-${dateStr}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      showToast('📥 ดาวน์โหลดไฟล์สำรองข้อมูล (JSON Backup) เรียบร้อยแล้ว!', 'success');
    });
  }

  // 3. Import JSON Backup File Input
  const importInput = document.getElementById('input-import-backup');
  if (importInput) {
    importInput.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (evt) => {
        try {
          const content = evt.target.result;
          const result = store.importBackup(content);
          if (result.success) {
            sound.play('levelUp');
            showToast(result.message, 'success');
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
      // Reset input value
      importInput.value = '';
    });
  }

  // 4. Reset Demo Data Button
  const resetBtn = document.getElementById('btn-reset-demo-data');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      const confirmed = window.confirm('⚠️ คุณต้องการรีเซ็ตข้อมูลทั้งหมดกลับเป็นค่าเริ่มต้นใช่หรือไม่? (ข้อมูลที่สร้างขึ้นใหม่จะถูกล้าง)');
      if (confirmed) {
        sound.play('click');
        const res = store.resetToDefaultData();
        showToast(res.message, 'info');
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

  renderDataStats();
  modal.classList.add('active');
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
        <span class="data-stat-label">ขนาดข้อมูล Local</span>
      </div>
    </div>
  `;
}
