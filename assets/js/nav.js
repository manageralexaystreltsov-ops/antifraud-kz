(function() {
    var navHTML = `
<header class="fixed top-0 left-0 right-0 bg-dark/95 backdrop-blur-sm z-50 border-b border-gray-800">
    <div class="container mx-auto px-4">
        <!-- Top row: logo + phone + CTA -->
        <div class="flex items-center justify-between py-3">
            <a href="/antifraud-kz/" class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
                </div>
                <div>
                    <h1 class="font-heading text-lg font-bold leading-tight">АНТИФРОД</h1>
                    <p class="text-[10px] text-gray-400 leading-tight hidden sm:block">Центр Казахстан</p>
                </div>
            </a>
            <div class="flex items-center gap-4">
                <a href="tel:1434" class="hidden sm:flex items-center gap-2 text-gold font-heading text-sm hover:text-gold/80 transition">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    1434
                </a>
                <a href="/antifraud-kz/quiz.html" class="bg-primary hover:bg-primary/80 px-4 py-2 rounded-lg font-heading text-sm transition hidden sm:inline-flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                    ЗАЯВКА
                </a>
                <button id="mobileMenuBtn" class="md:hidden text-white p-2 -mr-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
                </button>
            </div>
        </div>
        <!-- Desktop nav row -->
        <nav class="hidden md:flex items-center gap-1 pb-2 -mt-1 overflow-x-auto">
            <a href="/antifraud-kz/" class="nav-link px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-white/5 transition" data-page="home">Главная</a>
            <a href="/antifraud-kz/organizations.html" class="nav-link px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-white/5 transition" data-page="check">Проверка</a>
            <a href="/antifraud-kz/quiz.html" class="nav-link px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-white/5 transition" data-page="quiz">Заявка</a>
            <a href="/antifraud-kz/services.html" class="nav-link px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-white/5 transition" data-page="services">Услуги</a>
            <a href="/antifraud-kz/team.html" class="nav-link px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-white/5 transition" data-page="team">Команда</a>
            <a href="/antifraud-kz/cases.html" class="nav-link px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-white/5 transition" data-page="cases">Кейсы</a>
            <a href="/antifraud-kz/organizations.html" class="nav-link px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-white/5 transition" data-page="organizations">Реестр</a>
            <a href="/antifraud-kz/contacts.html" class="nav-link px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-white/5 transition" data-page="contacts">Контакты</a>
            <a href="/antifraud-kz/client/login.html" class="nav-link px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-white/5 transition" data-page="client">Кабинет</a>
            <a href="/antifraud-kz/admin.html" class="nav-link px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-white/5 transition text-gray-500" data-page="admin">⚙</a>
        </nav>
    </div>
    <!-- Mobile menu -->
    <div id="mobileMenu" class="hidden md:hidden bg-dark border-t border-gray-800">
        <nav class="container mx-auto px-4 py-3 flex flex-col">
            <a href="/antifraud-kz/" class="py-3 px-3 hover:bg-white/5 rounded-lg transition nav-link" data-page="home">🏠 Главная</a>
            <a href="/antifraud-kz/organizations.html" class="py-3 px-3 hover:bg-white/5 rounded-lg transition nav-link" data-page="check">🏛️ Реестр организаций</a>
            <a href="/antifraud-kz/quiz.html" class="py-3 px-3 hover:bg-white/5 rounded-lg transition nav-link" data-page="quiz">📝 Оставить заявку</a>
            <a href="/antifraud-kz/services.html" class="py-3 px-3 hover:bg-white/5 rounded-lg transition nav-link" data-page="services">📋 Услуги и цены</a>
            <a href="/antifraud-kz/team.html" class="py-3 px-3 hover:bg-white/5 rounded-lg transition nav-link" data-page="team">👨‍⚖️ Команда</a>
            <a href="/antifraud-kz/cases.html" class="py-3 px-3 hover:bg-white/5 rounded-lg transition nav-link" data-page="cases">✨ Кейсы</a>
            <a href="/antifraud-kz/organizations.html" class="py-3 px-3 hover:bg-white/5 rounded-lg transition nav-link" data-page="organizations">🏛️ Реестр организаций</a>
            <a href="/antifraud-kz/contacts.html" class="py-3 px-3 hover:bg-white/5 rounded-lg transition nav-link" data-page="contacts">✉️ Контакты</a>
            <a href="/antifraud-kz/client/login.html" class="py-3 px-3 hover:bg-white/5 rounded-lg transition nav-link" data-page="client">🔐 Личный кабинет</a>
            <a href="/antifraud-kz/admin.html" class="py-3 px-3 hover:bg-white/5 rounded-lg transition nav-link text-gray-500" data-page="admin">⚙ Админ</a>
            <div class="flex gap-3 mt-3">
                <a href="/antifraud-kz/quiz.html" class="flex-1 bg-primary py-3 text-center rounded-lg font-heading text-sm">📝 ОСТАВИТЬ ЗАЯВКУ</a>
                <a href="tel:1434" class="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-gold/30 text-gold font-heading text-sm">📞 1434</a>
            </div>
        </nav>
    </div>
</header>`;

    var warningBanner = `
<div id="warningBanner" class="fixed top-16 left-0 right-0 z-40 bg-gradient-to-r from-primary to-red-700 py-3 px-4 text-center text-white text-sm font-bold cursor-pointer hidden" onclick="window.location.href='/antifraud-kz/quiz.html'">
    <span class="animate-pulse">⚠️</span> Вас просят заплатить чтобы вернуть деньги? <span class="underline">НЕ ДЕЛАЙТЕ ЭТОГО</span> — <span class="text-yellow-300">свяжитесь с нами</span> →
</div>`;

    var footerHTML = `
<footer class="py-12 bg-darker border-t border-gray-800">
    <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
            <div>
                <div class="flex items-center space-x-3 mb-4">
                    <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center"><svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg></div>
                    <div><h3 class="font-heading text-lg font-bold">АНТИФРОД</h3><p class="text-xs text-gray-400">Казахстан</p></div>
                </div>
                <p class="text-gray-400 text-sm">Центр помощи жертвам финансового мошенничества</p>
            </div>
            <div>
                <h4 class="font-heading font-bold mb-3">Навигация</h4>
                <ul class="space-y-2 text-sm text-gray-400">
                    <li><a href="/antifraud-kz/organizations.html" class="hover:text-primary transition">Реестр организаций</a></li>
                    <li><a href="/antifraud-kz/quiz.html" class="hover:text-primary transition">Оставить заявку</a></li>
                    <li><a href="/antifraud-kz/services.html" class="hover:text-primary transition">Услуги и цены</a></li>
                    <li><a href="/antifraud-kz/organizations.html" class="hover:text-primary transition">Реестр организаций</a></li>
                    <li><a href="/antifraud-kz/cases.html" class="hover:text-primary transition">Кейсы клиентов</a></li>
                    <li><a href="/antifraud-kz/client/login.html" class="hover:text-primary transition">Личный кабинет</a></li>
                </ul>
            </div>
            <div>
                <h4 class="font-heading font-bold mb-3">Экстренные номера</h4>
                <ul class="space-y-2 text-sm text-gray-400">
                    <li>АРРФР: <a href="tel:1434" class="text-gold font-bold">1434</a></li>
                    <li>Полиция: <a href="tel:102" class="text-gold font-bold">102</a></li>
                    <li>Киберпреступность: <a href="tel:115" class="text-gold font-bold">115</a></li>
                </ul>
            </div>
            <div>
                <h4 class="font-heading font-bold mb-3">Ресурсы</h4>
                <ul class="space-y-2 text-sm text-gray-400">
                    <li><a href="https://www.gov.kz/memleket/entities/ardfm" target="_blank" class="hover:text-primary transition">АРРФР</a></li>
                    <li><a href="https://egov.kz" target="_blank" class="hover:text-primary transition">ЕГРПБ</a></li>
                    <li><a href="https://www.nationalbank.kz" target="_blank" class="hover:text-primary transition">НБ РК</a></li>
                </ul>
            </div>
        </div>
        <div class="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>© 2026 Антифрод Центр Казахстан. Все права защищены.</p>
        </div>
    </div>
</footer>

<a href="https://wa.me/77001234567?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%B8%D1%82%D1%8C%20%D0%B7%D0%B0%D1%8F%D0%B2%D0%BA%D1%83" target="_blank" class="fixed bottom-6 right-4 z-50 bg-green-500 hover:bg-green-600 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition transform hover:scale-110" id="waBtn">
    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
</a>`;

    var path = window.location.pathname;
    var currentPage = 'home';
    if (path.includes('organizations.html')) currentPage = 'organizations';
    else if (path.includes('quiz.html')) currentPage = 'quiz';
    else if (path.includes('services.html')) currentPage = 'services';
    else if (path.includes('team.html')) currentPage = 'team';
    else if (path.includes('cases.html')) currentPage = 'cases';
    else if (path.includes('contacts.html')) currentPage = 'contacts';
    else if (path.includes('organizations.html')) currentPage = 'organizations';
    else if (path.includes('case.html')) currentPage = 'cases';
    else if (path.includes('admin.html')) currentPage = 'admin';
    else if (path.includes('client/')) currentPage = 'client';

    document.body.insertAdjacentHTML('afterbegin', navHTML + warningBanner);
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    var links = document.querySelectorAll('.nav-link');
    links.forEach(function(link) {
        if (link.getAttribute('data-page') === currentPage) {
            link.classList.add('bg-white/10', 'text-white');
            link.classList.remove('text-gray-300');
        }
    });

    var mobileMenuBtn = document.getElementById('mobileMenuBtn');
    var mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Warning banner auto-show after 15 seconds
    setTimeout(function() {
        var banner = document.getElementById('warningBanner');
        if (banner) {
            banner.classList.remove('hidden');
            banner.style.animation = 'slideDown 0.5s ease';
        }
    }, 15000);
})();
