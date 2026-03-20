/**
 * UTILITÁRIOS - Funções auxiliares reutilizáveis
 */

/**
 * Mostra uma notificação toast temporária na tela.
 * tipo: 'success' | 'danger' | 'warning' | '' (padrão escuro)
 */
function mostrarToast(mensagem, tipo = 'success', duracao = 3000) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const icones = {
    success: '✓',
    danger: '✕',
    warning: '⚠',
    '': 'ℹ'
  };

  const toast = document.createElement('div');
  toast.className = `toast ${tipo}`;
  toast.innerHTML = `<span>${icones[tipo] || 'ℹ'}</span> ${mensagem}`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, duracao);
}

/**
 * Formata a data atual como string legível.
 */
function dataAtualFormatada() {
  const d = new Date();
  return d.toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Retorna a data de hoje no formato DD/MM/AAAA
 */
function hoje() {
  return new Date().toLocaleDateString('pt-BR');
}

/**
 * Retorna a hora atual no formato HH:MM
 */
function horaAtual() {
  return new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

/**
 * Retorna o dia da semana atual em minúsculas (segunda, terca, etc.)
 */
function diaSemanaAtual() {
  const dias = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
  return dias[new Date().getDay()];
}

/**
 * Capitaliza a primeira letra de uma string.
 */
function capitalizar(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Abre um modal pelo ID.
 */
function abrirModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('open');
}

/**
 * Fecha um modal pelo ID.
 */
function fecharModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('open');
}

/**
 * Fecha todos os modais ao clicar no overlay.
 */
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('open');
  }
});

/**
 * Controle do menu hamburguer (mobile)
 */
function inicializarHamburger() {
  const hamburger = document.getElementById('hamburger');
  const overlay = document.getElementById('sidebar-overlay');
  const sidebar = document.getElementById('sidebar-mobile');

  if (hamburger) {
    hamburger.addEventListener('click', function() {
      overlay.classList.add('open');
      sidebar.classList.add('open');
    });
  }

  if (overlay) {
    overlay.addEventListener('click', function() {
      overlay.classList.remove('open');
      sidebar.classList.remove('open');
    });
  }
}

/**
 * Inicializa os tabs de uma seção.
 */
function inicializarTabs(containerSelector) {
  const container = document.querySelector(containerSelector) || document;
  const tabs = container.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      const alvo = this.dataset.tab;
      container.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      const conteudo = container.querySelector(`#${alvo}`);
      if (conteudo) conteudo.classList.add('active');
    });
  });
}

/**
 * Gera um ID único simples.
 */
function gerarId() {
  return Date.now() + Math.floor(Math.random() * 1000);
}
