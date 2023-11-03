<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import ProductDetail from '@/components/ProductDetail.vue'
</script>
<template>
  <main>
    <ProductDetail />
  </main>
  <RouterLink :to="{ name: 'productosview' }">atras</RouterLink>
</template>
<style scoped lang="scss"></style>
