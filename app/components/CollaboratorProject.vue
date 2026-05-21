<template>
  <div class="project-card">
    <h3>{{ project.projectName }}</h3>
    <p><strong>Colaborador:</strong> {{ project.collaboratorName }}</p>
    
    <div class="actions">
      <a :href="project.githubUrl" target="_blank" class="btn-deploy">GITHUB</a>
      <a :href="project.deployUrl" target="_blank" class="btn-deploy">VER PROYECTO</a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: Object
});
</script>

<style scoped>
.actions {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}
.btn-deploy {
  flex: 1; /* Para que ocupen el mismo ancho */
  text-align: center;
}
</style>