<template>
  <section class="main-info">
    
    <nav class="terminal-nav">
      <button 
        @click="activeTab = 'perfil'" 
        :class="{ active: activeTab === 'perfil' }"
        class="nav-btn"
      >
        >_ PERFIL_Y_HABILIDADES
      </button>
      
      <button 
        @click="activeTab = 'proyectos'" 
        :class="{ active: activeTab === 'proyectos' }"
        class="nav-btn"
      >
        >_ PROYECTOS_DESTACADOS
      </button>

      <button 
        @click="activeTab = 'colaboraciones'" 
        :class="{ active: activeTab === 'colaboraciones' }"
        class="nav-btn"
      >
        >_ COLABORACIONES
      </button>

      <button 
        @click="activeTab = 'contacto'" 
        :class="{ active: activeTab === 'contacto' }"
        class="nav-btn"
      >
        >_ ESTABLECER_CONEXION
      </button>
    </nav>

    <div class="content-area">

      <div v-if="activeTab === 'perfil'" class="tab-section">
        <h3>| SOBRE MÍ</h3>
        <p>
          Estudiante con sólidos conocimientos en lenguajes de programación, gestión
          de redes bajo normas ISO y procesos de auditoría informática...
        </p>

        <h3>| HABILIDADES</h3>
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
        
        <h3>| INFORMACIÓN ACADÉMICA</h3>
        <p>Universidad: ITGAM</p>
        <p>Bachillerato: CETIS 3</p>

        <h3>| IDIOMAS</h3>
        <p>Inglés: A3 (Pre-Intermedio)</p>

        <h3>| CONTACTO</h3>
        <p>Correo: giovannivert@gmail.com</p>
        <p>Teléfono: 55 2310 1408</p>
        <p>Discord: gio9927</p>
      </div>

      <div v-if="activeTab === 'proyectos'" class="tab-section">
        <h3>| PROYECTOS DESTACADOS</h3>
        <div class="projects-grid">
          <ProjectCard 
            v-for="(project, index) in myProjects" 
            :key="index"
            :title="project.title"
            :synopsis="project.synopsis"
            :link="project.link"
            :platform="project.platform"
          />
        </div>
      </div>

      <div v-if="activeTab === 'colaboraciones'" class="tab-section">
        <h3>| PROYECTOS EN COLABORACIÓN</h3>
        <div class="projects-grid">
          <CollaboratorProject 
            v-for="(collab, index) in collabProjects" 
            :key="'collab-' + index"
            :project="collab"
          />
        </div>
      </div>

      <div v-if="activeTab === 'contacto'" class="tab-section">
        <ContactForm />
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref('perfil')

const myProjects = [
  { title: 'Visor Modelos 3D', synopsis: 'Aplicación web interactiva para la visualización de modelos tridimensionales en el navegador.', link: 'https://visormodelos3d.netlify.app', platform: 'Netlify' },
  { title: 'Proyecto API', synopsis: 'Desarrollo de consumo y gestión de datos a través de interfaces de programación de aplicaciones.', link: 'https://proyectoapi.netlify.app', platform: 'Netlify' },
  { title: 'Tarea 1 T4 (Ajedrez 3D)', synopsis: 'Implementación de un modelo de ajedrez en 3D renderizado directamente en la web.', link: 'https://tarea1t4.vercel.app', platform: 'Vercel' },
  { title: 'Partículas - Modelos 3D', synopsis: 'Experimentación visual y renderizado de sistemas de partículas interactivas en entornos 3D.', link: 'https://particulas-modelos-3d.vercel.app', platform: 'Vercel' }
]

const collabProjects = [
  {
    projectName: "API",
    collaboratorName: "Rangel Neri Juan",
    githubUrl: "https://github.com/JuanRang/dev-herramientas-",
    deployUrl: "https://dev-herramientas-produccion.vercel.app/"
  },
  {
    projectName: "API PIZZERIA",
    collaboratorName: "Sanchez Flores Roweena Isadora",
    githubUrl: "https://github.com/CassandraPresley/mi-proyecto-nuxt-1.0 ",
    deployUrl: "https://pizzeria-elmos.vercel.app/"
  },
  {
    projectName: "MODELO 3D",
    collaboratorName: "Cristian Vazquez",
    githubUrl: "https://github.com/CRISTIAN-VAZQUEZ/Modelo3D",
    deployUrl: "https://modelo3-d-pi.vercel.app"
  },
  {
    projectName: "Particulas",
    collaboratorName: "Dorado Solano Aldo Aragón",
    githubUrl: "https://github.com/AldoArag/particulasdescom",
    deployUrl: "https://particulasdescom.vercel.app/"
  },
  {
    projectName: "Ajedrez",
    collaboratorName: "Rosas Alvarez Rubén Daniel",
    githubUrl: "https://github.com/DanielRosas05/Tablero3D",
    deployUrl: "https://tablero3-d.vercel.app/"
  }
]
</script>