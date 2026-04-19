<template>
  <NuxtLayout>
    <div class="terminal-window">
      <div class="terminal-header-wrapper">
        <Appheader />
        <ButtonGithub /> </div>
      
      <div class="inner-content">
        <AppMain />
        <AppFooter />
      </div>
    </div>
  </NuxtLayout>
</template>

<style>
.terminal-header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #00ff41;
  background: rgba(0, 20, 0, 0.5);
}
/* Estilos para el contenedor tipo terminal */
.terminal-window {
  background: rgba(0, 12, 0, 0.9);
  border: 1px solid #00ff41;
  border-radius: 12px;
  box-shadow: 0 0 30px rgba(0, 255, 65, 0.15);
  overflow: hidden;
  backdrop-filter: blur(8px);
  width: 100%;
}

.inner-content {
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Soporte para modo claro */
.light-mode .terminal-window {
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid #007a1f;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}
.terminal-window {
  /* Forzamos que el color base sea un blanco suave o verde */
  color: #e0e0e0; 
}

/* Ajuste específico para los títulos (H1, H2, H3) */
.terminal-window h1, 
.terminal-window h2, 
.terminal-window h3 {
  color: #00ff41 !important; /* Verde neón para resaltar */
  text-shadow: 0 0 5px rgba(0, 255, 65, 0.5);
}

/* Ajuste para párrafos y etiquetas de texto */
.terminal-window p, 
.terminal-window span,
.terminal-window label {
  color: #d1ffd6; /* Un verde muy pálido, casi blanco */
}

/* Enlaces (como tu correo en la sección de contacto) */
.terminal-window a {
  color: #00ff41;
  text-decoration: none;
  border-bottom: 1px dashed #00ff41;
}

.terminal-window a:hover {
  background: #00ff41;
  color: #000;
}

</style>