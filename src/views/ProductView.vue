<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import ProductDetail from '../components/ProductDetail.vue'

import HeaderBase from './base/HeaderBase.vue'
import FooterBase from './base/FooterBase.vue';

</script>
<template>
  <HeaderBase></HeaderBase>
  <main>
    <ProductDetail />
  </main>
 <!-- <RouterLink :to="{ name: 'productosview' }">atras</RouterLink>-->
  <FooterBase></FooterBase>
</template>
<style scoped lang="scss"></style>
