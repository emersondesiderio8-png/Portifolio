const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  let intervaloDigitacao; // Variável global para controlar o timer

  function efeitoHacker() {
    const alvo = document.getElementById("typing");
    if (!alvo) return;
  
    const texto = "IT-Student & Web Developer";
    let i = 0;
  
    // 1. Limpa o texto e para qualquer processo anterior
    alvo.textContent = "";
    clearInterval(intervaloDigitacao); 
  
    // 2. Função que escreve
    function escrever() {
      if (i < texto.length) {
        alvo.textContent += texto.charAt(i);
        i++;
        setTimeout(escrever, 100);
      }
    }
  
    escrever();
  }
  
  // Inicialização segura
  window.addEventListener("load", () => {
    // Esconde o loader
    if(document.getElementById("loader")) {
        document.getElementById("loader").style.display = "none";
    }
  
    // Inicia o ciclo
    efeitoHacker();
  
    // Define a repetição de 10 em 10 segundos de forma limpa
    setInterval(efeitoHacker, 10000);
  });
/*Revelação suave*/

const observador = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visivel');
        }
    });
}, { threshold: 0.1 }); // Dispara quando 10% do elemento aparece

document.querySelectorAll('.revelar').forEach(el => observador.observe(el));

/* Impedir o zoom*/ 

// Bloqueia o zoom de pinça (multi-touch)
document.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  }, { passive: false });
  
  // Bloqueia o zoom de toque duplo
  let lastTouchEnd = 0;
  document.addEventListener('touchend', function (event) {
    let now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);
