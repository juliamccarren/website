/**
 * Julia McCarren - Neural Navigation Core
 * Lädt den gemeinsamen Header und initialisiert das Hamburger-Menü dynamisch.
 */

async function loadHeader() {
    try {
        // Holt die header.html vom Server
        const response = await fetch('../placeholder/header.html');
        if (!response.ok) throw new Error('Header could not be loaded');
        
        const html = await response.text();
        
        const placeholder = document.getElementById('header-placeholder');
        if (placeholder) {
            placeholder.innerHTML = html;
            // Erst wenn das HTML im DOM injiziert wurde, aktivieren wir die Event-Listener
            initNavigation();
            updateVersionHeader(); // Aktualisiert die Versionsnummern im Header
        }
    } catch (error) {
        console.error('Error loading navigation header:', error);
    }
}

async function loadFooter() {
    try {
        // Holt die footer.html vom Server
        const response = await fetch('../placeholder/footer.html');
        if (!response.ok) throw new Error('Footer could not be loaded');
        
        const html = await response.text();
        
        const placeholder = document.getElementById('footer-placeholder');
        if (placeholder) {
            placeholder.innerHTML = html;
            updateVersionFooter(); // Aktualisiert die Versionsnummern im Footer
        }
    } catch (error) {
        console.error('Error loading footer:', error);
    }
}

function updateVersionHeader() {
    try {
        // Direkter Zugriff auf die statische Klasse
        const info = VersionCore.info;

        const versionMenuEl = document.getElementById('version-number-menu');

        if (versionMenuEl) versionMenuEl.textContent = info.number;

        console.log(`> SYSTEM: ${VersionCore.display} geladen.`);
    } catch (e) {
        console.warn("> SYSTEM: VersionCore noch nicht initialisiert.");
    }
}

function updateVersionFooter() {
    try {
        // Direkter Zugriff auf die statische Klasse
        const info = VersionCore.info;

        const versionFooterEl = document.getElementById('version-number-footer');
        const hashEl = document.getElementById('build-hash');

        if (versionFooterEl) versionFooterEl.textContent = info.number;
        if (hashEl) hashEl.textContent = info.hash;

        console.log(`> SYSTEM: ${VersionCore.display} geladen.`);
    } catch (e) {
        console.warn("> SYSTEM: VersionCore noch nicht initialisiert.");
    }
}

function initNavigation() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.getElementById('navbar');
    const navTitle = document.getElementById('nav-title');

    // 1. Hamburger-Menü Toggle (Auf- und Zuklappen)
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation(); // Verhindert ungewollte Event-Übertragungen
            mobileMenu.classList.toggle('active');
        });

        // Schließt das Menü automatisch, wenn ein Link geklickt wird
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
    }

    // --- NEU: Mobile Untermenü-Steuerung für Essays ---
    const essaysToggle = document.getElementById('mobile-essays-toggle');
    const essaysSubmenu = document.getElementById('mobile-essays-submenu');

    if (essaysToggle && essaysSubmenu) {
        essaysToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            const icon = essaysToggle.querySelector('[data-lucide="chevron-down"]');
            
            // Prüfen, ob das Menü offen ist
            if (essaysSubmenu.style.maxHeight && essaysSubmenu.style.maxHeight !== '0px') {
                // Schließen
                essaysSubmenu.style.maxHeight = '0px';
                if (icon) icon.style.transform = 'rotate(0deg)';
            } else {
                // Öffnen (Nutzt scrollHeight für eine dynamische, flüssige CSS-Animation)
                essaysSubmenu.style.maxHeight = essaysSubmenu.scrollHeight + 'px';
                if (icon) icon.style.transform = 'rotate(180deg)';
            }
        });
    }    

    // 2. Automatischer Glass-Nav-Effekt für Unterseiten (z.B. essays.html)
    // Wenn wir nicht auf der Startseite (/) oder index.html sind, erzwingen wir den sichtbaren Hintergrund
    const isHomePage = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');
    if (!isHomePage && navbar) {
        navbar.classList.add('glass-nav');
        navTitle.classList.add('nav-visible'); 
        navTitle.classList.remove('nav-hidden');
    } 

    // 3. Lucide Icons für den nachgeladenen Header aktivieren
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Startet den Ladevorgang, sobald das Basis-Dokument bereit ist
document.addEventListener('DOMContentLoaded', loadHeader);
document.addEventListener('DOMContentLoaded', loadFooter);