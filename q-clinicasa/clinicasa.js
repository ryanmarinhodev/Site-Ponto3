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


// Botões de fechar, passar

const images = document.querySelectorAll(".image-gallery img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-content");
const closeBtn = document.querySelector(".close-btn");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let currentIndex = 0;

function openModal(index) {
  modal.style.display = "flex";
  showImage(index);
  closeBtn.classList.remove("hidden");
  prevBtn.classList.remove("hidden");
  nextBtn.classList.remove("hidden");
}

function closeModal() {
  modal.style.display = "none";
  closeBtn.classList.add("hidden");
  prevBtn.classList.add("hidden");
  nextBtn.classList.add("hidden");
}

function showImage(index) {
  currentIndex = index;
  modalImg.src = images[currentIndex].src;
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

images.forEach((img, index) => {
  img.addEventListener("click", () => openModal(index));
});

closeBtn.addEventListener("click", closeModal);
nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);

document.addEventListener("keydown", function (event) {
  if (modal.style.display === "flex") {
    if (event.key === "Escape") {
      closeModal();
    } else if (event.key === "ArrowRight") {
      nextImage();
    } else if (event.key === "ArrowLeft") {
      prevImage();
    }
  }
});

// Adicione esta parte para mostrar a primeira imagem ao abrir o modal


// Botão de subir ao topo
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Mostrar o botão quando a página é rolada para baixo
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Rolar para o topo quando o botão é clicado
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});