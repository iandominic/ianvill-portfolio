const sr = ScrollReveal({
    distance: '20px',
    duration: 1200,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__title`,{delay: 200})
sr.reveal(`.home__subtitle`,{delay: 400})
sr.reveal(`.home__description`,{delay: 600})
sr.reveal(`.home__buttons`,{delay: 800})
sr.reveal(`.uil-github-alt, .uil-external-link-alt`,{delay: 200})
sr.reveal(`.uil-instagram`,{delay: 400})
sr.reveal(`.uil-behance`,{delay: 600})
sr.reveal(`.about__title`,{delay: 200})
sr.reveal(`.about__icon`,{delay: 400})
sr.reveal(`.about__details`,{delay: 600})
sr.reveal(`.skills__title`,{delay: 100})
sr.reveal(`.html5`,{delay: 100})
sr.reveal(`.sass`,{delay: 200})
sr.reveal(`.js`,{delay: 300})
sr.reveal(`.tailwind`,{delay: 500})
sr.reveal(`.unity`,{delay: 600})
sr.reveal(`.github`,{delay: 700})
sr.reveal(`.project__card`,{delay: 400})



var darkMode = $(".dark-mode");
var lightMode = $(".light-mode");
var icons = $(".uil");
var dominic = $(".dominic");
var openMenu = $("#app-menu");
var closeMenu = $("#close-menu");
var bottomNavMenu = $(".bottom__nav__container__items");
var bottomMenuItem = $(".menu__bottom__item");
var theme = 1;

darkMode.click(function() {
    lightMode.show();
    darkMode.hide();
    darkModeTheme();
});

lightMode.click(function() {
    lightMode.hide();
    darkMode.show();
    lightModeTheme();
});

bottomMenuItem.click(function() {
    bottomNavMenu.css("bottom", "-100%");
})

function darkModeTheme() {
    theme = 1;
    icons.css("color", "white");
    dominic.css("color", "white");
    closeMenu.css("color", "white")
    bottomNavMenu.css("background-color", "#0D1A25")
    bottomNavMenu.css("box-shadow", "0px -.5px 3px black");

    $(".nav__link").css("color", "white");
    $(".logo").css("color", "white");
    $(".title").css("color", "white");
    $(".home__subtitle").css("color", "#057DCD");
    $(".home__description").css("color", "#959697");
    $(".touch__btn").css("background-color", "#0D1A25");
    $(".touch__btn").css("color", "white");
    $(".bottom__nav__container").css("box-shadow", "0px -.5px 3px black");
    $(".bottom__nav__container").css("background-color", "#0D1A25");
    $(".bottom__nav__container").css("transition", ".3s all ease");
    $("body").css("background-color", "#0D1A25");
    $("body").css("transition", ".3s all ease");
    $(".menu__text").css("color", "white");
    $(".about__title").css("color", "white");
    $(".about__name").css("color", "white");
    $(".about__description").css("color", "#959697");
    $(".skills__title").css("color", "white");
}


function lightModeTheme() {
    theme = 2
    icons.css("color", "#1E3D58");
    dominic.css("color", "#0D1A25");
    closeMenu.css("color", "#0D1A25")
    bottomNavMenu.css("background-color", "#E8EEF1")
    bottomNavMenu.css("box-shadow", "0px -.5px 3px black");

    $(".nav__link").css("color", "#0D1A25");
    $(".logo").css("color", "#0D1A25");
    $(".title").css("color", "#1E3D58");
    $(".home__subtitle").css("color", "#607D8B");
    $(".home__description").css("color", "#607D8B");
    $(".touch__btn").css("background-color", "#E8EEF1");
    $(".touch__btn").css("color", "#057DCD");
    $(".bottom__nav__container").css("box-shadow", "0px -.5px 3px black");
    $(".bottom__nav__container").css("background-color", "#E8EEF1");
    $("body").css("background-color", "#E8EEF1");
    $("body").css("transition", ".3s all ease");
    $(".bottom__nav__container").css("transition", ".3s all ease");
    $(".menu__text").css("color", "#0D1A25");
    $(".about__title").css("color", "#1E3D58")
    $(".about__name").css("color", "#1E3D58");
    $(".about__description").css("color", "#959697");
    $(".skills__title").css("color", "#1E3D58");
}

openMenu.click(function() {
    bottomNavMenu.css("bottom", "0");
})

closeMenu.click(function() {
    bottomNavMenu.css("bottom", "-100%");
})

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__list__desktop a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__list__desktop a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


if(theme === 1) {
    darkModeTheme();
    lightMode.show();
    darkMode.hide();
} else if(theme === 2) {
    lightMode.hide();
    darkMode.show();
    lightModeTheme();
}
