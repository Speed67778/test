        const slider = document.querySelector('.slider');
        const dots = document.querySelectorAll('.dot');
        const prevBtn = document.querySelector('.prev');
        const nextBtn = document.querySelector('.next');
        let currentSlide = 0;
        const totalSlides = 4;

        function updateSlider() {
            slider.style.transform = `translateX(-${currentSlide * 20}%)`;
            
            dots.forEach((dot, index) => {
                dot.style.background = index === currentSlide ? 
                    'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.5)';
                dot.style.transform = index === currentSlide ? 'scale(1.2)' : 'scale(1)';
            });
        }

        prevBtn.addEventListener('click', () => {
            currentSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
            updateSlider();
        });

        nextBtn.addEventListener('click', () => {
            currentSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
            updateSlider();
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                updateSlider();
            });
        });