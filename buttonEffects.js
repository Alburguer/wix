document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('.btn-ouro');
  button.addEventListener('mouseover', criarParticulas);
  button.addEventListener('click', efeitoGota);
});

function criarParticulas(event) {
  for (let i = 0; i < 20; i++) {
    const particula = document.createElement('span');
    particula.classList.add('particula-ouro');
    event.target.appendChild(particula);

    const x = event.clientX - event.target.getBoundingClientRect().left;
    const y = event.clientY - event.target.getBoundingClientRect().top;
    particula.style.left = `${x}px`;
    particula.style.top = `${y}px`;

    setTimeout(() => {
      particula.remove();
    }, 1000);
  }
}

function efeitoGota(event) {
  // Adicione aqui o efeito de gota na água quando clicado
}
