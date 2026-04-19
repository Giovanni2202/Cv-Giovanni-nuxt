<template>
  <div class="layout-wrapper">
    <Background />
    <div class="app-container">
      <main class="main-content">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  justify-content: center; /* Centra el contenido horizontalmente */
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  z-index: 10;
}

.main-content {
  width: 100%;
  min-width: 0;
}
</style>