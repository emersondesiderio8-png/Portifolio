const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


 /EFEITO QUE ESTA DE BAIXO DO MEU NOME

  const textoParaDigitar = "IT-Student & Web Developer";
const velocidade = 100; // Velocidade de cada letra
const intervaloRepeticao = 10000; // 10 segundos

function efeitoDigitacao() {
  const elemento = document.getElementById("typing");
  let caractereAtual = 0;

  // 1. Limpa o texto antes de começar a digitar
  elemento.textContent = "";

  // 2. Cria a função interna que vai digitar letra por letra
  const digita = () => {
    if (caractereAtual < textoParaDigitar.length) {
      elemento.textContent += textoParaDigitar.charAt(caractereAtual);
      caractereAtual++;
      setTimeout(digita, velocidade);
    }
  };

  digita();
}

/* Inicialização */
window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
  
    // Inicia a primeira vez
    efeitoDigitacao();
  
    // Define para repetir a cada 10 segundos
    setInterval(efeitoDigitacao, intervaloRepeticao);
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

