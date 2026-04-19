<template>
  <section class="main-info">
    <h3>Sobre mí</h3>
    <p>
      Estudiante con sólidos conocimientos en lenguajes de programación, gestión
      de redes bajo normas ISO y procesos de auditoría informática...
    </p>

    <h3>Habilidades</h3>
    <div class="skills-grid">
      <div class="skill-item">
        <p class="titulo">Lenguajes de Programación</p>
        <p class="texto-contenido">JavaScript, Python, PHP</p>
      </div>
      <div class="skill-item">
        <p class="titulo">Bases de Datos</p>
        <p class="texto-contenido">MySQL, SQL</p>
      </div>
    </div>

    <ContactForm />
  </section>
</template>

<style scoped>
.main-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 20px;
  color: #00ff41;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.skill-item {
  border: 1px solid #003300;
  padding: 15px;
  background: rgba(0, 20, 0, 0.5);
}
</style>