// Исходные данные по слайдеру
const sliderImages = document.querySelectorAll('.review__slider-item'),
      sliderLine = document.querySelector('.review__slider-line'),
      sliderDots = document.querySelectorAll('.pagination__button'),
      sliderBtnPrev = document.querySelector('.slider__btn-prev'),
      sliderBtnNext = document.querySelector('.slider__btn-next');

// Переменные счетчик и ширина
let sliderCount = 0,
    sliderWidth;

// Адаптивность слайдера
window.addEventListener('resize', showSlide);

// Кнопки листания слайдов вперед и назад
sliderBtnPrev.addEventListener('click', prevSlide);
sliderBtnNext.addEventListener('click', nextSlide);

//Автоматическое перелистывание слайдов
// setInterval(() => {
//     nextSlide()
// }, 3000);

//----- Функции -----------------------------------------------------
// Задает нужную ширину картинки и sliderLine
function showSlide() {
    sliderWidth = document.querySelector('.review__slider').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');

    rollSlider();
}
showSlide();

// Перелистывает слайд назад
function prevSlide() {
    sliderCount--;
    if (sliderCount < 0) sliderCount = sliderImages.length -1;
        // sliderLine.style.transition = "none";
        rollSlider();
        thisSlide(sliderCount);
}

// Перелистывает слайд вперед
function nextSlide() {
    sliderCount++;
    if (sliderCount >= sliderImages.length) sliderCount = 0;
        // sliderLine.style.transition = "none";
        rollSlider();
        thisSlide(sliderCount);
}

// Задает шаг перемещения слайдов
function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

// Указывает какой слайд по счету активен
function thisSlide(index) {
    sliderDots.forEach(item => item.classList.remove('active-dot'));
    sliderDots[index].classList.add('active-dot');
}

// Вешаем клик на дот
sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        thisSlide(sliderCount);
    })
})
