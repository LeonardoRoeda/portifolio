# Portifólio Pessoal - Leonardo Antonio Roeda

<img width="1913" height="1075" alt="Image" src="https://github.com/user-attachments/assets/b1f3ec08-467c-45e2-8f5f-b9b7da54e2cf" />

Este é um website do meu portfólio pessoal desenvolvido como parte da avaliação da disciplina de Programação Front-End. O projeto consiste em um site responsivo e interativo de 4 páginas, construído com HTML5, CSS3 e JavaScript puro, demonstrando a aplicação prática dos conceitos fundamentais do desenvolvimento web aprendidos na materia de Front-End.

**Site do portfólio:** [[https://github.com/LeonardoRoeda/portifolio]](https://leonardoroeda.github.io/portifolio/index.html)

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [🚀 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [✨ Recursos Implementados](#-recursos-implementados)
- [📸 Capturas de Tela](#-capturas-de-tela)
- [🏁 Como Executar](#-como-executar)
- [🧠 Desafios e Aprendizados](#-desafios-e-aprendizados)
- [📧 Contato](#-contato)

---

## 📖 Sobre o Projeto

O objetivo foi criar um portfólio digital pessoal para apresentar minhas habilidades, formação e projetos como desenvolvedor. O design e a arquitetura foram pensados para serem modernos, simples e de fácil manutenção futuramente.

### Design (UI/UX)

- **Tema:** Foi escolhido um tema escuro (_dark mode_purple) para um visual moderno e confortável para o usuario.
- **Paleta de Cores:**
  - Fundo Principal: `#080808`
  - Fundo Secundário: `#131313`
  - Texto: `white`
  - Destaque: `#9400d3` (Purple)
- **Fonte utilizada:** **Poppins**.
- **Layout:** Estruturado com **CSS Flexbox** e **Grid**, seguindo a abordagem _mobile-first_ para garantir total responsividade.

### Arquitetura

O site é uma **Multi-Page Application (MPA)** com uma estrutura de arquivos centralizada:

- `home.html`: Página Inicialmente.
- `education.html`: Linha do tempo da formação profissional e acadêmica.
- `services.html`: Descrição dos serviços prestados.
- `contact.html`: Formulário de contato.
- `style.css`: Folha de estilo única para todas as páginas do site.
- `script.js`: Arquivo único com toda a lógica de interatividade.

---

## 🚀 Tecnologias Utilizadas

- **HTML5:** Estruturação semântica com tags como `<header>`, `<footer>`, `<section>` e `<nav>`.
- **CSS3:** Estilização completa, utilizando recursos como:
  - Variáveis CSS (`:root`)
  - Flexbox e Grid Layout
  - Media Queries para responsividade
  - Animações (`@keyframes`) e Transições (`transition`)
- **JavaScript (ES6+):** Interatividade e funcionalidades dinâmicas, incluindo:
  - Manipulação do DOM
  - Event Listeners (`click`, `submit`)
  - Validação de formulário no lado do cliente

---

## ✨ Recursos Implementados

✔️ **Layout Responsivo:** O site se adapta perfeitamente a telas de desktop, tablets e celulares.

✔️ **Menu de Navegação Funcional:** Menu fixo no topo com destaque para a página ativa. Em telas menores, transforma-se em um menu "hambúrguer" funcional.

✔️ **Formulário de Contato com Validação:** O formulário na página de contato valida os campos (nome, e-mail, assunto e mensagem) com JavaScript antes de simular o envio.

✔️ **Efeitos Interativos:**

1.  **Animação de "Máquina de Escrever":** Na página inicial, um texto é animado para simular digitação.
2.  **Transição Suave entre Páginas:** Ao navegar entre as páginas, uma animação de _fade-out_ é acionada, criando uma experiência de usuário mais fluida.

✔️ **SEO Básico:**

- Uso de meta tags `description` e `<title>` únicos por página.
- Estrutura HTML semântica para melhor indexação.
- Atributos `alt` em imagens importantes.

---

## 📸 Capturas de Tela

| Página Inicial (Desktop) | Visualização (Mobile) |
| :----------------------: | :-------------------: |
| <img width="800" alt="Visualização do site em um desktop" src="https://github.com/user-attachments/assets/b1f3ec08-467c-45e2-8f5f-b9b7da54e2cf" /> | <img width="250" alt="Visualização do site em um celular" src="https://github.com/user-attachments/assets/1425c9b9-74ec-450c-91dc-093cd16a5039" /> |

## 🏁 Como Executar

Para executar o projeto localmente, siga os passos abaixo:

1.  Clone o repositório:
    ```sh
    git clone https://github.com/LeonardoRoeda/portifolio.git
    ```
2.  Navegue até o diretório do projeto:
    ```sh
    cd portifolio
    ```
3.  Abra o arquivo `home.html` no seu navegador de preferência.

---

## 🧠 Desafios e Aprendizados

O maior desafio foi implementar a transição suave entre as páginas sem quebrar a navegação. A solução envolveu o uso de `event.preventDefault()` para capturar o clique, acionar uma animação CSS e, em seguida, usar `setTimeout` para redirecionar o usuário até a page. Isso reforçou a importância de gerenciar eventos e o fluxo de execução assíncrono em JavaScript deixando mais fluido e profissional.

Outro aprendizado foi a modularização do código JavaScript, garantindo que scripts específicos (como a validação do formulário) só fossem executados nas páginas relevantes, evitando erros no console.

---

## 📧 Contato

Leonardo Roeda
- **Email:** leonardo99.roeda@gmail.com
- **LinkedIn:** linkedin.com/in/leonardo-roeda
- **GitHub:** github.com/LeonardoRoeda
