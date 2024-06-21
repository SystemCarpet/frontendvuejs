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
      const response = await fetch('http://localhost:8090/api/v1/productos')
      const json = await response.json()
      this.products = json
    },
    async deleteProduct(id) {
      const response = await fetch(`http://localhost:8090/api/v1/productos/${id}/delete`, {
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
    <!-- Este es un comentario en un template de Vue.js
    <ul v-for="product in products" :key="product.idProducto">
      <li>
        {{ product }}
        <RouterLink :to="{ name: 'productoview', params: { id: product.idProducto } }">ver</RouterLink>
        <button @click="deleteProduct(product.idProducto)">Eliminar</button>
      </li>
    </ul>
    <RouterLink :to="{ name: 'addproductoview' }">añadir</RouterLink>
  -->
    <section>
      <div class="w-10/12 mx-auto">
        <div class="grid grid-cols-4">
          <div class="flex justify-center col-start-1 col-end-4 md:justify-end md:col-start-1 md:col-end-2">
            <div class="flex flex-col w-3/4 h-min rounded-lg bg-white shadow-lg hover:bg-slate-100 col-span-1 my-4" v-for="product in products" :key="product.idProducto">
              {{ product }}
              <RouterLink :to="{ name: 'productoview', params: { id: product.idProducto } }">ver</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped lang="scss"></style>
