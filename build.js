// Typed functionality
new Typed('.hello-world', {
    strings: ['Hello world!', '¡Hola Mundo!', 'Halo Dunia!', 'Bonjour monde!', 'こんにちは世界!','Hej världen!', 'مرحبا بالعالم!', '你好世界!'],
    startDelay: 250,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 5000,
    showCursor: true,
    loop: true,
});

// Scroll to functionality
scrollToItems = ['about-me', 'projects', 'course-notes', 'contact']
scrollToItems.forEach(sec => {
    document.querySelector(`.${sec}-item`).addEventListener('click', () => {
        const e = document.querySelector(`#${sec}`)
        const y = e.getBoundingClientRect().top + window.scrollY;
        window.scroll({
            top: y,
        });
    })
});

document.querySelector('.name').addEventListener('click', () => {
    window.scroll({
        top: 0,
    });
})

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

scrollToItems.forEach((sec) => {
    document.querySelector(`.menu-window-items .${sec}-item`).addEventListener('click', () => {
        toggleMenuHide(false);
        const e = document.querySelector(`#${sec}`)
        const y = e.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: y,
            behavior: 'instant'
        }); 
    })
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
courseNotes = [
               ['cs1511', 'https://normefbsydaafbkdjchx.supabase.co/storage/v1/object/public/website//comp1511.pdf'],
               ['cs1521', 'https://normefbsydaafbkdjchx.supabase.co/storage/v1/object/public/website//comp1521.pdf'],
               ['cs1531', 'https://normefbsydaafbkdjchx.supabase.co/storage/v1/object/public/website//comp1531.pdf'],
               ['cs2511', 'https://normefbsydaafbkdjchx.supabase.co/storage/v1/object/public/website//comp2511.pdf'],
               ['cs2521', 'https://normefbsydaafbkdjchx.supabase.co/storage/v1/object/public/website//comp2521.pdf'],
               ['cs2041', 'https://ridho-y.github.io/comp2041-notes/'],
               ['cs3311', 'https://ridho-y.github.io/comp3311-notes/'],
               ['cs6080', 'https://ridho-y.github.io/comp6080-notes/'],
            ]

courseNotes.forEach(([course, link]) => {
    document.querySelector(`.${course}`).addEventListener('click', () => {
        open(link)
    })
})

// Contact links
document.querySelector('.email').addEventListener('click', () => {
    location.href = "mailto:hello.ridhoy@gmail.com";
})

$(document).ready(() => {
    $('.contact-logo').hover(function() {$(this).css('fill', 'rgb(175, 226, 255)')},
        function() {$(this).css('fill', 'rgb(233, 246, 255)')})
});

// Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        // console.log(e)
        if (e.isIntersecting) {
            e.target.classList.add('present')
        }
    })
})

const animatedItems = document.querySelectorAll('.animated-item');
animatedItems.forEach(ai => observer.observe(ai));