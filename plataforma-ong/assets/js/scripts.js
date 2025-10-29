// 🌿 scripts.js - Interatividade básica da Plataforma ONG Esperança

// Mostra uma mensagem de boas-vindas
window.addEventListener('DOMContentLoaded', () => {
  console.log('🌸 Bem-vindo(a) à Plataforma ONG Esperança!');
});

// Validação simples do formulário de cadastro
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', (event) => {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!nome || !email) {
      alert('Por favor, preencha seu nome e email antes de enviar 💌');
      event.preventDefault(); // impede o envio se estiver incompleto
    } else {
      alert('Obrigada por se cadastrar, ' + nome + '! 🌸');
    }
  });
}
