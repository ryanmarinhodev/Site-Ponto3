const menuIcon = document.getElementById("menuIcon");
const mobileNav = document.getElementById("mobileNav");
const closeIcon = document.getElementById("closeIcon");
const socialMedia = document.querySelector(".social-media");
const logoLink = document.querySelector(".logo");

let isMobileNavActive = false; // Variável de controle para verificar se a tela de navegação está ativa

// Função para mostrar ou ocultar a tela de navegação e os ícones de redes sociais
function toggleMobileNav() {
  isMobileNavActive = !isMobileNavActive;
  mobileNav.classList.toggle("active", isMobileNavActive);

  // Ajuste para exibir os ícones de redes sociais somente quando a tela de navegação estiver ativa
  if (window.innerWidth >= 768) {
    socialMedia.classList.toggle("hide-social-icons", !isMobileNavActive);
  } else {
    socialMedia.classList.add("hide-social-icons");
  }
}

// Adicionando o evento de clique ao ícone do menu
menuIcon.addEventListener("click", toggleMobileNav);

// Adicionando o evento de clique ao ícone "X" para fechar a tela de navegação
closeIcon.addEventListener("click", toggleMobileNav);

// Função para ajustar a exibição dos ícones de redes sociais ao carregar a página
function adjustSocialMediaIcons() {
  if (window.innerWidth >= 768) {
    socialMedia.classList.remove("hide-social-icons");
  } else {
    socialMedia.classList.add("hide-social-icons");
  }
}

// Adicionando um listener para verificar o redimensionamento da tela
window.addEventListener("resize", function () {
  adjustSocialMediaIcons();
});

// Adicionando um listener para ajustar os ícones de redes sociais ao carregar a página
window.addEventListener("load", function () {
  adjustSocialMediaIcons();
});

// Função para voltar à página inicial ao clicar na logo
function goToHomePage() {
  window.location.href = "index.html"; // Substitua "index.html" pelo caminho da sua página inicial
}

// Adicionando o evento de clique à logo
logoLink.addEventListener("click", goToHomePage);