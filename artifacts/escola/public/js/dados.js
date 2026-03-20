/**
 * DADOS INICIAIS DO SISTEMA ESCOLAR
 * Inicializa o localStorage com os dados de exemplo ao abrir pela primeira vez.
 * Para resetar, limpe o localStorage no navegador (F12 → Application → Clear Storage).
 */

const ESCOLA = {
  nome: "Escola Estadual Professor Antonio Dantas",
  diretor: "Administrador",
  endereco: "Endereço da escola",
  telefone: "(00) 0000-0000",
  email: "contato@antonidantas.edu.br"
};

/* ============================================
   USUÁRIOS INICIAIS
   Apenas 1 administrador e 1 tutor.
   Novos usuários são adicionados pelo admin.
   ============================================ */
const USUARIOS_INICIAIS = [
  {
    id: 1,
    nome: "Administrador",
    email: "admin@escola.br",
    senha: "admin123",
    tipo: "admin",
    sala: null,
    ativo: true
  },
  {
    id: 2,
    nome: "Direção",
    email: "direcao@escola.br",
    senha: "direcao123",
    tipo: "admin",
    sala: null,
    ativo: true
  },
  {
    id: 3,
    nome: "Bryan Alves",
    email: "bryan@escola.br",
    senha: "tutor123",
    tipo: "tutor",
    sala: "3º Ano de Informática",
    ativo: true
  }
];

/* ============================================
   SALAS INICIAIS
   Apenas 1 sala cadastrada. O admin adiciona mais.
   ============================================ */
const SALAS_INICIAIS = [
  { id: 1, nome: "3º Ano de Informática", turno: "Manhã", totalAlunos: 30 }
];

/* ============================================
   CARDÁPIO DA SEMANA
   ============================================ */
const CARDAPIO_INICIAL = {
  "segunda": {
    titulo: "Segunda-feira",
    prato_principal: "Frango grelhado com ervas",
    acompanhamento: "Arroz branco",
    guarnicao: "Feijão carioca",
    salada: "Salada de alface e tomate",
    sobremesa: "Laranja",
    suco: "Suco de maracujá"
  },
  "terca": {
    titulo: "Terça-feira",
    prato_principal: "Macarrão com molho de carne",
    acompanhamento: "Arroz integral",
    guarnicao: "Salada de legumes cozidos",
    salada: "Couve refogada",
    sobremesa: "Banana",
    suco: "Suco de laranja"
  },
  "quarta": {
    titulo: "Quarta-feira",
    prato_principal: "Peixe assado ao limão",
    acompanhamento: "Arroz branco",
    guarnicao: "Purê de batatas",
    salada: "Salada de beterraba e cenoura",
    sobremesa: "Gelatina de morango",
    suco: "Suco de acerola"
  },
  "quinta": {
    titulo: "Quinta-feira",
    prato_principal: "Carne assada com temperos",
    acompanhamento: "Arroz com brócolis",
    guarnicao: "Feijão preto",
    salada: "Salada verde mista",
    sobremesa: "Maçã",
    suco: "Limonada"
  },
  "sexta": {
    titulo: "Sexta-feira",
    prato_principal: "Frango ao molho de tomate",
    acompanhamento: "Macarrão parafuso",
    guarnicao: "Grão de bico refogado",
    salada: "Salada de repolho e cenoura",
    sobremesa: "Mamão",
    suco: "Suco de uva"
  }
};

/* ============================================
   AVISOS DE EXEMPLO
   ============================================ */
const AVISOS_INICIAIS = [
  {
    id: 1,
    titulo: "Bem-vindo ao Sistema de Gestão Escolar!",
    corpo: "O sistema de gestão da Escola Estadual Professor Antonio Dantas está pronto para uso. O administrador pode cadastrar salas, tutores, publicar avisos e gerenciar o cardápio.",
    tipo: "normal",
    autor: "Administrador",
    data: hoje(),
    ativo: true
  }
];

/* ============================================
   RELATÓRIOS DE ALMOÇO
   Registros de envio de tutores.
   ============================================ */
const RELATORIOS_INICIAIS = [];

/* ============================================
   CRONOGRAMA ESCOLAR
   ============================================ */
const CRONOGRAMA_INICIAL = {
  horarios: [
    { id: 1, hora: "07:00 - 07:30", descricao: "Entrada e Acolhida", tipo: "normal" },
    { id: 2, hora: "07:30 - 08:20", descricao: "1ª Aula", tipo: "normal" },
    { id: 3, hora: "08:20 - 09:10", descricao: "2ª Aula", tipo: "normal" },
    { id: 4, hora: "09:10 - 09:30", descricao: "Intervalo / Recreio", tipo: "intervalo" },
    { id: 5, hora: "09:30 - 10:20", descricao: "3ª Aula", tipo: "normal" },
    { id: 6, hora: "10:20 - 11:10", descricao: "4ª Aula", tipo: "normal" },
    { id: 7, hora: "11:10 - 11:30", descricao: "Intervalo para Almoço", tipo: "intervalo" },
    { id: 8, hora: "11:30 - 12:30", descricao: "Almoço (Refeitório)", tipo: "almoco" },
    { id: 9, hora: "12:30 - 13:20", descricao: "5ª Aula (Tarde)", tipo: "normal" },
    { id: 10, hora: "13:20 - 14:10", descricao: "6ª Aula (Tarde)", tipo: "normal" },
    { id: 11, hora: "14:10 - 14:30", descricao: "Intervalo", tipo: "intervalo" },
    { id: 12, hora: "14:30 - 15:20", descricao: "7ª Aula (Tarde)", tipo: "normal" },
    { id: 13, hora: "15:20 - 16:00", descricao: "Atividades Complementares / Saída", tipo: "normal" }
  ],
  eventos: [
    { id: 1, titulo: "Início das Aulas", descricao: "Primeiro dia letivo do ano", dia: "01", mes: "FEV", tipo: "evento" }
  ]
};

/* ============================================
   INFORMAÇÕES DA ESCOLA
   ============================================ */
const INFORMACOES_INICIAIS = {
  regras: [
    "Chegar pontualmente ao início das aulas",
    "Usar uniforme completo em todos os dias letivos",
    "Tratar professores, funcionários e colegas com respeito",
    "Não utilizar celular dentro da sala de aula sem autorização",
    "Trazer o material escolar completo todos os dias",
    "Zelar pela conservação das instalações e equipamentos",
    "Comunicar ausências previamente à secretaria",
    "Proibido trazer alimentos não autorizados para o refeitório",
    "Lixo deve ser depositado nas lixeiras corretas"
  ],
  contatos: [
    { setor: "Secretaria", telefone: "(00) 0000-0000", horario: "7h às 17h" },
    { setor: "Coordenação Pedagógica", telefone: "(00) 0000-0001", horario: "7h às 16h" },
    { setor: "Direção", telefone: "(00) 0000-0002", horario: "8h às 16h" }
  ]
};

/* ============================================
   FUNÇÕES DE UTILIDADE
   ============================================ */

/** Retorna a data de hoje no formato DD/MM/AAAA */
function hoje() {
  return new Date().toLocaleDateString('pt-BR');
}

/**
 * Inicializa todos os dados no localStorage.
 * Se a versão dos dados for diferente da atual, reseta tudo.
 * Chamado automaticamente ao carregar este script.
 */
const VERSAO_DADOS = 'v2.1';

function inicializarDados() {
  // Detecta se os dados precisam ser resetados (nova versão)
  const versaoSalva = localStorage.getItem('escola_versao');
  if (versaoSalva !== VERSAO_DADOS) {
    // Limpa todos os dados da versão anterior
    ['escola_usuarios','escola_salas','escola_cardapio','escola_avisos',
     'escola_relatorios','escola_cronograma','escola_informacoes'].forEach(k => localStorage.removeItem(k));
    localStorage.setItem('escola_versao', VERSAO_DADOS);
  }

  if (!localStorage.getItem('escola_usuarios')) {
    localStorage.setItem('escola_usuarios', JSON.stringify(USUARIOS_INICIAIS));
  }
  if (!localStorage.getItem('escola_salas')) {
    localStorage.setItem('escola_salas', JSON.stringify(SALAS_INICIAIS));
  }
  if (!localStorage.getItem('escola_cardapio')) {
    localStorage.setItem('escola_cardapio', JSON.stringify(CARDAPIO_INICIAL));
  }
  if (!localStorage.getItem('escola_avisos')) {
    localStorage.setItem('escola_avisos', JSON.stringify(AVISOS_INICIAIS));
  }
  if (!localStorage.getItem('escola_relatorios')) {
    localStorage.setItem('escola_relatorios', JSON.stringify(RELATORIOS_INICIAIS));
  }
  if (!localStorage.getItem('escola_cronograma')) {
    localStorage.setItem('escola_cronograma', JSON.stringify(CRONOGRAMA_INICIAL));
  }
  if (!localStorage.getItem('escola_informacoes')) {
    localStorage.setItem('escola_informacoes', JSON.stringify(INFORMACOES_INICIAIS));
  }
}

inicializarDados();
