const menuIcon = document.getElementById("menuIcon");
const mobileNav = document.getElementById("mobileNav");
const closeIcon = document.getElementById("closeIcon");
const socialMedia = document.querySelector(".social-media");
const logoLink = document.querySelector(".logo");
const mobileNavLinks = document.querySelectorAll(".mobile-nav a");

// Função para abrir o menu mobile
function openMobileNav() {
  mobileNav.classList.add("active");
  // Remover a classe "hide-social-icons" para exibir os ícones no menu mobile
  socialMedia.classList.remove("hide-social-icons");
}

// Função para fechar o menu mobile
function closeMobileNav() {
  mobileNav.classList.remove("active");
  // Adicionar a classe "hide-social-icons" para ocultar os ícones novamente no header
  socialMedia.classList.add("hide-social-icons");
}

// Adicionando o evento de clique ao ícone do menu
menuIcon.addEventListener("click", openMobileNav);

// Adicionando o evento de clique ao ícone "X" para fechar a tela de navegação
closeIcon.addEventListener("click", closeMobileNav);

// Adicionando o evento de clique aos links do menu mobile para fechar o menu após o clique
mobileNavLinks.forEach(link => {
  link.addEventListener("click", closeMobileNav);
});

// Função para ajustar a exibição dos ícones de redes sociais ao carregar a página
function adjustSocialMediaIcons() {
  socialMedia.classList.add("hide-social-icons"); // Adicione esta linha
  if (window.innerWidth >= 768) {
    socialMedia.classList.remove("hide-social-icons");
  }
}

// Função para ajustar a exibição dos ícones de redes sociais ao carregar a página
function adjustSocialMediaIcons() {
  socialMedia.classList.add("hide-social-icons"); // Adicione esta linha
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






// Redirecionamento de imagens: 

function redirecionar1() {
  window.location = "../a-casamd/amd.html"
}
function redirecionar2() {
  window.location = "../g-casaeea/eea.html"
}
function redirecionar3() {
  window.location = "../c-casafel/casafel.html"
}
function redirecionar4() {
  window.location = "../d-casaehe/casaehe.html"
}
function redirecionar5() {
  window.location = "../e-casaat/casaat.html"
}
function redirecionar6() {
  window.location = "../b-casalcf/casalcf.html"
}
function redirecionar7() {
  window.location = "../o-edj/edj.html"
}
function redirecionar8() {
  window.location = "../h-casa-aep/casaaep.html"
}
function redirecionar9() {
  window.location = "../i-mostra23/mostra.html"
}
function redirecionar10() {
  window.location = "../j-mostra22/vintedois.html"
}
function redirecionar11() {
  window.location = "../n-casarbc/casarbc.html"
}
function redirecionar12() {
  window.location = "../l-casaieg/casaieg.html"
}
function redirecionar13() {
  window.location = "../f-casatep/casatep.html"
}
function redirecionar14() {
  window.location = "../k-mostra19/mostra19.html"
}
function redirecionar15() {
  window.location = "../m-casafef/casafef.html"
}
function redirecionar16() {
  window.location = "../p-casaglc/casaglc.html"
}
function redirecionar17() {
  window.location = "../q-clinicasa/clinicasa.html"
}
function redirecionar18() {
  window.location = "../r-semog/semog.html"
}




// Função para adicionar a classe 'active' ao link selecionado
function setActiveLink(link) {
  const links = document.querySelectorAll('.names a');
  links.forEach((l) => l.classList.remove('active'));
  link.classList.add('active');
}

// Função para rolar até a seção correspondente ao clicar no link
function scrollToSection(event) {
  event.preventDefault();
  const target = event.target.getAttribute('href');
  
  // Verifica se o link é interno (começa com "#")
  if (target.startsWith('#')) {
    const section = document.querySelector(target);
    if (section) {
      const offsetTop = section.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
      history.pushState(null, null, target); // Atualiza a URL sem recarregar a página
    }
  } else {
    // Link externo, redirecione para a URL externa
    window.location.href = target;
  }
}

// Adicionando o evento de clique aos links dos nomes
const links = document.querySelectorAll('.names a');
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    setActiveLink(link);
    scrollToSection(event);
  });
});

// Verifica o hash da URL e rola até a seção correspondente na inicialização da página
window.addEventListener('load', () => {
  const hash = window.location.hash;
  if (hash) {
    const section = document.querySelector(hash);
    if (section) {
      const offsetTop = section.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  }
});




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

window.addEventListener("load", function() {
  // Definir a posição de rolagem para o topo ao carregar a página
  window.scrollTo(0, 0);
});