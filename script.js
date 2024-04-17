document.addEventListener('DOMContentLoaded', function () {
    const carrosselImagens = document.querySelector('.carrossel-imagens');
    const setaEsquerda = document.querySelector('.seta-esquerda');
    const setaDireita = document.querySelector('.seta-direita');
  
    let currentSlide = 0;
    const totalSlides = document.querySelectorAll('.carrossel-imagens li').length;
  
    setaDireita.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % totalSlides;
      carrosselImagens.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
  
    setaEsquerda.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      carrosselImagens.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
  });
  