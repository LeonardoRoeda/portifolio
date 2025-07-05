document.addEventListener("DOMContentLoaded", function () {
  // --- Ativar link de navegação ---
  const navLinks = document.querySelectorAll(".header nav a");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // --- Menu Hambúrguer ---
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");

  if (menuIcon && navbar) {
    menuIcon.onclick = () => {
      menuIcon.classList.toggle("bx-x");
      navbar.classList.toggle("active");
    };
  }

  // --- Validação do Formulário de Contato ---
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const fullName = document.getElementById("fullName").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();
      const errorDiv = document.getElementById("form-error");

      // Validação mais detalhada
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let errors = [];

      if (!fullName) {
        errors.push("O campo 'Nome completo' é obrigatório.");
      }
      if (!email) {
        errors.push("O campo 'Email' é obrigatório.");
      } else if (!emailPattern.test(email)) {
        errors.push("Por favor, insira um endereço de email válido.");
      }
      if (!subject) {
        errors.push("O campo 'Assunto' é obrigatório.");
      }
      if (!message) {
        errors.push("O campo 'Sua Mensagem' é obrigatório.");
      }

      if (errors.length > 0) {
        errorDiv.textContent = errors.join(" ");
      } else {
        errorDiv.textContent = "";
        alert("Mensagem enviada com sucesso!");
        contactForm.reset();
      }
    });
  }

  // --- Lógica para transição de página ---
  const body = document.body;
  const pageLinks = document.querySelectorAll(
    'a:not([target="_blank"]):not([href^="#"])'
  );

  pageLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const destination = this.href;

      // Não animar se o link for para a página atual
      if (destination === window.location.href) {
        e.preventDefault();
        return;
      }

      e.preventDefault(); // Previne a navegação imediata
      body.classList.add("page-exit"); // Adiciona a classe para a animação de saída

      // Espera a animação terminar e então navega para o destino
      setTimeout(() => {
        window.location.href = destination;
      }, 500); // Duração deve ser a mesma da transição no CSS
    });
  });
});
