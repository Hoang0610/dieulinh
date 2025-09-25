// Buddha ASCII Art
const buddhaArt = `
                    _oo0oo_
                   o8888888o
                   88" . "88
                   (| -_- |)
                   0\\  =  /0
                 ___/\`---'\\___
               .' \\\\|     |// '.
              / \\\\|||  :  |||// \\
             / _||||| -:- |||||- \\
            |   | \\\\\\  -  /// |   |
            | \\_|  ''\\---/''  |_/ |
            \\  .-\\__  '-'  ___/-. /
          ___'. .'  /--.--\\  \`. .'___
       ."" '<  \`.___\\_<|>_/___.' >' "".
      | | :  \`- \\'.;'\\ _ /';.'/ - \` : | |
      \\  \\ \`_.   \\_ __\\ /__ _/   .-\` /  /
  =====\`-.____\`.___ \\_____/___.-\`___.-'=====
                    \`=---='
  
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  
            PHẬT TỔ PHÒNG CHỐNG BUG
         🙏 Nam Mô Debug Tổ Bồ Tát 🙏
`;

// Particles system
class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.resize();
        this.init();
        
        window.addEventListener('resize', () => this.resize());
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    init() {
        for (let i = 0; i < 100; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                size: Math.random() * 2 + 1,
                opacity: Math.random(),
                color: this.getRandomColor()
            });
        }
    }
    
    getRandomColor() {
        const colors = ['#ffd700', '#87ceeb', '#ff6b6b', '#4ecdc4', '#45b7d1'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    update() {
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
            
            particle.opacity += (Math.random() - 0.5) * 0.02;
            particle.opacity = Math.max(0, Math.min(1, particle.opacity));
        });
    }
    
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            this.ctx.save();
            this.ctx.globalAlpha = particle.opacity * 0.3;
            this.ctx.fillStyle = particle.color;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.restore();
        });
    }
    
    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Typing effect for Buddha art
function typeWriter(element, text, speed = 20) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            element.classList.add('completed');
        }
    }
    
    type();
}

// Create sparkles
function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}

// Random sparkles
function randomSparkles() {
    setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        createSparkle(x, y);
    }, 1000);
}

// Buddha wisdom quotes
const wisdomQuotes = [
    "Mỗi bug là một bài học, mỗi fix là một enlightenment",
    "Code không hoàn hảo, nhưng debug làm nó thanh tịnh",
    "Trong im lặng của compile, ta tìm thấy lỗi",
    "Kiên nhẫn với bug, như Phật kiên nhẫn với chúng sinh",
    "Git commit như tu hành, mỗi lần đều là tiến bộ",
    "Stack overflow là biển khổ, documentation là bờ bến",
    "Refactor code như thanh lọc tâm hồn",
    "Merge conflict như karma, phải giải quyết mới tiến được"
];

// Interactive button functions
function initializeButtons() {
    const meditationBtn = document.getElementById('meditation-btn');
    const blessingBtn = document.getElementById('blessing-btn');
    const wisdomBtn = document.getElementById('wisdom-btn');
    
    meditationBtn.addEventListener('click', () => {
        // Change background to meditation colors
        document.body.style.background = 'linear-gradient(45deg, #2c1810, #3d2914, #4a3419)';
        showNotification('🧘‍♂️ Tu Tâm Dưỡng Tính đi chời ơiii');
        
        // Add meditation effects
        setTimeout(() => {
            document.body.style.background = 'linear-gradient(45deg, #0a0a0a, #1a1a2e, #16213e)';
        }, 3000);
    });
    
    blessingBtn.addEventListener('click', () => {
        // Create blessing effect
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                createSparkle(x, y);
            }, i * 100);
        }
        showNotification('🙏 Nằm mơ đi con!');
    });
    
    wisdomBtn.addEventListener('click', () => {
        const randomQuote = wisdomQuotes[Math.floor(Math.random() * wisdomQuotes.length)];
        showNotification(`💡 ${randomQuote}`);
    });
}

// Notification system
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #667eea, #764ba2);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        z-index: 10000;
        font-family: 'Roboto Mono', monospace;
        max-width: 300px;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Mouse trail effect
class MouseTrail {
    constructor() {
        this.trail = [];
        this.maxTrail = 20;
        this.init();
    }
    
    init() {
        document.addEventListener('mousemove', (e) => {
            this.addTrailPoint(e.clientX, e.clientY);
        });
        
        this.animate();
    }
    
    addTrailPoint(x, y) {
        this.trail.push({ x, y, life: 1 });
        if (this.trail.length > this.maxTrail) {
            this.trail.shift();
        }
    }
    
    animate() {
        this.trail.forEach((point, index) => {
            point.life -= 0.05;
            if (point.life <= 0) {
                this.trail.splice(index, 1);
            } else {
                this.createTrailElement(point, index);
            }
        });
        
        requestAnimationFrame(() => this.animate());
    }
    
    createTrailElement(point, index) {
        const existing = document.querySelector(`[data-trail="${index}"]`);
        if (existing) existing.remove();
        
        const element = document.createElement('div');
        element.setAttribute('data-trail', index);
        element.style.cssText = `
            position: fixed;
            left: ${point.x}px;
            top: ${point.y}px;
            width: ${point.life * 10}px;
            height: ${point.life * 10}px;
            background: radial-gradient(circle, rgba(255,215,0,${point.life * 0.5}), transparent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 5;
            transform: translate(-50%, -50%);
        `;
        
        document.body.appendChild(element);
        
        setTimeout(() => element.remove(), 100);
    }
}

// Loading screen animation
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainContent.style.display = 'block';
            mainContent.style.opacity = '0';
            
            // Fade in main content
            setTimeout(() => {
                mainContent.style.transition = 'opacity 1s ease';
                mainContent.style.opacity = '1';
            }, 100);
            
            // Start typing Buddha art
            setTimeout(() => {
                const buddhaElement = document.getElementById('buddha-art');
                typeWriter(buddhaElement, buddhaArt, 10);
            }, 1000);
            
        }, 500);
    }, 3000);
}

// Buddha hover effect
function addBuddhaInteraction() {
    const buddhaContainer = document.querySelector('.buddha-container');
    
    buddhaContainer.addEventListener('mouseenter', () => {
        buddhaContainer.style.transform = 'scale(1.05)';
        buddhaContainer.style.filter = 'drop-shadow(0 0 20px #ffd700)';
    });
    
    buddhaContainer.addEventListener('mouseleave', () => {
        buddhaContainer.style.transform = 'scale(1)';
        buddhaContainer.style.filter = 'none';
    });
}

// Konami code for special effect
function initKonamiCode() {
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
    let userInput = [];
    
    document.addEventListener('keydown', (e) => {
        userInput.push(e.keyCode);
        if (userInput.length > konamiCode.length) {
            userInput.shift();
        }
        
        if (userInput.length === konamiCode.length && 
            userInput.every((key, index) => key === konamiCode[index])) {
            // Easter egg activation
            document.body.style.animation = 'rainbow 2s infinite';
            showNotification('🎉 KONAMI CODE ACTIVATED! Ultimate Buddha Mode Enabled!');
            
            // Add rainbow effect
            const style = document.createElement('style');
            style.textContent = `
                @keyframes rainbow {
                    0% { filter: hue-rotate(0deg); }
                    100% { filter: hue-rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
            
            setTimeout(() => {
                document.body.style.animation = '';
                style.remove();
            }, 10000);
            
            userInput = [];
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Hide loading screen
    hideLoadingScreen();
    
    // Initialize particles
    const canvas = document.getElementById('particles-canvas');
    const particleSystem = new ParticleSystem(canvas);
    particleSystem.animate();
    
    // Initialize buttons
    initializeButtons();
    
    // Add sparkles
    randomSparkles();
    
    // Mouse trail
    new MouseTrail();
    
    // Buddha interactions
    setTimeout(() => {
        addBuddhaInteraction();
    }, 4000);
    
    // Konami code
    initKonamiCode();
    
    // Welcome message
    setTimeout(() => {
        showNotification('🙏 Hẹ Hẹ');
    }, 5000);
});

// Easter egg: Buddha chant on 'om' key press
document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'o') {
        let omPressed = true;
        
        const checkM = (event) => {
            if (event.key.toLowerCase() === 'm' && omPressed) {
                // OM activated
                showNotification('🕉️ OM MANI PADME HUM - Sacred debugging chant activated!');
                
                // Visual effect
                document.body.style.filter = 'sepia(30%) hue-rotate(45deg)';
                setTimeout(() => {
                    document.body.style.filter = '';
                }, 2000);
                
                omPressed = false;
                document.removeEventListener('keydown', checkM);
            }
        };
        
        document.addEventListener('keydown', checkM);
        
        setTimeout(() => {
            omPressed = false;
            document.removeEventListener('keydown', checkM);
        }, 1000);
    }
});