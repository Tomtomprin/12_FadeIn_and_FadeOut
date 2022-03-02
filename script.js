const ClassA = document.querySelector('.A');

window.onscroll = function () {
    const scroll_position = window.pageYOffset;
    if (scroll_position > 400) {
        ClassA.style.opacity = 1;
    } else {
        ClassA.style.opacity = 0;
    }
}