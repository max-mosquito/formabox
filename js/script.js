const headerSlider = new Swiper('.header_slider', {
   slidesPerView: 1,
   loop: true,
   autoplay: true,

   autoplay:{
      delay: 4000,
   },

   speed: 1500,

   effect: 'fade',
   fadeEffect: {
      crossFade: true,
   },
 
   navigation: {
      nextEl: '.swiper_button_next',
      prevEl: '.swiper_button_prev',
    },

    pagination: {
      el: '.swiper_pagination',
    },
 })

 //tabs--------------------
 const tabBtn = document.querySelectorAll('.techology_tabs_headers_item');
 const tabContent = document.querySelectorAll('.techology_tabs_contemt_item');

function tabReset() {
   tabBtn.forEach(item => {
      item.classList.remove('active');
   })

   tabContent.forEach(item => {
      item.classList.remove('active');
   })
}

 tabBtn.forEach((item, i) => {
   item.addEventListener('click', () => {
      tabReset()

      item.classList.add('active');

      tabContent[i].classList.add('active');
   })
 })
 