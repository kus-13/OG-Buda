const slider = document.querySelector('.slider');
const slideTrack = document.querySelector('.slide-track');

slider.addEventListener('mouseenter', () => {
    slideTrack.style.animationPlayState = 'paused';
});

slider.addEventListener('mouseleave', () => {
    slideTrack.style.animationPlayState = 'running';
});