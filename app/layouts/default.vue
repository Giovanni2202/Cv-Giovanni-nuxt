<template>
  <div class="app-layout">
    <AppSidebar />
    <main class="main-content">
      <slot />
    </main>
  </div>
</template>

<style>
.app-layout {
  display: flex;
}
.main-content {
  margin-left: 260px;
  width: 100%;
  min-height: 100vh;
}
</style>