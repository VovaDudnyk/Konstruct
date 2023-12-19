document.querySelector('.scroll').addEventListener('click', function() {
    const mainAboutSection = document.querySelector('.main-about');
    if (mainAboutSection) {
        window.scrollTo({
            top: mainAboutSection.offsetTop,
            behavior: 'smooth '
        });
    }
});