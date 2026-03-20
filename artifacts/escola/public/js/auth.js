/**
 * AUTENTICAÇÃO - Login e controle de sessão
 * Gerencia login, logout e verificação de sessão do usuário.
 */

// Chave usada para armazenar o usuário logado
const SESSAO_KEY = 'escola_sessao';

/**
 * Tenta fazer login com email e senha.
 * Retorna o usuário se bem-sucedido, ou null se falhar.
 */
function fazerLogin(email, senha) {
  const usuarios = JSON.parse(localStorage.getItem('escola_usuarios') || '[]');
  const usuario = usuarios.find(u => u.email === email && u.senha === senha && u.ativo);
  if (usuario) {
    // Salva a sessão sem a senha
    const sessao = { ...usuario };
    delete sessao.senha;
    localStorage.setItem(SESSAO_KEY, JSON.stringify(sessao));
    return sessao;
  }
  return null;
}

/**
 * Retorna o usuário da sessão atual, ou null se não estiver logado.
 */
function obterUsuarioLogado() {
  const sessao = localStorage.getItem(SESSAO_KEY);
  return sessao ? JSON.parse(sessao) : null;
}

/**
 * Faz logout do usuário atual.
 */
function fazerLogout() {
  localStorage.removeItem(SESSAO_KEY);
  window.location.href = 'login.html';
}

/**
 * Verifica se o usuário está logado.
 * Se não estiver, redireciona para o login.
 */
function exigirLogin() {
  const usuario = obterUsuarioLogado();
  if (!usuario) {
    window.location.href = 'login.html';
    return null;
  }
  return usuario;
}

/**
 * Verifica se o usuário logado é administrador.
 * Se não for, redireciona para o painel do tutor.
 */
function exigirAdmin() {
  const usuario = exigirLogin();
  if (usuario && usuario.tipo !== 'admin') {
    window.location.href = 'dashboard-tutor.html';
    return null;
  }
  return usuario;
}

/**
 * Preenche as informações do usuário na navbar.
 * Chame essa função em todas as páginas protegidas.
 */
function preencherNavbar(usuario) {
  const nomeEl = document.getElementById('navbar-nome');
  const tipoEl = document.getElementById('navbar-tipo');
  const avatarEl = document.getElementById('navbar-avatar');
  
  if (nomeEl) nomeEl.textContent = usuario.nome.split(' ').slice(0, 2).join(' ');
  if (tipoEl) tipoEl.textContent = usuario.tipo === 'admin' ? 'Administrador' : 'Tutor';
  if (avatarEl) avatarEl.textContent = usuario.nome.charAt(0).toUpperCase();

  // Destaca o link ativo na navbar
  const links = document.querySelectorAll('.navbar-nav a, .sidebar-mobile a');
  const paginaAtual = window.location.pathname.split('/').pop();
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === paginaAtual) {
      link.classList.add('active');
    }
  });
}
