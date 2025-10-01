# Landing-Page-TM-Pemrograman-Berbasi-Website-Alif-Naufal_3089

[ Code HTML ]

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Toko Online - Belanja Mudah dan Aman</title>
    <link rel="stylesheet" href="Landing_Page_PWEB_TM_Alif_Naufal_Fakihur_Rahman_242410103089.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" src="Landing_Page_PWEB_TM_Alif_Naufal_Fakihur_Rahman _242410103089.js"></script>
</head>
<body>
    <header>
        <h1>TokoOnline</h1>
        <nav>
            <ul>
                <li><a href="#home">Beranda</a></li>
                <li><a href="#products">Produk</a></li>
                <li><a href="#categories">Kategori</a></li>
                <li><a href="#about">Tentang Kami</a></li>
                <li><a href="#contact">Kontak</a></li>
            </ul>
        </nav>
        <div>
            <form>
                <input type="text" placeholder="Cari produk...">
                <button type="submit">Cari</button>
            </form>
            <a href="#cart">Keranjang (0)</a>
            <a href="#account">Akun Saya</a>
        </div>
    </header>

    <main>
        <section id="home">
            <h2>Promo Spesial Hari Ini!</h2>
            <p>Dapatkan diskon hingga 50% untuk produk pilihan</p>
            <a href="#promo">Lihat Promo</a>
        </section>

        <section id="categories">
            <h2>Kategori Produk</h2>
            <ul>
                <li><a href="#electronics">Elektronik</a></li>
                <li><a href="#fashion">Fashion</a></li>
                <li><a href="#home-appliances">Perabotan Rumah</a></li>
                <li><a href="#beauty">Kecantikan</a></li>
                <li><a href="#sports">Olahraga</a></li>
            </ul>
        </section>

        <section id="products">
            <h2>Produk Terpopuler</h2>
            
            <div>
                <article>
                    <img src="placeholder.jpg" alt="Smartphone XYZ" width="200" height="200">
                    <h3>Smartphone XYZ</h3>
                    <p>Rp 3.500.000</p>
                    <p>Smartphone dengan kamera 48MP dan baterai tahan lama</p>
                    <button>Tambah ke Keranjang</button>
                    <a href="#product-detail">Lihat Detail</a>
                </article>

                <article>
                    <img src="placeholder.jpg" alt="Laptop ABC" width="200" height="200">
                    <h3>Laptop ABC</h3>
                    <p>Rp 8.999.000</p>
                    <p>Laptop dengan prosesor terbaru dan RAM 8GB</p>
                    <button>Tambah ke Keranjang</button>
                    <a href="#product-detail">Lihat Detail</a>
                </article>

                <article>
                    <img src="placeholder.jpg" alt="Sepatu Olahraga" width="200" height="200">
                    <h3>Sepatu Olahraga DEF</h3>
                    <p>Rp 450.000</p>
                    <p>Sepatu nyaman untuk berbagai aktivitas olahraga</p>
                    <button>Tambah ke Keranjang</button>
                    <a href="#product-detail">Lihat Detail</a>
                </article>

                <article>
                    <img src="placeholder.jpg" alt="Headphone Wireless" width="200" height="200">
                    <h3>Headphone Wireless GHI</h3>
                    <p>Rp 750.000</p>
                    <p>Headphone dengan kualitas suara tinggi dan baterai 20 jam</p>
                    <button>Tambah ke Keranjang</button>
                    <a href="#product-detail">Lihat Detail</a>
                </article>
            </div>
        </section>

        <section id="testimonials">
            <h2>Apa Kata Pelanggan Kami</h2>
            <blockquote>
                <p>"Pengiriman cepat dan produk sesuai deskripsi. Sangat puas!"</p>
                <footer>- Budi, Jakarta</footer>
            </blockquote>
            <blockquote>
                <p>"Harga kompetitif dan kualitas produk terjamin. Recommended!"</p>
                <footer>- Sari, Bandung</footer>
            </blockquote>
        </section>

        <section id="newsletter">
            <h2>Berlangganan Newsletter</h2>
            <p>Dapatkan informasi promo dan produk terbaru langsung ke email Anda</p>
            <form>
                <input type="email" placeholder="Masukkan email Anda" required>
                <button type="submit">Berlangganan</button>
            </form>
        </section>
    </main>

    <footer>
        <div>
            <h3>TokoOnline</h3>
            <p>Belanja online mudah, aman, dan terpercaya</p>
        </div>

        <div>
            <h4>Bantuan</h4>
            <ul>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#shipping">Pengiriman</a></li>
                <li><a href="#returns">Pengembalian</a></li>
                <li><a href="#payment">Pembayaran</a></li>
            </ul>
        </div>

        <div>
            <h4>Tentang Kami</h4>
            <ul>
                <li><a href="#about">Tentang TokoOnline</a></li>
                <li><a href="#careers">Karir</a></li>
                <li><a href="#privacy">Kebijakan Privasi</a></li>
                <li><a href="#terms">Syarat & Ketentuan</a></li>
            </ul>
        </div>

        <div id="contact">
            <h4>Hubungi Kami</h4>
            <address>
                <p>Email: info@tokoonline.com</p>
                <p>Telepon: (021) 1234-5678</p>
                <p>Alamat: Jl. Contoh No. 123, Jakarta</p>
            </address>
        </div>

        <div>
            <p>&copy; 2023 TokoOnline. Semua hak dilindungi.</p>
        </div>
    </footer>
</body>
</html>

[ Code CSS ]

* {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #ebe8ea;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        header {
            background: linear-gradient(135deg, #2c3e50, #3498db);
            color: rgb(255, 255, 255);
            padding: 1rem 0;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 100;
        }

        header .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        }

        header h1 {
            font-size: 2rem;
            margin-bottom: 0.5rem;
        }

        nav ul {
            display: flex;
            list-style: none;
            gap: 1.5rem;
            flex-wrap: wrap;
        }

        nav a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            padding: 0.5rem 0;
            position: relative;
            transition: color 0.3s;
        }

        nav a:hover {
            color: #f1c40f;
        }

        nav a::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: #f1c40f;
            transition: width 0.3s;
        }

        nav a:hover::after {
            width: 100%;
        }

        header > .container > div {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            margin-top: 0.5rem;
        }

        form {
            display: flex;
        }

        input[type="text"],
        input[type="email"] {
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 4px 0 0 4px;
            outline: none;
            width: 200px;
        }

        button[type="submit"] {
            background: #e74c3c;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 0 4px 4px 0;
            cursor: pointer;
            transition: background 0.3s;
        }

        button[type="submit"]:hover {
            background: #c0392b;
        }

        header a:not(nav a) {
            color: white;
            text-decoration: none;
            background: rgba(255,255,255,0.2);
            padding: 0.5rem 1rem;
            border-radius: 4px;
            transition: background 0.3s;
        }

        header a:not(nav a):hover {
            background: rgba(255,255,255,0.3);
        }

        main {
            padding: 2rem 0;
        }

        section {
            margin-bottom: 3rem;
        }

        h2 {
            font-size: 2rem;
            margin-bottom: 1.5rem;
            color: #2c3e50;
            text-align: center;
            position: relative;
            padding-bottom: 0.5rem;
        }

        h2::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 3px;
            background: #3498db;
        }

        #home {
            background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://via.placeholder.com/1200x400');
            background-size: cover;
            background-position: center;
            color: white;
            text-align: center;
            padding: 4rem 1rem;
            border-radius: 8px;
            margin-bottom: 3rem;
        }

        #home h2 {
            color: white;
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }

        #home h2::after {
            background: #f1c40f;
        }

        #home p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        #home a {
            display: inline-block;
            background: #e74c3c;
            color: white;
            padding: 0.8rem 2rem;
            text-decoration: none;
            border-radius: 4px;
            font-weight: bold;
            transition: all 0.3s;
        }

        #home a:hover {
            background: #c0392b;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        #categories ul {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1.5rem;
            list-style: none;
        }

        #categories a {
            display: block;
            background: white;
            padding: 1.5rem 2rem;
            text-decoration: none;
            color: #2c3e50;
            border-radius: 8px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.1);
            transition: all 0.3s;
            text-align: center;
            min-width: 150px;
            font-weight: 500;
        }

        #categories a:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            background: #500583;
            color: white;
        }

        #products > div {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 2rem;
        }

        article {
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 3px 10px rgba(0,0,0,0.1);
            transition: transform 0.3s, box-shadow 0.3s;
        }

        article:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.15);
        }

        img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            display: block;
        }

        article h3 {
            padding: 1rem 1rem 0.5rem;
            color: #2c3e50;
            font-size: 1.3rem;
        }

        article p:nth-of-type(1) {
            padding: 0 1rem;
            font-size: 1.2rem;
            font-weight: bold;
            color: #e74c3c;
        }

        article p:nth-of-type(2) {
            padding: 0.5rem 1rem 1rem;
            color: #7f8c8d;
        }

        article button, 
        article a {
            display: inline-block;
            margin: 0 1rem 1rem;
            padding: 0.7rem 1.2rem;
            text-decoration: none;
            border-radius: 4px;
            font-weight: 500;
            transition: all 0.3s;
            border: none;
            cursor: pointer;
        }

        article button {
            background: #3498db;
            color: white;
        }

        article button:hover {
            background: #2980b9;
        }

        article a {
            background: #ecf0f1;
            color: #2c3e50;
        }

        article a:hover {
            background: #bdc3c7;
        }

        #testimonials {
            background: white;
            padding: 3rem 1rem;
            border-radius: 8px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.1);
        }

        blockquote {
            background: #f8f9fa;
            padding: 2rem;
            border-radius: 8px;
            margin: 1.5rem 0;
            position: relative;
            border-left: 4px solid #3498db;
        }

        blockquote p {
            font-style: italic;
            margin-bottom: 1rem;
            font-size: 1.1rem;
        }

        blockquote footer {
            font-weight: bold;
            color: #2c3e50;
        }

        #newsletter {
            background: linear-gradient(135deg, #3498db, #2c3e50);
            color: white;
            padding: 3rem 1rem;
            border-radius: 8px;
            text-align: center;
        }

        #newsletter h2 {
            color: white;
        }

        #newsletter h2::after {
            background: #f1c40f;
        }

        #newsletter p {
            margin-bottom: 1.5rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        #newsletter form {
            display: flex;
            justify-content: center;
            max-width: 500px;
            margin: 0 auto;
        }

        footer {
            background: #2c3e50;
            color: white;
            padding: 3rem 0 1.5rem;
        }

        footer .container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
        }

        footer h3, footer h4 {
            margin-bottom: 1rem;
            color: #f1c40f;
        }

        footer p, footer address {
            margin-bottom: 1rem;
            line-height: 1.6;
        }

        footer ul {
            list-style: none;
        }

        footer li {
            margin-bottom: 0.5rem;
        }

        footer a {
            color: #ecf0f1;
            text-decoration: none;
            transition: color 0.3s;
        }

        footer a:hover {
            color: #f1c40f;
        }

        footer > div:last-child {
            grid-column: 1 / -1;
            text-align: center;
            margin-top: 2rem;
            padding-top: 1.5rem;
            border-top: 1px solid #34495e;
            color: #bdc3c7;
        }

        @media (max-width: 768px) {
            header .container {
                flex-direction: column;
                text-align: center;
            }
            
            nav ul {
                justify-content: center;
                margin: 1rem 0;
            }
            
            header > .container > div {
                flex-direction: column;
                width: 100%;
            }
            
            form {
                width: 100%;
                margin-bottom: 1rem;
            }
            
            input[type="text"] {
                width: 100%;
            }
            
            #categories ul {
                flex-direction: column;
                align-items: center;
            }
            
            #categories a {
                width: 80%;
            }
            
            #newsletter form {
                flex-direction: column;
            }
            
            #newsletter input[type="email"] {
                width: 100%;
                border-radius: 4px;
                margin-bottom: 0.5rem;
            }
            
            #newsletter button {
                border-radius: 4px;
            }
        }

        @media (max-width: 480px) {
            h2 {
                font-size: 1.5rem;
            }
            
            #home h2 {
                font-size: 1.8rem;
            }
            
            #products > div {
                grid-template-columns: 1fr;
            }
            
            article button, 
            article a {
                display: block;
                text-align: center;
                margin: 0 1rem 0.5rem;
            }
        }

[ Code Javascript ]

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
