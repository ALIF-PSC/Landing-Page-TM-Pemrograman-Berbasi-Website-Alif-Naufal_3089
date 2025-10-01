$(document).ready(function() {
    
    $('nav a, #home a').on('click', function(e) {
        if (this.hash !== '') {
            e.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 80
            }, 800);
        }
    });

    let cartCount = 0;
    const cartElement = $('a[href="#cart"]');

    $('article button').on('click', function() {
        cartCount++;
        updateCartCount();
        
        const productName = $(this).closest('article').find('h3').text();
        showNotification(`✓ ${productName} ditambahkan ke keranjang`);
        
        $(this).text('Ditambahkan!').css('background-color', '#27ae60');
        setTimeout(() => {
            $(this).text('Tambah ke Keranjang').css('background-color', '#3498db');
        }, 2000);
    });

    function updateCartCount() {
        cartElement.text(`Keranjang (${cartCount})`);
        
        cartElement.css('transform', 'scale(1.2)');
        setTimeout(() => {
            cartElement.css('transform', 'scale(1)');
        }, 300);
    }

    function showNotification(message) {
        const notification = $(`<div class="notification">${message}</div>`);
        $('body').append(notification);
        
        notification.css({
            'position': 'fixed',
            'top': '20px',
            'right': '20px',
            'background': '#27ae60',
            'color': 'white',
            'padding': '15px 20px',
            'border-radius': '5px',
            'box-shadow': '0 4px 12px rgba(0,0,0,0.15)',
            'z-index': '1000',
            'transform': 'translateX(150%)',
            'transition': 'transform 0.3s ease'
        });
        
        setTimeout(() => {
            notification.css('transform', 'translateX(0)');
        }, 100);
        
        setTimeout(() => {
            notification.css('transform', 'translateX(150%)');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    $('header form').on('submit', function(e) {
        e.preventDefault();
        const searchTerm = $(this).find('input[type="text"]').val().trim();
        
        if (searchTerm) {
            console.log(`Mencari produk: ${searchTerm}`);
            showNotification(`🔍 Mencari: ${searchTerm}`);
            $(this).find('input[type="text"]').val('');
            
            $('html, body').animate({
                scrollTop: $('#products').offset().top - 80
            }, 800);
        }
    });

    $('#newsletter form').on('submit', function(e) {
        e.preventDefault();
        const email = $(this).find('input[type="email"]').val().trim();
        
        if (email) {
            console.log(`Email berlangganan: ${email}`);
            showNotification('✓ Terima kasih! Anda telah berlangganan newsletter');
            $(this).find('input[type="email"]').val('');
        }
    });

    function checkScroll() {
        const sections = $('section');
        const windowHeight = $(window).height();
        const scrollPos = $(window).scrollTop() + windowHeight - 100;
        
        sections.each(function() {
            const sectionTop = $(this).offset().top;
            
            if (scrollPos > sectionTop) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }
        });
    }

    $('section').css({
        'opacity': '0',
        'transform': 'translateY(30px)',
        'transition': 'opacity 0.6s ease, transform 0.6s ease'
    });

    $(window).on('load scroll', checkScroll);
    checkScroll();

    $('article').hover(
        function() {
            $(this).find('img').css('transform', 'scale(1.05)');
        },
        function() {
            $(this).find('img').css('transform', 'scale(1)');
        }
    );

    console.log('🛒 TokoOnline siap digunakan!');
    console.log('Fitur yang tersedia:');
    console.log('- Tambah produk ke keranjang');
    console.log('- Pencarian produk');
    console.log('- Berlangganan newsletter');
    console.log('- Smooth scrolling navigation');
    console.log('- Animasi interaktif');

    const products = [
        { name: 'Smartphone XYZ', price: 3500000, clicks: 0 },
        { name: 'Laptop ABC', price: 8999000, clicks: 0 },
        { name: 'Sepatu Olahraga DEF', price: 450000, clicks: 0 },
        { name: 'Headphone Wireless GHI', price: 750000, clicks: 0 }
    ];

    $('article a[href="#product-detail"]').on('click', function(e) {
        e.preventDefault();
        const productName = $(this).closest('article').find('h3').text();
        console.log(`Lihat detail produk: ${productName}`);
        showNotification(`📱 Melihat detail ${productName}`);
    });

    $('#categories a').on('click', function(e) {
        e.preventDefault();
        const category = $(this).text();
        console.log(`Filter kategori: ${category}`);
        showNotification(`📂 Menampilkan kategori: ${category}`);
    });

    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('id-ID');
        console.log(`🕒 Waktu akses: ${timeString}`);
    }

    updateTime();
    setInterval(updateTime, 60000);
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav a, #home a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    console.log('%c🎉 Selamat datang di TokoOnline!', 'color: #e74c3c; font-size: 16px; font-weight: bold;');
    console.log('%c🛍️ Temukan produk terbaik dengan harga terjangkau', 'color: #3498db; font-size: 14px;');
});