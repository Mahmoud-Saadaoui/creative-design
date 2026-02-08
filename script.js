// section-2: adding information to 'customers-card'
const customers = [
    {
        alt    :  'customer-1',
        name   : 'Jane Lee',
        imgSRC : './img/customer-img-1.jpg',
        rating : 3.4
    },
    {
        alt    :  'customer-2',
        name   : 'Bob Smith',
        imgSRC : './img/customer-img-2.jpg',
        rating : 4.7
    },
    {
        alt    :  'customer-3',
        name   : 'Ann Brown',
        imgSRC : './img/customer-img-3.jpg',
        rating : 3.7
    }
]

const customersCardName = document.querySelectorAll('.customers-card-name')
// console.log(customersCardName);
const customersCardRate = document.querySelectorAll('.customers-card-rate')
// console.log(customersCardRate);

for( let customer = 0; customer<customers.length; customer++){
    // adding img to customers-card-name
    let customerImg = document.createElement('img')
    customerImg.setAttribute('src', customers[customer].imgSRC)
    customerImg.setAttribute('alt', customers[customer].alt)
    customersCardName[customer].appendChild(customerImg)

    // adding the name to customers-card-name
    let customerName = document.createElement('h3')
    customerName.innerText = customers[customer].name
    customersCardName[customer].appendChild(customerName)

    // adding the rate
    let rate = (customers[customer].rating * 100)/5;

    if (rate <= 10){
        customersCardRate[customer].innerHTML = `<i class="fa-solid fa-star-half-stroke"></i>`

    }
    else if( 11 <= rate && rate <= 20) {
        customersCardRate[customer].innerHTML = `<i class="fa-solid fa-star"></i>`

    }
    else if (21 <= rate && rate <= 30) {
        customersCardRate[customer].innerHTML = `<i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>`

    } 
    else if (31 <= rate && rate <= 40) {
        customersCardRate[customer].innerHTML = `<i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>`

    } 
    else if (41 <= rate && rate <= 50) {
        customersCardRate[customer].innerHTML = `<i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>`

    } 
    else if (51 <= rate && rate <= 60) {
        customersCardRate.innerHTML = `<i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>`

    } 
    else if (61 <= rate && rate <= 70) {
        customersCardRate[customer].innerHTML = `<i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>`

    } 
    else if (71 <= rate && rate <= 80) {
        customersCardRate[customer].innerHTML = `<i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>`

    } 
    else if (81 <= rate && rate <= 90) {
        customersCardRate[customer].innerHTML = `<i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>`

    } 
    else if (91 <= rate && rate <= 100) {
        customersCardRate[customer].innerHTML = `<i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>`
    }

    customersCardRate[customer].classList.add('icon-style')
}

// section-3
const iconsBtn         = document.querySelectorAll('.card-icon ')
const changeBackground = document.querySelectorAll('.change-background')
const teamInfo         = document.querySelectorAll('.team-info')

for (let i = 0; i < iconsBtn.length; i++) {
    iconsBtn[i].innerHTML = `<i class="fa-solid fa-circle-plus"></i>`
    iconsBtn[i].addEventListener('click', ()=>{
        
        if(iconsBtn[i].innerHTML === `<i class="fa-solid fa-circle-plus"></i>`){
            //show team's information and change the background of the card
            iconsBtn[i].innerHTML = `<i class="fa-solid fa-circle-minus"></i>`
            changeBackground[i].classList.add("change-background-active")
            teamInfo[i].classList.add("team-info-change")
        } else{
            //return to the initial card
            iconsBtn[i].innerHTML = `<i class="fa-solid fa-circle-plus"></i>`
            changeBackground[i].classList.remove("change-background-active")
            teamInfo[i].classList.remove("team-info-change")
        }

    })
    
}

// section-4

// Carousel for Customers Section
class CustomersCarousel {
    constructor() {
        this.carousel = document.getElementById('customersCarousel');
        this.cards = document.querySelectorAll('.customers-card');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.dotsContainer = document.getElementById('carouselDots');
        this.currentIndex = 0;
        this.autoScrollInterval = null;
        this.autoScrollDelay = 4000;

        this.init();
    }

    init() {
        // Create dots
        this.createDots();

        // Add event listeners
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());

        // Touch/Swipe support
        let startX = 0;
        let endX = 0;

        this.carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        this.carousel.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            if (startX - endX > 50) this.next();
            if (endX - startX > 50) this.prev();
        });

        // Start auto scroll
        this.startAutoScroll();

        // Pause on hover
        const wrapper = document.querySelector('.carousel-wrapper');
        wrapper.addEventListener('mouseenter', () => this.stopAutoScroll());
        wrapper.addEventListener('mouseleave', () => this.startAutoScroll());

        // Initial update
        this.updateCarousel();
    }

    createDots() {
        this.cards.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('carousel-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goTo(index));
            this.dotsContainer.appendChild(dot);
        });
    }

    updateDots() {
        const dots = document.querySelectorAll('.carousel-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }

    getCardWidth() {
        return this.cards[0].offsetWidth + 30; // card width + gap
    }

    updateCarousel() {
        const cardWidth = this.getCardWidth();
        const offset = -this.currentIndex * cardWidth;
        this.carousel.style.transform = `translateX(${offset}px)`;
        this.updateDots();
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.cards.length;
        this.updateCarousel();
        this.resetAutoScroll();
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
        this.updateCarousel();
        this.resetAutoScroll();
    }

    goTo(index) {
        this.currentIndex = index;
        this.updateCarousel();
        this.resetAutoScroll();
    }

    startAutoScroll() {
        this.autoScrollInterval = setInterval(() => this.next(), this.autoScrollDelay);
    }

    stopAutoScroll() {
        clearInterval(this.autoScrollInterval);
    }

    resetAutoScroll() {
        this.stopAutoScroll();
        this.startAutoScroll();
    }
}

// Initialize carousel when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new CustomersCarousel();
});

// Hero Particles Animation
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Particle class
class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.color = `rgba(255, 255, 255, ${this.opacity})`;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around screen
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

// Create particles
const particles = [];
const particleCount = 80;

for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

// Mouse interaction
let mouse = { x: null, y: null };
window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

// Connect particles with lines
function connectParticles() {
    for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
            const dx = particles[a].x - particles[b].x;
            const dy = particles[a].y - particles[b].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
                const opacity = (150 - distance) / 150 * 0.2;
                ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.stroke();
            }
        }

        // Connect to mouse
        if (mouse.x !== null && mouse.y !== null) {
            const dx = particles[a].x - mouse.x;
            const dy = particles[a].y - mouse.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 200) {
                const opacity = (200 - distance) / 200 * 0.3;
                ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.stroke();
            }
        }
    }
}

// Animation loop
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    connectParticles();
    requestAnimationFrame(animateParticles);
}

animateParticles();

// Reset mouse when leaving window
window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
});

// Sticky Navbar with scroll effect
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navbarMenu = document.querySelector('.navbar-menu');
const navbarLinks = document.querySelectorAll('.navbar-link');

// Change navbar style on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update active link based on scroll position
    updateActiveLink();
});

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbarMenu.classList.toggle('active');
    document.body.style.overflow = navbarMenu.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking on a link
navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navbarMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Update active link based on scroll position
function updateActiveLink() {
    const sections = document.querySelectorAll('.section-1, .section-2, .section-3, .section-4');
    const scrollPos = window.scrollY + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navbarLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Scroll Reveal Animations using Intersection Observer
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Optional: Stop observing after revealing
            // observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15, // Trigger when 15% of element is visible
    rootMargin: '0px 0px -50px 0px' // Offset from bottom
});

// Observe all reveal elements
revealElements.forEach(element => {
    revealObserver.observe(element);
});

// show the form
const inputBtn = document.querySelector('.submit-wrapper')
const showForm = document.querySelector('.form-section form')
const formImg = document.querySelector('.form-section img')
inputBtn.addEventListener('click', ()=>{

    showForm.classList.add('active')
    formImg.classList.add('change-opacity')
    
})
