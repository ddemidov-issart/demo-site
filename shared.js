/* shared.js — единый header, footer, cookie, back-to-top для всех страниц */

(function() {
  const base = document.currentScript?.getAttribute('data-base') || '';

  function injectHeader() {
    const header = document.getElementById('siteHeader');
    if (!header) return;
    header.innerHTML = `
    <div class="container">
      <div class="header-row-1">
        <a href="${base}index.html" class="logo" aria-label="Аудит Плюс — на главную">Аудит&nbsp;<span>Плюс</span></a>
        <div class="header-actions">
          <a href="tel:+79832689858" class="header-phone" aria-label="Позвонить +7 983 268 98 58">
            <i data-lucide="phone"></i>
            +7&nbsp;(983)&nbsp;268-98-58
          </a>
          <a href="${base}index.html#contacts" class="btn btn-primary btn-sm btn-magnetic">Получить&nbsp;КП</a>
          <button class="burger" id="burgerBtn" aria-label="Открыть меню" aria-expanded="false" aria-controls="mobileMenu">
            <i data-lucide="menu"></i>
          </button>
        </div>
      </div>
      <nav class="nav-desktop" aria-label="Главное меню">
        <a href="${base}index.html#services">Услуги</a>
        <a href="${base}tariffs.html">Тарифы</a>
        <a href="${base}index.html#about">О компании</a>
        <a href="${base}info.html">Раскрытие информации</a>
        <a href="${base}index.html#testimonials">Отзывы</a>
        <a href="${base}index.html#contacts">Контакты</a>
      </nav>
    </div>`;
  }

  function injectMobileMenu() {
    let menu = document.getElementById('mobileMenu');
    if (!menu) {
      menu = document.createElement('nav');
      menu.className = 'mobile-menu';
      menu.id = 'mobileMenu';
      menu.setAttribute('aria-label', 'Мобильное меню');
      document.body.insertBefore(menu, document.body.firstChild.nextSibling?.nextSibling || null);
    }
    menu.innerHTML = `
      <a href="${base}index.html#services">Услуги</a>
      <a href="${base}tariffs.html">Тарифы</a>
      <a href="${base}index.html#about">О компании</a>
      <a href="${base}info.html">Раскрытие информации</a>
      <a href="${base}index.html#testimonials">Отзывы</a>
      <a href="${base}index.html#contacts">Контакты</a>
      <a href="tel:+79832689858">+7 (983) 268-98-58</a>
      <a href="${base}index.html#contacts" class="btn btn-primary" style="margin-top: 16px;">Получить КП</a>
    `;
  }

  function injectFooter() {
    const footer = document.getElementById('siteFooter');
    if (!footer) return;
    footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-about">
          <div class="footer-logo">Аудит&nbsp;<span>Плюс</span></div>
          <p>Аудиторская компания из Красноярска. Член СРО ААС с 2009 года. Проводим обязательный и инициативный аудит по МСА, ведём бухучёт и налоговый консалтинг.</p>
        </div>
        <div>
          <h4>Услуги</h4>
          <ul>
            <li><a href="${base}index.html#services">Аудиторские услуги</a></li>
            <li><a href="${base}index.html#services">Бухгалтерское сопровождение</a></li>
            <li><a href="${base}index.html#services">Налоговый консалтинг</a></li>
            <li><a href="${base}tariffs.html">Тарифы</a></li>
          </ul>
        </div>
        <div>
          <h4>Контакты</h4>
          <ul>
            <li><a href="tel:+79832689858">+7 (983) 268-98-58</a></li>
            <li><a href="mailto:info@auditplyus.ru">info@auditplyus.ru</a></li>
            <li>г. Красноярск, ул. Конституции СССР, 7, оф. 66</li>
            <li>Пн–Пт, 9:00–18:00</li>
          </ul>
        </div>
        <div>
          <h4>Документы</h4>
          <ul>
            <li><a href="${base}privacy.html">Политика конфиденциальности</a></li>
            <li><a href="${base}info.html">Раскрытие информации</a></li>
            <li><a href="#">Пользовательское соглашение</a></li>
            <li><a href="#">Свидетельство СРО ААС</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div>© 1995–2026 ООО «Аудит Плюс». Все права защищены.</div>
        <div class="social-row" aria-label="Социальные сети">
          <a href="https://vk.com/auditplyus" class="social-link" aria-label="Аудит Плюс ВКонтакте">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.785 16.241s.288-.032.435-.193c.135-.148.131-.425.131-.425s-.019-1.298.585-1.49c.595-.189 1.359 1.259 2.169 1.815.612.42 1.077.328 1.077.328l2.166-.03s1.133-.07.595-.964c-.044-.073-.314-.661-1.612-1.866-1.359-1.262-1.177-1.057.46-3.245.997-1.331 1.395-2.144 1.27-2.493-.118-.332-.853-.244-.853-.244l-2.443.015s-.181-.025-.315.056c-.131.079-.215.262-.215.262s-.386 1.027-.901 1.901c-1.086 1.842-1.521 1.94-1.699 1.825-.413-.266-.31-1.073-.31-1.647 0-1.792.272-2.539-.531-2.731-.266-.064-.461-.106-1.143-.113-.875-.009-1.615.003-2.034.208-.279.137-.494.441-.363.459.162.022.529.099.724.363.252.341.243 1.105.243 1.105s.144 2.108-.336 2.371c-.331.18-.785-.187-1.755-1.86-.496-.857-.871-1.804-.871-1.804s-.072-.176-.201-.27c-.156-.114-.374-.151-.374-.151l-2.322.015s-.349.01-.477.161c-.114.135-.009.412-.009.412s1.818 4.252 3.877 6.397c1.886 1.966 4.028 1.835 4.028 1.835h.971z"/></svg>
          </a>
          <a href="https://t.me/auditplyus" class="social-link" aria-label="Аудит Плюс в Telegram">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/></svg>
          </a>
        </div>
      </div>
    </div>`;
  }

  function initSharedUI() {
    // Burger menu
    const burger = document.getElementById('burgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (burger && mobileMenu) {
      burger.addEventListener('click', () => {
        const open = mobileMenu.classList.toggle('open');
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
        burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
        document.body.style.overflow = open ? 'hidden' : '';
      });
      mobileMenu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          mobileMenu.classList.remove('open');
          burger.setAttribute('aria-expanded', 'false');
          burger.setAttribute('aria-label', 'Открыть меню');
          document.body.style.overflow = '';
        });
      });
    }

    // Header shadow on scroll
    const siteHeader = document.getElementById('siteHeader');
    const backToTop = document.getElementById('backToTop');
    if (siteHeader) {
      window.addEventListener('scroll', () => {
        const y = window.scrollY;
        siteHeader.classList.toggle('scrolled', y > 8);
        if (backToTop) backToTop.classList.toggle('visible', y > 300);
      }, { passive: true });
    }

    // Back to top
    if (backToTop) {
      backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Cookie banner
    const cookieBanner = document.getElementById('cookieBanner');
    const cookieAccept = document.getElementById('cookieAccept');
    if (cookieBanner && cookieAccept) {
      try {
        if (localStorage.getItem('cookieAccepted') === '1') {
          cookieBanner.classList.add('hidden');
        }
      } catch (e) {}
      cookieAccept.addEventListener('click', () => {
        cookieBanner.classList.add('hidden');
        try { localStorage.setItem('cookieAccepted', '1'); } catch (e) {}
      });
    }
  }

  // Run
  injectHeader();
  injectMobileMenu();
  injectFooter();

  // Re-init lucide icons for injected elements
  if (window.lucide) lucide.createIcons();

  initSharedUI();
})();
