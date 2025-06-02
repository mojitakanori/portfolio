// ローディングアニメーション
window.addEventListener('load', function() {
    // すべてのコンテンツが読み込まれた後に実行
    setTimeout(function() {
        document.querySelector('.loading').classList.add('hidden');
    }, 1500); // 2秒後にローディング画面を非表示に延長
});

// ハンバーガーメニュー
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const menuOverlay = document.querySelector('.menu-overlay');

menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
});

// オーバーレイクリックでメニューを閉じる
menuOverlay.addEventListener('click', function() {
    menuToggle.classList.remove('active');
    navLinks.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
});

// メニュー項目をクリックした時にメニューを閉じる
document.querySelectorAll('.nav-links a').forEach(item => {
    item.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// particles.js の設定
document.addEventListener('DOMContentLoaded', function() {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
});

// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// EmailJS の初期化
(function() {
    // EmailJS初期化
    emailjs.init("GrwqtCWz5DyROH4pE");
    
    // お問い合わせフォーム送信処理
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // 送信ボタンを無効化
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = '送信中...';
        
        // メッセージ非表示
        document.getElementById('success-message').classList.remove('show');
        document.getElementById('error-message').classList.remove('show');
        
        // フォームデータの取得
        const formData = {
            subject: this.subject.value,
            from_name: this.name.value || "名前未入力",
            from_email: this.from_email.value,
            phone: this.phone.value || "電話番号未入力",
            message: this.message.value
        };
        
        // EmailJSパラメータを設定
        const serviceID = "service_wcbuh58";
        const templateID = "template_pkq9fls";
        
        // EmailJS送信
        emailjs.send(serviceID, templateID, formData)
            .then(() => {
                document.getElementById('success-message').classList.add('show');
                this.reset();
                // ボタンを元に戻す
                setTimeout(() => {
                    submitButton.disabled = false;
                    submitButton.textContent = originalText;
                }, 1500);
            }, (error) => {
                document.getElementById('error-message').classList.add('show');
                console.log('EmailJS送信エラー:', error);
                // ボタンを元に戻す
                setTimeout(() => {
                    submitButton.disabled = false;
                    submitButton.textContent = originalText;
                }, 1500);
            });
    });
})();