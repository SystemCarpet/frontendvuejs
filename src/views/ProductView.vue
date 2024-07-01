<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import ProductDetail from '../components/ProductDetail.vue'

import HeaderAlternative from './base/HeaderAlternative.vue';
import FooterBase from './base/FooterBase.vue';

</script>
<template>
  <HeaderAlternative></HeaderAlternative>
  <main>
    <ProductDetail />
  </main>
 <!-- <RouterLink :to="{ name: 'productosview' }">atras</RouterLink>-->
  <FooterBase></FooterBase>
</template>
<style scoped lang="scss"></style>
