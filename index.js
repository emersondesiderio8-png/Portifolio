const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  let timerDigitacao; // Guarda o tempo de cada letra
  let i = 0;
  const texto = "IT-Student & Web Developer";
  const velocidade = 100;
  
  function iniciarEfeito() {
      const alvo = document.getElementById("typing");
      if (!alvo) return;
  
      // 1. PARAR e LIMPAR tudo antes de começar
      clearTimeout(timerDigitacao); 
      alvo.textContent = ""; 
      i = 0;
  
      // 2. Chamar a função de escrita
      escrever();
  }
  
  function escrever() {
      const alvo = document.getElementById("typing");
      
      if (i < texto.length) {
          alvo.textContent += texto.charAt(i);
          i++;
          // Agenda a próxima letra
          timerDigitacao = setTimeout(escrever, velocidade);
      }
  }
  
  // Inicialização
  window.addEventListener("load", () => {
      // Remove o loader
      const loader = document.getElementById("loader");
      if (loader) loader.style.display = "none";
  
      // Inicia a primeira vez
      iniciarEfeito();
  
      // Repete a cada 10 segundos de forma limpa
      setInterval(iniciarEfeito, 10000);
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
