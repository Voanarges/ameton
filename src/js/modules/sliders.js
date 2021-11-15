const sliders = (sliderSelector, nextSelector) => {
    const slides = document.querySelectorAll(sliderSelector),
        // prevBtn = document.querySelector(prevSelector),
        nextBtn = document.querySelector(nextSelector);


    let slideIndex = 1,
        paused = false;

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1; 
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        window.addEventListener('resize', ()=>{
            if(window.screen.availWidth < 1200) {
                slides.forEach(item => {
                    item.classList.add("animate__animated");
                    item.style.display = "none";
                    }) 
                slides[slideIndex - 1].style.display = 'flex';
             } else if (window.screen.availWidth > 1200) {
                slides.forEach(item => {
                    item.classList.add("animate__animated");
                    item.style.display = "flex";
                }) 
             } else {
                slides.forEach(item => {
                    item.classList.add("animate__animated");
                })
             }
        })
        // if(window.screen.availWidth < 1200) {
        //    slides.forEach(item => {
        //     item.classList.add("animate__animated");
        //     item.style.display = "none";
        //     }) 
        //     slides[slideIndex - 1].style.display = 'flex';
        // } else {
        //     slides.forEach(item => {
        //         item.classList.add("animate__animated");
        //         })
        // }
        
        // 
    }
    // function showSlides(n) {
    //     if (n > slides.length) {
    //         slideIndex = 1; 
    //     }
    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }
    //     slides.forEach(item => {
    //         item.classList.add("animate__animated");
    //         // item.style.display = "none";
    //     })
    //     // slides[slideIndex - 1].style.display = 'block';
    // }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    showSlides();

    try {
        // prevBtn.addEventListener('click', () => {
        //     plusSlides(-1);
        //     slides[slideIndex - 1].classList.remove('animate__slideInLeft');
        //     slides[slideIndex - 1].classList.add('animate__slideInRight');
        // });
        nextBtn.addEventListener('click', function(){
            console.log('touch');
            plusSlides(+1);
            // this.parentNode.previousElementSibling.style.display = 'none';
            // this.parentNode.style.display = 'block';
            slides[slideIndex - 1].classList.remove('animate__slideInLeft');
            slides[slideIndex - 1].classList.add('animate__slideInRight');
        });
    } catch (e) {}
    
   

};
export default sliders;