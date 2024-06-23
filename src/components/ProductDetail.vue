<script>
export default {
  name: 'ProductDetail',
  data() {
    return {
      product: {
        idProducto: 0,
        precio: 0,
        imagenProducto: '',
        modeloVehiculo: {
          idModeloVehiculo: 0,
          nombreModeloVehiculo: '',
          numeroModeloVehiculo: 0,
          marcaVehiculo: {
            idMarcaVehiculo: 0,
            nombreMarcaVehiculo: ''
          },
          tipoVehiculo: {
            idTipoVehiculo: 0,
            nombreTipoVehiculo: ''
          }
        },
        categoria: {
          idCategoria: 0,
          nombreCategoria: '',
          descuentoCategoria: 0
        },
        articulo: {
          idArticulo: 0,
          nombreArticulo: '',
          descripcion: '',
          cantidad: 0,
          estadoArticulo: {
            idEstadoArticulo: 0,
            nombreEstadoArticulo: ''
          },
          tipoArticulo: {
            idTipoArticulo: 0,
            nombreTipoArticulo: ''
          }
        }
      }

    }
  },
  methods: {
    async getProduct() {
      const response = await fetch(`http://localhost:8090/api/v1/productos/${this.$route.params.id}`)
      const json = await response.json()
      this.product = json
    }
  },
  beforeMount() {
    this.getProduct()
  }
}
</script>
<template>
  <!--
  <div>
    <h1>/producto/{{ product.idProducto }}</h1>
    <ul>
      <li>{{ product }}</li>
      <RouterLink :to="{ name: 'updateproductoview', params: { id: product.idProducto } }">editar</RouterLink>
    </ul>
  </div>
  -->
  <div class="py-6 h-screen">
    <div class="mx-auto mt-6 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="-mx-4 flex flex-col md:flex-row">
        <div class="border-2 border-solid border-sky-500 px-4 md:flex-1">
          <img :src="product.imagenProducto" alt="" />
        </div>
        <div class="px-4 md:flex-1">
          <h2 class="mb-2 text-2xl font-bold leading-tight tracking-tight text-gray-800 md:text-3xl">
            {{ product.articulo.nombreArticulo }}
          </h2>

          <div class="my-4 flex items-center space-x-4">
            <div>
              <div class="flex rounded-lg bg-gray-100 px-3 py-2">
                <span class="mr-1 mt-1">$</span>
                <span class="text-3xl font-bold">{{product.precio}},000</span>
              </div>
            </div>
            <div class="flex-1">
              <p class="text-xl font-semibold text-sky-600">ahorre un {{product.categoria.descuentoCategoria}}%</p>
            </div>
          </div>
          <p class="text-gray-500">
           {{ product.articulo.descripcion }}
          </p>

        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
