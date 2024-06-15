document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;
  
    function showSlide(index) {
      carousel.style.transform = `translateX(-${index * 100}%)`;
      items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
      });
      indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
      });
    }
  
    document.querySelector('.prev').addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
      showSlide(currentIndex);
    });
  
    document.querySelector('.next').addEventListener('click', () => {
      currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
      showSlide(currentIndex);
    });
  
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        showSlide(index);
      });
    });
  });