function saudar() {
    alert("Olá! Você clicou no botão!");
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/*/*

  /* Configurações */
const textoParaDigitar = "IT-Student & Web Developer";
let caractereAtual = 0;
const velocidade = 100;

function efeitoDigitacao() {
  const elemento = document.getElementById("typing");

  if (!elemento) {
    console.error("Erro: Não encontrei o elemento com ID 'typing'");
    return;
  }

  if (caractereAtual < textoParaDigitar.length) {
    elemento.textContent += textoParaDigitar.charAt(caractereAtual);
    caractereAtual++;
    setTimeout(efeitoDigitacao, velocidade);
  } else {
    console.log("Digitação concluída!");
  }
}

/* Gatilho de Inicialização */
window.addEventListener("load", () => {
  // Esconde o loader
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";

  console.log("Iniciando animação...");
  // Pequena pausa de 300ms para garantir que o layout carregou
  setTimeout(efeitoDigitacao, 300);
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