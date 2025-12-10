import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <!-- Header/Hero Section -->
    <header class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Olá, eu sou <span class="highlight">Eduardo</span></h1>
        <p class="hero-subtitle">Desenvolvedor & Criador Digital</p>
        <p class="hero-description">
          Apaixonado por tecnologia, desenvolvimento web e criação de soluções inovadoras.
        </p>
        <div class="hero-buttons">
          <a href="#sobre" class="btn btn-primary">Conhecer Mais</a>
          <a href="#contato" class="btn btn-secondary">Entrar em Contato</a>
        </div>
      </div>
    </header>

    <!-- Sobre Section -->
    <section id="sobre" class="section">
      <div class="section-content">
        <h2 class="section-title">Sobre Mim</h2>
        <p class="section-text">
          Sou um desenvolvedor apaixonado por criar experiências digitais incríveis. 
          Trabalho com tecnologias modernas como JavaScript, React, Node.js e muito mais.
        </p>
        <div class="skills">
          <span class="skill-tag">JavaScript</span>
          <span class="skill-tag">React</span>
          <span class="skill-tag">Node.js</span>
          <span class="skill-tag">CSS</span>
          <span class="skill-tag">HTML</span>
        </div>
      </div>
    </section>

    <!-- Projetos Section -->
    <section id="projetos" class="section">
      <div class="section-content">
        <h2 class="section-title">Projetos</h2>
        <div class="projects-grid">
          <div class="project-card">
            <h3>Projeto 1</h3>
            <p>Descrição do seu primeiro projeto incrível.</p>
            <a href="#" class="project-link">Ver Projeto</a>
          </div>
          <div class="project-card">
            <h3>Projeto 2</h3>
            <p>Descrição do seu segundo projeto incrível.</p>
            <a href="#" class="project-link">Ver Projeto</a>
          </div>
          <div class="project-card">
            <h3>Projeto 3</h3>
            <p>Descrição do seu terceiro projeto incrível.</p>
            <a href="#" class="project-link">Ver Projeto</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contato Section -->
    <section id="contato" class="section">
      <div class="section-content">
        <h2 class="section-title">Vamos Conversar?</h2>
        <p class="section-text">
          Estou sempre aberto a novas oportunidades e projetos interessantes.
        </p>
        <div class="contact-links">
          <a href="mailto:seu-email@exemplo.com" class="contact-link">📧 Email</a>
          <a href="https://linkedin.com/in/seu-perfil" class="contact-link">💼 LinkedIn</a>
          <a href="https://github.com/seu-usuario" class="contact-link">👨‍💻 GitHub</a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p>&copy; 2025 Eduardo. Feito com ❤️ e Vite.</p>
    </footer>
  </div>
`
