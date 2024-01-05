var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    autoplay: {
        delay: 4500,
        // disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });