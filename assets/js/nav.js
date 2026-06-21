// Navigation Component
(function() {
    var navHTML = `
<header class="fixed top-0 left-0 right-0 bg-dark/95 backdrop-blur-sm z-50 border-b border-gray-800">
    <div class="container mx-auto px-4 py-3">
        <div class="flex items-center justify-between">
            <a href="/antifraud-kz/" class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                    </svg>
                </div>
                <div><h1 class="font-heading text-xl font-bold">АНТИФРОД</h1><p class="text-xs text-gray-400">Казахстан</p></div>
            </a>
            <nav class="hidden md:flex items-center space-x-6" id="desktop-nav">
                <a href="/antifraud-kz/" class="hover:text-primary transition nav-link" data-page="home">Главная</a>
                <a href="/antifraud-kz/check.html" class="hover:text-primary transition nav-link" data-page="check">Проверка</a>
                <a href="/antifraud-kz/quiz.html" class="hover:text-primary transition nav-link" data-page="quiz">Определить стадию</a>
                <a href="/antifraud-kz/services.html" class="hover:text-primary transition nav-link" data-page="services">Услуги</a>
                <a href="/antifraud-kz/team.html" class="hover:text-primary transition nav-link" data-page="team">Команда</a>
                <a href="/antifraud-kz/cases.html" class="hover:text-primary transition nav-link" data-page="cases">Кейсы</a>
                <a href="/antifraud-kz/contacts.html" class="hover:text-primary transition nav-link" data-page="contacts">Контакты</a>
            </nav>
            <div class="flex items-center space-x-4">
                <a href="/antifraud-kz/contacts.html" class="hidden sm:inline-block bg-primary hover:bg-primary/80 px-4 py-2 rounded-lg font-heading text-sm transition">ЗАЯВКА</a>
                <button id="mobileMenuBtn" class="md:hidden text-white">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
    <div id="mobileMenu" class="hidden md:hidden bg-dark border-t border-gray-800">
        <nav class="container mx-auto px-4 py-4 flex flex-col space-y-3" id="mobile-nav">
            <a href="/antifraud-kz/" class="py-2 hover:text-primary transition nav-link" data-page="home">Главная</a>
            <a href="/antifraud-kz/check.html" class="py-2 hover:text-primary transition nav-link" data-page="check">Проверка организации</a>
            <a href="/antifraud-kz/quiz.html" class="py-2 hover:text-primary transition nav-link" data-page="quiz">Определить стадию</a>
            <a href="/antifraud-kz/services.html" class="py-2 hover:text-primary transition nav-link" data-page="services">Услуги и цены</a>
            <a href="/antifraud-kz/team.html" class="py-2 hover:text-primary transition nav-link" data-page="team">Команда</a>
            <a href="/antifraud-kz/cases.html" class="py-2 hover:text-primary transition nav-link" data-page="cases">Кейсы</a>
            <a href="/antifraud-kz/contacts.html" class="py-2 hover:text-primary transition nav-link" data-page="contacts">Контакты</a>
            <a href="/antifraud-kz/contacts.html" class="bg-primary py-3 text-center rounded-lg font-heading">ОСТАВИТЬ ЗАЯВКУ</a>
        </nav>
    </div>
</header>`;

    var footerHTML = `
<footer class="py-12 bg-darker border-t border-gray-800">
    <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
            <div>
                <div class="flex items-center space-x-3 mb-4">
                    <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
                    </div>
                    <div><h3 class="font-heading text-lg font-bold">АНТИФРОД</h3><p class="text-xs text-gray-400">Казахстан</p></div>
                </div>
                <p class="text-gray-400 text-sm">Центр помощи жертвам финансового мошенничества в Казахстане</p>
            </div>
            <div>
                <h4 class="font-heading font-bold mb-3">Навигация</h4>
                <ul class="space-y-2 text-sm text-gray-400">
                    <li><a href="/antifraud-kz/" class="hover:text-primary transition">Главная</a></li>
                    <li><a href="/antifraud-kz/check.html" class="hover:text-primary transition">Проверка</a></li>
                    <li><a href="/antifraud-kz/quiz.html" class="hover:text-primary transition">Определить стадию</a></li>
                    <li><a href="/antifraud-kz/services.html" class="hover:text-primary transition">Услуги</a></li>
                </ul>
            </div>
            <div>
                <h4 class="font-heading font-bold mb-3">Контакты</h4>
                <ul class="space-y-2 text-sm text-gray-400">
                    <li>Горячая линия: <a href="tel:1434" class="text-gold">1434</a></li>
                    <li>Полиция: <a href="tel:102" class="text-gold">102</a></li>
                    <li>Киберпреступность: <a href="tel:115" class="text-gold">115</a></li>
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
            <p>© 2026 Антифрод Центр Казахстан</p>
        </div>
    </div>
</footer>

<a href="https://wa.me/77001234567" target="_blank" class="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition transform hover:scale-110">
    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
</a>`;

    // Determine current page
    var path = window.location.pathname;
    var currentPage = 'home';
    if (path.includes('check.html')) currentPage = 'check';
    else if (path.includes('quiz.html')) currentPage = 'quiz';
    else if (path.includes('services.html')) currentPage = 'services';
    else if (path.includes('team.html')) currentPage = 'team';
    else if (path.includes('cases.html')) currentPage = 'cases';
    else if (path.includes('contacts.html')) currentPage = 'contacts';

    document.body.insertAdjacentHTML('afterbegin', navHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // Highlight active page
    var links = document.querySelectorAll('.nav-link');
    links.forEach(function(link) {
        if (link.getAttribute('data-page') === currentPage) {
            link.classList.add('text-primary', 'font-bold');
            link.classList.remove('hover:text-primary');
        }
    });

    // Mobile menu toggle
    var mobileMenuBtn = document.getElementById('mobileMenuBtn');
    var mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
})();
