import React, { useState } from 'react';
import './App.css';

const sections = [
  { key: 'register', label: 'Ro\'yxatdan o\'tish', icon: '🔐' },
  { key: 'dashboard', label: 'Kabinet', icon: '📊' },
  { key: 'ai', label: 'AI Reja', icon: '🤖' },
  { key: 'notifications', label: 'Eslatmalar', icon: '🔔' },
  { key: 'settings', label: 'Sozlamalar', icon: '⚙️' },
];

function App() {
  const [activeSection, setActiveSection] = useState('register');

  return (
    <div className="tg-app-container">
      <div className="tg-header">
        <div className="tg-header-content">
          <div className="tg-logo">
            <span className="tg-logo-icon">⏰</span>
            <span className="tg-logo-text">Vaqtni AI Bilan Boshqar</span>
          </div>
          <div className="tg-user-info">
            <div className="tg-user-avatar">👤</div>
          </div>
        </div>
      </div>
      
      <div className="tg-content-wrapper">
        <nav className="tg-sidebar">
          <ul className="tg-nav-list">
            {sections.map((s) => (
              <li
                key={s.key}
                className={`tg-nav-item ${activeSection === s.key ? 'active' : ''}`}
                onClick={() => setActiveSection(s.key)}
              >
                <span className="tg-nav-icon">{s.icon}</span>
                <span className="tg-nav-label">{s.label}</span>
              </li>
            ))}
          </ul>
        </nav>
        
        <main className="tg-main-content">
          <div className="tg-content-card">
            {activeSection === 'register' && <RegisterSection />}
            {activeSection === 'dashboard' && <DashboardSection />}
            {activeSection === 'ai' && <AISection />}
            {activeSection === 'notifications' && <NotificationsSection />}
            {activeSection === 'settings' && <SettingsSection />}
          </div>
        </main>
      </div>
    </div>
  );
}

function RegisterSection() {
  return (
    <div className="tg-section">
      <div className="tg-section-header">
        <h1>🔐 Ro\'yxatdan o\'tish</h1>
        <p>Telegram orqali tez va xavfsiz ro\'yxatdan o\'ting</p>
      </div>
      
      <div className="tg-feature-cards">
        <div className="tg-feature-card">
          <div className="tg-feature-icon">🚀</div>
          <h3>Tez kirish</h3>
          <p>Bir tugma bilan Telegram orqali kirish</p>
        </div>
        <div className="tg-feature-card">
          <div className="tg-feature-icon">🔒</div>
          <h3>Xavfsizlik</h3>
          <p>Telegram xavfsizlik standartlari</p>
        </div>
        <div className="tg-feature-card">
          <div className="tg-feature-icon">📱</div>
          <h3>Qulaylik</h3>
          <p>Har qanday qurilmada ishlaydi</p>
        </div>
      </div>
      
      <div className="tg-action-area">
        <button className="tg-primary-btn">
          <span className="tg-btn-icon">📱</span>
          Telegram orqali kirish
        </button>
        <p className="tg-terms">Ro\'yxatdan o\'tish orqali siz <a href="#">foydalanish shartlari</a>ni qabul qilasiz</p>
      </div>
    </div>
  );
}

function DashboardSection() {
  return (
    <div className="tg-section">
      <div className="tg-section-header">
        <h1>📊 Shaxsiy kabinet</h1>
        <p>Maqsadlaringiz va vazifalaringizni boshqaring</p>
      </div>
      
      <div className="tg-stats-grid">
        <div className="tg-stat-card">
          <div className="tg-stat-number">12</div>
          <div className="tg-stat-label">Bugungi vazifalar</div>
        </div>
        <div className="tg-stat-card">
          <div className="tg-stat-number">8</div>
          <div className="tg-stat-label">Bajarilgan</div>
        </div>
        <div className="tg-stat-card">
          <div className="tg-stat-number">67%</div>
          <div className="tg-stat-label">Progress</div>
        </div>
      </div>
      
      <div className="tg-tasks-section">
        <h3>Bugungi vazifalar</h3>
        <div className="tg-task-list">
          <div className="tg-task-item completed">
            <div className="tg-task-checkbox">✅</div>
            <div className="tg-task-content">
              <div className="tg-task-title">Dasturlash bo'yicha o'qish</div>
              <div className="tg-task-time">09:00 - 10:30</div>
            </div>
          </div>
          <div className="tg-task-item">
            <div className="tg-task-checkbox">⭕</div>
            <div className="tg-task-content">
              <div className="tg-task-title">Loyiha ustida ishlash</div>
              <div className="tg-task-time">14:00 - 16:00</div>
            </div>
          </div>
          <div className="tg-task-item">
            <div className="tg-task-checkbox">⭕</div>
            <div className="tg-task-content">
              <div className="tg-task-title">Mashg'ulot</div>
              <div className="tg-task-time">18:00 - 19:00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AISection() {
  return (
    <div className="tg-section">
      <div className="tg-section-header">
        <h1>🤖 AI yordamida reja tuzish</h1>
        <p>AI siz uchun optimal reja va motivatsion maslahatlar tayyorlaydi</p>
      </div>
      
      <div className="tg-ai-features">
        <div className="tg-ai-feature">
          <div className="tg-ai-icon">🎯</div>
          <div className="tg-ai-content">
            <h3>Maqsadlarni belgilash</h3>
            <p>AI sizning maqsadlaringiz asosida optimal reja tuzadi</p>
          </div>
        </div>
        <div className="tg-ai-feature">
          <div className="tg-ai-icon">⏰</div>
          <div className="tg-ai-content">
            <h3>Vaqt taqsimoti</h3>
            <p>Har bir vazifa uchun eng yaxshi vaqtni belgilaydi</p>
          </div>
        </div>
        <div className="tg-ai-feature">
          <div className="tg-ai-icon">💪</div>
          <div className="tg-ai-content">
            <h3>Motivatsiya</h3>
            <p>Shaxsiy motivatsion maslahatlar va tavsiyalar</p>
          </div>
        </div>
      </div>
      
      <div className="tg-ai-action">
        <button className="tg-primary-btn">
          <span className="tg-btn-icon">🤖</span>
          AI reja yaratish
        </button>
      </div>
    </div>
  );
}

function NotificationsSection() {
  return (
    <div className="tg-section">
      <div className="tg-section-header">
        <h1>🔔 Push xabarnomalar va eslatmalar</h1>
        <p>Vazifalar va motivatsion eslatmalarni o\'z vaqtida oling</p>
      </div>
      
      <div className="tg-notification-settings">
        <div className="tg-setting-item">
          <div className="tg-setting-info">
            <h3>Vazifa eslatmalari</h3>
            <p>Vazifa boshlanishidan 15 daqiqa oldin eslatma</p>
          </div>
          <label className="tg-switch">
            <input type="checkbox" defaultChecked />
            <span className="tg-slider"></span>
          </label>
        </div>
        <div className="tg-setting-item">
          <div className="tg-setting-info">
            <h3>Kunlik hisobot</h3>
            <p>Kunlik progress haqida qisqa hisobot</p>
          </div>
          <label className="tg-switch">
            <input type="checkbox" defaultChecked />
            <span className="tg-slider"></span>
          </label>
        </div>
        <div className="tg-setting-item">
          <div className="tg-setting-info">
            <h3>Motivatsion xabarlar</h3>
            <p>Kundalik motivatsion xabarlar</p>
          </div>
          <label className="tg-switch">
            <input type="checkbox" />
            <span className="tg-slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

function SettingsSection() {
  return (
    <div className="tg-section">
      <div className="tg-section-header">
        <h1>⚙️ Sozlamalar va til tanlash</h1>
        <p>Profilingizni va interfeys tilini sozlang</p>
      </div>
      
      <div className="tg-settings-list">
        <div className="tg-setting-group">
          <h3>Profil ma'lumotlari</h3>
          <div className="tg-setting-item">
            <div className="tg-setting-info">
              <h4>Ism</h4>
              <p>Foydalanuvchi ismi</p>
            </div>
            <input type="text" className="tg-input" placeholder="Ismingizni kiriting" />
          </div>
          <div className="tg-setting-item">
            <div className="tg-setting-info">
              <h4>Email</h4>
              <p>Elektron pochta manzili</p>
            </div>
            <input type="email" className="tg-input" placeholder="email@example.com" />
          </div>
        </div>
        
        <div className="tg-setting-group">
          <h3>Til sozlamalari</h3>
          <div className="tg-language-options">
            <button className="tg-lang-btn active">🇺🇿 O\'zbek</button>
            <button className="tg-lang-btn">🇷🇺 Русский</button>
            <button className="tg-lang-btn">🇺🇸 English</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
