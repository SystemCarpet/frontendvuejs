<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'homeview' }">Inicio</RouterLink>
      <RouterLink :to="{ name: 'productosview' }">Productos</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
