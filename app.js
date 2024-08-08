function adjustHeight() {
    const elSignup = document.querySelector('#signup');
    const elIntro = document.querySelector('#intro');

    if (window.innerWidth < 1000) {
        elIntro.style.height = `${elSignup.offsetHeight}px`;
    } else {
        elIntro.style.height = ''; // RESET THE HEIGHT WHEN SCREEN WIDTH IS 1000PX OR MORE
    }
}

// CALL THE FUNCTION INITIALLY
adjustHeight();

// ADJUST THE HEIGHT ON WINDOW RESIZE
window.addEventListener('resize', adjustHeight);
