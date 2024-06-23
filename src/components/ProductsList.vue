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
    <main class="m-10">
      <section>
        <div class="w-10/12 mx-auto">
          <div class="grid grid-cols-3">
            <!-- COMPONENT-->
            <div class="flex " v-for="product in products" :key="product.idProducto">

              <div class=" flex flex-col w-3/4 rounded-lg bg-white shadow-lg hover:bg-slate-100 col-span-1">

                <RouterLink :to="{ name: 'productoview', params: { id: product.idProducto } }">
                  <img class="rounded-t-lg w-100" :src="product.imagenProducto"
                    :alt="product.articulo.nombreArticulo" />
                </RouterLink>
                <div class="flex flex-col m-4 h-24 justify-evenly">
                  <RouterLink :to="{ name: 'productoview', params: { id: product.idProducto } }">
                    <p class=" font-semibold text-gray-900">
                      {{ product.articulo.nombreArticulo }}
                    </p>
                  </RouterLink>

                  <p>{{ product.articulo.descripcion }}</p>

                  <div>
                    <div class="flex items-center justify-between">
                      <span class=" font-bold">${{ product.precio }}</span>
                      <span class="text-green-400 font-bold">{{ product.categoria.descuentoCategoria }}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<style scoped lang="scss"></style>
