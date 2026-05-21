<template>
  <div class="error-container">
    <h1>Error 404</h1>
    <p>Parece que esta ruta no existe.</p>
    <button @click="handleError" class="nav-btn">VOLVER A CASA</button>
  </div>
</template>

<script setup>
const props = defineProps(['error']);
const handleError = () => clearError({ redirect: '/' });
</script>

<style scoped>
.error-page {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  gap: 20px;
}

.error-content h1 {
  font-size: 4rem;
  margin-bottom: 0;
}

.error-content p {
  color: var(--text-primary);
  font-size: 1.2rem;
}

.btn-deploy {
  margin-top: 20px;
  cursor: pointer;
  padding: 10px 20px;
}
</style>