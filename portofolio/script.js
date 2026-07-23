/**
 * Portofolio Pribadi - Fahri Ramadhan
 * Custom JavaScript for Interactivity and Layout Behavior
 */

document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // DATA: PROJECT DETAILS FOR MODAL
    // ==========================================
    const projectsData = {
        1: {
            title: "E-Commerce Space Store",
            category: "Frontend",
            desc: "Aplikasi web toko online futuristik dengan tema antariksa. Pengguna dapat menelusuri produk bertema luar angkasa, menyaring berdasarkan kategori, menambahkan barang ke keranjang belanja interaktif, dan mensimulasikan pembayaran melalui checkout multi-langkah.",
            tech: ["React.js", "Tailwind CSS", "Context API", "Framer Motion", "Vite"],
            client: "Proyek Personal / R&D",
            date: "Januari 2026",
            link: "https://space-store-demo.vercel.app",
            github: "https://github.com/fahri/space-store",
            gradientClass: "gradient-1",
            iconClass: "fa-shopping-cart"
        },
        2: {
            title: "Task Management API & Dashboard",
            category: "Full-Stack",
            desc: "Platform manajemen tugas kolaboratif yang dikembangkan untuk menyederhanakan pelacakan bug dan manajemen sprint tim. Dilengkapi dengan otentikasi JWT aman, role-based access control, integrasi RESTful API, dan visualisasi diagram performa anggota secara real-time.",
            tech: ["Next.js", "Express.js", "MongoDB", "Mongoose", "Chart.js", "JWT"],
            client: "NexaDigital Studio",
            date: "November 2025",
            link: "https://task-management-dashboard.demo",
            github: "https://github.com/fahri/task-manager-api",
            gradientClass: "gradient-2",
            iconClass: "fa-tasks"
        },
        3: {
            title: "EcoTravel Mobile App Design",
            category: "UI/UX Design",
            desc: "Studi kasus dan rancangan UI/UX lengkap untuk aplikasi mobile pemesanan tiket wisata ramah lingkungan (eco-tourism). Fokus pada kemudahan navigasi, skema warna alam yang menenangkan, sistem kompensasi jejak karbon terintegrasi, dan prototype fidelitas tinggi (high-fidelity) siap uji pengguna.",
            tech: ["Figma", "UI/UX", "User Research", "Interactive Prototyping", "Design System"],
            client: "Indo Travel Green",
            date: "September 2025",
            link: "https://figma.com/file-link-demo",
            github: "#",
            gradientClass: "gradient-3",
            iconClass: "fa-leaf"
        },
        4: {
            title: "Weather Dashboard Insight",
            category: "Frontend",
            desc: "Dashboard analitik cuaca tingkat lanjut yang menampilkan informasi cuaca global secara mendalam. Terintegrasi dengan OpenWeatherMap API untuk ramalan 7 hari ke depan, peringatan dini cuaca ekstrem, grafik kelembapan dan indeks UV interaktif, serta pencarian kota instan berbasis geolokasi.",
            tech: ["HTML5", "CSS3 SASS", "JavaScript ES6", "OpenWeather API", "Chart.js"],
            client: "Proyek Pribadi",
            date: "Juni 2025",
            link: "https://weather-insight.demo",
            github: "https://github.com/fahri/weather-dashboard",
            gradientClass: "gradient-4",
            iconClass: "fa-cloud-sun"
        },
        5: {
            title: "ChatRoom App Real-time",
            category: "Full-Stack",
            desc: "Aplikasi obrolan instan web yang memungkinkan pengguna membuat dan bergabung ke ruang publik/privat. Didukung oleh teknologi WebSocket untuk transmisi pesan secepat kilat tanpa delay, status online/sedang mengetik, pencarian riwayat obrolan, dan fitur berbagi berkas media.",
            tech: ["Node.js", "Socket.io", "React.js", "Express.js", "CSS Modules"],
            client: "CreativePixels Agency",
            date: "Maret 2025",
            link: "https://realtime-chatroom.demo",
            github: "https://github.com/fahri/socket-chatroom",
            gradientClass: "gradient-5",
            iconClass: "fa-comments"
        },
        6: {
            title: "Foodiez Delivery UI Kit",
            category: "UI/UX Design",
            desc: "Sistem desain (Design System) komprehensif dan kit UI untuk aplikasi pesan-antar makanan sehat. Terdiri dari 50+ komponen reusable seperti tombol, input, navigasi bar, serta 20 mockup halaman aplikasi mobile responsif. Dirancang dengan prinsip autolayout Figma terbaru untuk mempermudah serah terima (handoff) developer.",
            tech: ["Figma", "Design System", "Auto Layout", "Mobile UI Kit", "Style Guide"],
            client: "Foodiez Corp",
            date: "Januari 2025",
            link: "https://figma.com/ui-kit-demo",
            github: "#",
            gradientClass: "gradient-6",
            iconClass: "fa-pizza-slice"
        }
    };

    // ==========================================
    // STICKY HEADER & NAVBAR EFFECTS
    // ==========================================
    const header = document.getElementById('header');
    const handleScrollHeader = () => {
        if (window.scrollY >= 50) {
            header.classList.add('scroll-header');
        } else {
            header.classList.remove('scroll-header');
        }
    };
    window.addEventListener('scroll', handleScrollHeader);
    handleScrollHeader(); // Run on init

    // ==========================================
    // MOBILE NAV MENU TOGGLE
    // ==========================================
    const burgerMenu = document.getElementById('burger-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (burgerMenu && navMenu) {
        burgerMenu.addEventListener('click', () => {
            navMenu.classList.toggle('show-menu');
            burgerMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when nav links are clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('show-menu')) {
                navMenu.classList.remove('show-menu');
                burgerMenu.classList.remove('active');
            }
        });
    });

    // ==========================================
    // ACTIVE LINK HIGHLIGHT ON SCROLL
    // ==========================================
    const sections = document.querySelectorAll('section[id]');
    
    const scrollActive = () => {
        const scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120; // Margin threshold
            const sectionId = current.getAttribute('id');
            const targetLink = document.getElementById(`link-${sectionId}`);
            
            if (targetLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    targetLink.classList.add('active-link');
                } else {
                    targetLink.classList.remove('active-link');
                }
            }
        });
    };
    window.addEventListener('scroll', scrollActive);
    scrollActive(); // Run on init

    // ==========================================
    // DARK / LIGHT THEME TOGGLE
    // ==========================================
    const themeButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const selectedTheme = localStorage.getItem('selected-theme');

    // Get current theme state of HTML
    const getCurrentTheme = () => document.documentElement.getAttribute('data-theme');
    
    // Set theme and save configuration
    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('selected-theme', theme);
        
        if (theme === 'light') {
            themeIcon.className = 'fas fa-sun';
        } else {
            themeIcon.className = 'fas fa-moon';
        }
    };

    // If user has previous choice
    if (selectedTheme) {
        setTheme(selectedTheme);
    } else {
        // System preference default
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
    }

    themeButton.addEventListener('click', () => {
        const activeTheme = getCurrentTheme();
        setTheme(activeTheme === 'dark' ? 'light' : 'dark');
    });

    // ==========================================
    // TYPEWRITER ANIMATION (HERO)
    // ==========================================
    const typewriterText = document.getElementById('typewriter-text');
    const words = ["Full-Stack Web Developer", "UI/UX Designer", "Problem Solver"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const typeEffect = () => {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            // Delete characters
            typewriterText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50; // Deleting is faster
        } else {
            // Write characters
            typewriterText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        // Handle states
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typingSpeed = 1500; // Pause at full word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 500; // Pause before typing next word
        }

        setTimeout(typeEffect, typingSpeed);
    };

    if (typewriterText) {
        typeEffect();
    }

    // ==========================================
    // PROJECTS GALLERY FILTER
    // ==========================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Toggle active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                // Set transition effects
                card.style.opacity = '0';
                card.style.transform = 'scale(0.9) translateY(10px)';
                
                setTimeout(() => {
                    if (filterValue === 'all' || filterValue === cardCategory) {
                        card.style.display = 'flex';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1) translateY(0)';
                        }, 50);
                    } else {
                        card.style.display = 'none';
                    }
                }, 200);
            });
        });
    });

    // ==========================================
    // PROJECT DETAILS MODAL
    // ==========================================
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content-area');
    const modalClose = document.getElementById('modal-close');
    const modalOverlay = document.getElementById('modal-overlay');
    const viewDetailButtons = document.querySelectorAll('.view-details-btn');

    const openModal = (projectId) => {
        const data = projectsData[projectId];
        if (!data) return;

        // Build project tech HTML list
        const techListHTML = data.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
        
        // Build live/github action buttons
        let actionsHTML = '';
        if (data.link && data.link !== '#') {
            actionsHTML += `<a href="${data.link}" target="_blank" class="btn btn-primary"><i class="fas fa-external-link-alt"></i> Demo Langsung</a>`;
        }
        if (data.github && data.github !== '#') {
            actionsHTML += `<a href="${data.github}" target="_blank" class="btn btn-outline"><i class="fab fa-github"></i> Source Code</a>`;
        }

        // Populate Modal Content
        modalContent.innerHTML = `
            <div class="modal-detail-img ${data.gradientClass}">
                <i class="fas ${data.iconClass}"></i>
            </div>
            
            <div class="modal-detail-header">
                <h3 class="modal-detail-title">${data.title}</h3>
                <span class="modal-detail-category">${data.category}</span>
            </div>
            
            <p class="modal-detail-desc">${data.desc}</p>
            
            <div class="modal-info-grid">
                <div class="modal-info-item">
                    <h5>Klien / Perusahaan</h5>
                    <p>${data.client}</p>
                </div>
                <div class="modal-info-item">
                    <h5>Tanggal Rilis</h5>
                    <p>${data.date}</p>
                </div>
            </div>
            
            <div class="form-group" style="margin-bottom: 32px;">
                <label class="form-label" style="display: block; margin-bottom: 12px;">Teknologi Yang Digunakan</label>
                <div class="modal-detail-tech">
                    ${techListHTML}
                </div>
            </div>
            
            <div class="modal-actions">
                ${actionsHTML}
            </div>
        `;

        modal.classList.add('show-modal');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Lock scrolling
    };

    const closeModal = () => {
        modal.classList.remove('show-modal');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto'; // Unlock scrolling
        setTimeout(() => {
            modalContent.innerHTML = '';
        }, 300);
    };

    viewDetailButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const projectId = e.target.getAttribute('data-project-id');
            openModal(projectId);
        });
    });

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
    
    // Close modal on Escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show-modal')) {
            closeModal();
        }
    });

    // ==========================================
    // CONTACT FORM VALIDATION & MOCK SUBMIT
    // ==========================================
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitBtn = document.getElementById('btn-submit-contact');

    // Input elements
    const formInputs = {
        name: {
            el: document.getElementById('form-name'),
            error: document.getElementById('name-error'),
            validate: (val) => val.trim().length > 0
        },
        email: {
            el: document.getElementById('form-email'),
            error: document.getElementById('email-error'),
            validate: (val) => {
                const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return regex.test(val.trim());
            }
        },
        subject: {
            el: document.getElementById('form-subject'),
            error: document.getElementById('subject-error'),
            validate: (val) => val.trim().length > 0
        },
        message: {
            el: document.getElementById('form-message'),
            error: document.getElementById('message-error'),
            validate: (val) => val.trim().length > 0
        }
    };

    // Helper: validate single input
    const validateField = (fieldKey) => {
        const field = formInputs[fieldKey];
        const isValid = field.validate(field.el.value);
        if (isValid) {
            field.error.classList.remove('show');
            field.el.style.borderColor = 'var(--border-color)';
            return true;
        } else {
            field.error.classList.add('show');
            field.el.style.borderColor = 'var(--accent-pink)';
            return false;
        }
    };

    // Setup live feedback triggers
    Object.keys(formInputs).forEach(key => {
        formInputs[key].el.addEventListener('input', () => {
            validateField(key);
        });
        formInputs[key].el.addEventListener('blur', () => {
            validateField(key);
        });
    });

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Validate all inputs
            let formIsValid = true;
            Object.keys(formInputs).forEach(key => {
                const isFieldValid = validateField(key);
                if (!isFieldValid) {
                    formIsValid = false;
                }
            });

            if (!formIsValid) {
                formStatus.className = "form-status error";
                formStatus.textContent = "Gagal mengirim. Silakan periksa kembali semua isian Anda.";
                return;
            }

            // Mock submission state change (loading spinner UI)
            submitBtn.disabled = true;
            const originalBtnContent = submitBtn.innerHTML;
            submitBtn.innerHTML = `<span>Mengirim...</span> <i class="fas fa-spinner fa-spin"></i>`;
            formStatus.style.display = 'none';

            // Simulate server network latency
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnContent;
                
                // Show success feedback state
                formStatus.className = "form-status success";
                formStatus.textContent = `Pesan terkirim! Terima kasih ${formInputs.name.el.value}, saya akan segera menghubungi Anda kembali.`;
                
                // Reset fields
                contactForm.reset();
            }, 1800);
        });
    }

    // ==========================================
    // BACK TO TOP SCROLL BUTTON
    // ==========================================
    const scrollTopBtn = document.getElementById('scroll-top');
    const scrollShowTop = () => {
        if (window.scrollY >= 560) {
            scrollTopBtn.classList.add('show-scroll');
        } else {
            scrollTopBtn.classList.remove('show-scroll');
        }
    };
    window.addEventListener('scroll', scrollShowTop);
    scrollShowTop(); // Run on init
});
