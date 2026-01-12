const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


const texto = "IT-Student & Web Developer";
const velocidadeLetra = 100;
const tempoEspera = 10000; // 10 segundos

function iniciarCiclo() {
  const alvo = document.getElementById("typing");
  if (!alvo) return;

  // Limpa o texto para recomeçar
  alvo.textContent = "";
  let i = 0;

  console.log("Iniciando digitação...");

  function escrever() {
    if (i < texto.length) {
      alvo.textContent += texto.charAt(i);
      i++;
      setTimeout(escrever, velocidadeLetra);
    } else {
      console.log("Texto completo. Aguardando 10 segundos para repetir...");
    }
  }

  escrever();
}

// Inicia quando a página carregar
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";

  // Roda a primeira vez
  iniciarCiclo();

  // Configura a repetição
  setInterval(iniciarCiclo, tempoEspera);
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


