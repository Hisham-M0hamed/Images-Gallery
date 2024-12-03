const initSlider =() => {
    const sliderButtons = document.querySelectorAll('.slider .button');
    const imageList = document.querySelector('.slider .list');
    const SliderScrollbar = document.querySelector('.slider .scrollbar');
    const ScrollbarThumb = document.querySelector('.slider .thumb');
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    sliderButtons.forEach(button => {
        button.addEventListener('click', () => {
            const direction =button.id === 'prev' ? -1  : 1;
            const scrollAmount =imageList.clientWidth*direction;
            imageList.scrollBy({
                left: scrollAmount,
                behavior:'smooth'
            });
        })
    })

    const updateScrollPosition =() => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition/maxScrollLeft)*(SliderScrollbar.clientWidth - ScrollbarThumb.offsetWidth);
        ScrollbarThumb.style.left = thumbPosition + 'px';
        
    }
    imageList.addEventListener('scroll', () => {
        updateScrollPosition();
    });

    
}
window.addEventListener('load', initSlider)