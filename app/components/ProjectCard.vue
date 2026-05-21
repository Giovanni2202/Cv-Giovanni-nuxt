<template>
  <div class="project-card">
    <h4 class="project-title">{{ title }}</h4>
    <p class="project-synopsis">{{ synopsis }}</p>
    <a :href="link" target="_blank" rel="noopener noreferrer" class="btn-deploy">
      Ver en {{ platform }}
    </a>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  synopsis: String,
  link: String,
  platform: String
})
</script>

<style scoped>
.project-card {
  border: 1px solid #003300;
  padding: 15px;
  background: rgba(0, 20, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: border-color 0.3s ease;
}

.project-card:hover {
  border-color: #00ff41;
}

.project-title {
  color: #00ff41;
  margin: 0;
  font-size: 1.2rem;
}

.project-synopsis {
  color: #cccccc;
  font-size: 0.9rem;
  flex-grow: 1;
}

.btn-deploy {
  background-color: transparent;
  color: #00ff41;
  border: 1px solid #00ff41;
  text-align: center;
  padding: 8px;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.btn-deploy:hover {
  background-color: #00ff41;
  color: #000;
}
</style>