window.addEventListener('scroll', function() {
    var header = document.getElementById('main-header');
    if (window.scrollY > 130) { // You can adjust the scroll position value
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});