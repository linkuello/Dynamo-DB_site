document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.sidebar a');
    const slides = document.querySelectorAll('.slide');

    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            
            // Удалить класс 'active' у всех слайдов
            slides.forEach(slide => slide.classList.remove('active'));

            // Получить номер слайда из data-slide
            const slideNumber = link.getAttribute('data-slide');
            const targetSlide = document.querySelector(`#slide-${slideNumber}`);

            // Добавить класс 'active' к выбранному слайду
            targetSlide.classList.add('active');
        });
    });
});
