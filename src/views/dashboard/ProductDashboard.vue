<script lang="ts" >
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
  <div class="min-h-screen">
    <header class="sticky top-0 flex items-center justify-center bg-gray-100">
      <nav class="w-full">
        <div class=" flex lg:items-center justify-between m-4">

          <RouterLink :to="{ name: 'homeview' }">
            <p class="text-sm font-light uppercase mx-4">
              Autocarpet S.A.S
              <span class="block text-base font-bold tracking-widest">
                System
              </span>
            </p>

          </RouterLink>
          <ul class="flex items-center">
            <li>
              <a href="#" class="font-sans text-sm font-semibold tracking-wider text-gray-800">
                Javier Andres villabon Morales
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <main>
      <div class="grid grid-cols-4 h-screen">
        <div class="flex  col-span-1 row-span-4 rounded-md">
          <ul class="flex w-full flex-col">
            <li class=" p-4">
              <a href="#" class="">
                <div class=" hidden md:block">
                  <img class="" src="assets/imgs/autocarpet_logo.png" alt="">
                </div>
              </a>

            </li>
            <li class="px-4 my-2">
              <span class=" font-medium uppercase  text-gray-400">Productos</span>
            </li>
            <li class="px-4 my-2">
              <a href="#" class="flex  rounded-lg  text-gray-600 hover:bg-gray-100">
                <span class="text-blue-500">
                  <i class="fa-solid fa-magnifying-glass text-2xl"></i>
                </span>
                <span class="ml-3">Buscar</span>
              </a>
            </li>
            <li class="px-4 my-2">
              <a href="#" class="flex  rounded-lg  text-gray-600 hover:bg-gray-100">
                <span class="text-blue-500">
                  <i class="fa-solid fa-boxes-packing text-2xl"></i>
                </span>
                <span class="ml-3">Productos</span>
              </a>
            </li>
            <li class="px-4 my-2">
              <a href="#" class="flex  rounded-lg  text-gray-600 hover:bg-gray-100">
                <span class=" text-blue-500">
                  <i class="fa-solid fa-list text-2xl"></i>
                </span>
                <span class="ml-3">Categorias</span>
              </a>
            </li>
            <li class="px-4 my-2">
              <a href="#" class="flex  rounded-lg  text-gray-600 hover:bg-gray-100">
                <span class=" text-yellow-500">
                  <i class="fa-solid fa-percent text-2xl"></i>
                </span>
                <span class="ml-3">Descuentos</span>
              </a>
            </li>
            <li class="px-4 my-2">
              <RouterLink :to="{ name: 'addproductoview' }" >
                <span class=" text-green-400">
                  <i class="fa-solid fa-plus text-2xl"></i>
                </span>
                <span class="ml-3">Add new</span>
              </RouterLink>
            </li>
            <li class="px-4 my-2 ">
              <span class="my-4 flex text-sm font-medium uppercase text-gray-400">Cuenta</span>
            </li>

            <li class="px-4 my-2">
              <a href="#" class="flex  rounded-lg  text-gray-600 hover:bg-gray-100">
                <span class=" text-red-500">
                  <i class="fa-solid fa-lock-open text-2xl"></i>
                </span>
                <span class="ml-3">Logout</span>
              </a>

            </li>
          </ul>
        </div>

        <div class="col-span-3 row-span-3 shadow overflow-hidden rounded border-b border-gray-200  bg-white">
          <table class="">
            <thead class="">
              <tr>
                <th class="text-gray-500 uppercase bg-gray-50 text-center align-middle">
                  id_producto</th>
                <th class="text-gray-500 uppercase bg-gray-50 text-center align-middle">
                  imagen</th>
                <th class="text-gray-500 uppercase bg-gray-50 text-center align-middle">
                  nombre_procto</th>
                <th class="text-gray-500 uppercase bg-gray-50 text-center align-middle">
                  estado</th>
                <th class="text-gray-500 uppercase bg-gray-50 text-center align-middle">
                  categoria</th>
                <th class="text-gray-500 uppercase bg-gray-50 text-center align-middle">
                  descuento</th>
                <th class="text-gray-500 uppercase bg-gray-50 text-center align-middle">
                  tipo</th>
                <th class="text-gray-500 uppercase bg-gray-50 text-center align-middle">
                  stock_inventario</th>
                <th class="text-gray-500 uppercase bg-gray-50 text-center align-middle">
                  precio</th>
                <th class="text-gray-500 uppercase bg-gray-50 text-center align-middle"></th>
                <th class="text-gray-500 uppercase bg-gray-50 text-center align-middle"></th>
              </tr>
            </thead>

            <tbody class="bg-gray-50">
              <tr class="">
                <td class="align-middle">
                  <div class="">
                    <p>01</p>
                  </div>
                </td>
                <td class="align-middle flex justify-center">
                  <img class="" src="assets/imgs/deluxe.png" alt="">

                </td>
                <td class="align-middle">tapete pvc</td>
                <td class="align-middle">
                  <button class="hover:bg-green-600 bg-green-600 font-bold text-white">
                    disponible

                  </button>
                </td>
                <td class="align-middle">
                  Viper
                </td>
                <td class="align-middle text-green-600 font-bold">
                  55%
                </td>
                <td class="align-middle">
                  Tapete baul
                </td>
                <td class="align-middle">
                  <button class="hover:bg-orange-500 bg-orange-500 font-bold text-white">
                    15

                  </button>
                </td>
                <td class="align-middle font-bold">
                  250.000
                </td>
                <td class="align-middle">
                  <button class="hover:bg-green-600 bg-green-700 font-bold text-white">Editar</button>
                </td>
                <td class="align-middle">
                  <button class="hover:bg-red-700 bg-red-500 font-bold text-white">Eliminar</button>
                </td>
              </tr>

              <!--
           <tr v-for="product in products" :key="product.idProducto">
            <td>{{ product.idProducto }}</td>
            <td><RouterLink :to="{ name: 'productoview', params: { id: product.idProducto } }">ver</RouterLink></td>
            <td><button @click="deleteProduct(product.idProducto)">Eliminar</button></td>
           </tr>
-->

            </tbody>
          </table>

        </div>

      </div>
    </main>

  </div>
</template>
<style scoped lang="scss"></style>