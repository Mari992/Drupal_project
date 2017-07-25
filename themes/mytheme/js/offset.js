function addMargin() {
    window.scrollTo(0, window.pageYOffset - 135);
}

window.addEventListener('hashchange', addMargin);
