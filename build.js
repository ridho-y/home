
// Scroll to functionality
document.querySelector('.name').addEventListener('click', () => {
    window.scroll({
        top: 0,
    });
})

document.querySelector('.about-me-item').addEventListener('click', () => {
    const e = document.querySelector('#about-me')
    const y = e.getBoundingClientRect().top + window.scrollY;
    window.scroll({
        top: y,
    });
})

document.querySelector('.projects-item').addEventListener('click', () => {
    const e = document.querySelector('#projects')
    const y = e.getBoundingClientRect().top + window.scrollY;
    window.scroll({
        top: y,
    });
})

document.querySelector('.course-notes-item').addEventListener('click', () => {
    const e = document.querySelector('#course-notes')
    const y = e.getBoundingClientRect().top + window.scrollY;
    window.scroll({
        top: y,
    });
})

document.querySelector('.contact-item').addEventListener('click', () => {
    const e = document.querySelector('#contact')
    const y = e.getBoundingClientRect().top + window.scrollY;
    window.scroll({
        top: y,
    });
})


// Carousel for course notes
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 25,
    speed: 1000,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    allowTouchMove: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

// Course notes links

document.querySelector('.cs1511').addEventListener('click', () => {
    open('https://drive.google.com/u/0/uc?id=15BrgL7cfLTBjQjOa2RluiHC3nwYjpi0C&export=download')
})

document.querySelector('.cs1521').addEventListener('click', () => {
    open('https://drive.google.com/u/0/uc?id=1pQJJ74G8B7ZH7wUuM75NNU3xStzlx39Q&export=download')
})

document.querySelector('.cs1531').addEventListener('click', () => {
    open('https://drive.google.com/u/0/uc?id=1ie4rxusR4JtoAngkuSyaLttpZn796DQC&export=download')
})

document.querySelector('.cs2511').addEventListener('click', () => {
    open('https://drive.google.com/u/0/uc?id=1sVDtycXCAKrjKD-_oaEmL4jwb3lNIiBw&export=download')
})

document.querySelector('.cs2521').addEventListener('click', () => {
    open('https://drive.google.com/u/0/uc?id=1wAnUr9pTg0HLGW_hhWkRDNlknjdNwmwE&export=download')
})

document.querySelector('.cs2041').addEventListener('click', () => {
    open('https://ridho-y.github.io/comp2041-notes/')
})

document.querySelector('.cs3311').addEventListener('click', () => {
    open('https://ridho-y.github.io/comp3311-notes/')
})

document.querySelector('.cs6080').addEventListener('click', () => {
    open('https://ridho-y.github.io/comp6080-notes/')
})

// Contact links

document.querySelector('.email').addEventListener('click', () => {
    location.href = "mailto:hello.ridhoy@gmail.com";
})

$(document).ready(() => {
    $('.contact-logo').hover(function() {$(this).css('fill', 'rgb(175, 226, 255)')},
        function() {$(this).css('fill', 'rgb(233, 246, 255)')})
});

// Menu item functionality
const toggleMenuHide = (menuShown) => {
    if (menuShown) {
        document.querySelector('#menu-window').style.opacity = 1;
        document.querySelector('#menu-window').style.zIndex = 1000;
        document.body.style.overflow = 'hidden';
    } else {
        document.querySelector('#menu-window').style.opacity = 0;
        document.querySelector('#menu-window').style.zIndex = -1000;
        document.body.style.overflow = 'auto';
    }
}

document.querySelector('.menu-items-rsp').addEventListener('click', () => {
    toggleMenuHide(true);
})

document.querySelector('.exit').addEventListener('click', () => {
    toggleMenuHide(false);
})

document.querySelector('.menu-window-items .name').addEventListener('click', () => {
    toggleMenuHide(false);
    window.scrollTo({
        top: 0,
        behavior: 'instant'
    }); 
})

document.querySelector('.menu-window-items .about-me-item').addEventListener('click', () => {
    toggleMenuHide(false);
    const e = document.querySelector('#about-me')
    const y = e.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
        top: y,
        behavior: 'instant'
    }); 
})

document.querySelector('.menu-window-items .projects-item').addEventListener('click', () => {
    toggleMenuHide(false);
    const e = document.querySelector('#projects')
    const y = e.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
        top: y,
        behavior: 'instant'
    }); 
})

document.querySelector('.menu-window-items .course-notes-item').addEventListener('click', () => {
    toggleMenuHide(false);
    const e = document.querySelector('#course-notes')
    const y = e.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
        top: y,
        behavior: 'instant'
    }); 
})

document.querySelector('.menu-window-items .contact-item').addEventListener('click', () => {
    toggleMenuHide(false);
    const e = document.querySelector('#contact')
    const y = e.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
        top: y,
        behavior: 'instant'
    }); 
})