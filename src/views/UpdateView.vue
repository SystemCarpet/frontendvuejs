<script>
import ProductUpdate from '../components/ProductUpdate.vue'

export default {
  name: 'ProductDetail',
  components: { ProductUpdate }
}
</script>
<template>
  <div>
    <ProductUpdate></ProductUpdate>
    <main>
      <RouterLink :to="{ name: 'productoview' }">atras</RouterLink>
    </main>
  </div>
</template>
<style scoped lang="scss"></style>
