
// --- SIMULAÇÃO DE SPA ---
const links = document.querySelectorAll(".nav-links a");
const pages = document.querySelectorAll("section");

links.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const target = link.getAttribute("href").replace(".html", "");

    pages.forEach(page => page.style.display = "none");
    document.getElementById(target)?.style.display = "block";

    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// --- VALIDAÇÃO DO FORMULÁRIO ---
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();

    const nome = form.querySelector("#nome");
    const email = form.querySelector("#email");
    const projeto = form.querySelector("#projeto");
    let valid = true;

    if (!nome.value.trim()) {
      alert("Por favor, preencha o campo Nome.");
      nome.focus();
      valid = false;
    } else if (!email.value.includes("@")) {
      alert("Por favor, insira um e-mail válido.");
      email.focus();
      valid = false;
    } else if (!projeto.value) {
      alert("Selecione um projeto para participar.");
      projeto.focus();
      valid = false;
    }

    if (valid) {
      alert("Cadastro enviado com sucesso! 🌿");
      form.reset();
      localStorage.setItem("cadastroFeito", "true");
    }
  });
}

// --- MENSAGEM DE BOAS-VINDAS DINÂMICA ---
document.addEventListener("DOMContentLoaded", () => {
  const nome = localStorage.getItem("usuario");
  if (nome) {
    const mensagem = document.createElement("p");
    mensagem.textContent = `Bem-vinda de volta, ${nome}! 💚`;
    document.body.prepend(mensagem);
  }
});
