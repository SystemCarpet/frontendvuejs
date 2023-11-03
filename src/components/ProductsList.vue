<script>
export default {
  name: 'ProductsList',
  data() {
    return {
      products: []
    }
  },
  methods: {
    async getProducts() {
      const response = await fetch('http://localhost:8090/api/productos')
      const json = await response.json()
      this.products = json
    },
    async deleteProduct(id) {
      const response = await fetch(`http://localhost:8090/api/productos/${id}/delete`, {
        method: 'DELETE'
      })
      if (response.ok) {
        this.getProducts()
      }
    }
  },
  beforeMount() {
    this.getProducts()
  }
}
</script>
<template>
  <div>
    <ul v-for="product in products" :key="product.idProducto">
      <li>
        {{ product }}
        <RouterLink :to="{ name: 'productoview', params: { id: product.idProducto } }">ver</RouterLink>
        <button @click="deleteProduct(product.idProducto)">eliminar</button>
      </li>
    </ul>
    <RouterLink :to="{ name: 'addproductoview' }">añadir</RouterLink>
  </div>
</template>
<style scoped lang="scss"></style>
