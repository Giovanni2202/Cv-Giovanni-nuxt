<template>
  <aside class="sidebar">
    <div class="logo">
      <h2>Portfolio</h2>
    </div>

    <nav class="nav-links">
      <NuxtLink to="/">Inicio</NuxtLink>
      <NuxtLink to="/proyectos">Proyectos</NuxtLink>
      <NuxtLink to="/auditoria">Auditoría</NuxtLink>
    </nav>

    <div class="sidebar-footer">
      <ColorModeButton />
      <ButtonGithub />
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 260px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  background-color: var(--bg-secondary); /* Usa variables para el modo oscuro */
  border-right: 1px solid var(--border-color);
  z-index: 100;
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-color);
  padding: 0.8rem;
  border-radius: 8px;
  transition: background 0.2s;
}

.nav-links a:hover {
  background: rgba(120, 120, 120, 0.1);
}

.sidebar-footer {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding-bottom: 1rem;
}
</style>