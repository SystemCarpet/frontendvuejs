<script>
import DashboardHeader from '../views/dashboard/DashboardHeader.vue'
import DashboardAside from '../views/dashboard/DashboardAside.vue';

export default {
  name: 'AddProduct',
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
      },
      vehiculo: [],
      categoria: [],
      estado: [],
      tipo: [],
      marca: []

    }
  },
  methods: {
    async addProduct() {
      const response = await fetch(`http://localhost:8090/api/v1/productos/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.product)
      })
      if (response.ok) {
        this.$router.push({ name: 'productosview' })
      }
    },
    async getModelosVehiculo() {
      const response = await fetch(`http://localhost:8090/api/v1/modelos-vehiculos`)
      const json = await response.json()
      if (response.ok) {
        this.vehiculo = json
      }
    },
    async getCategoria() {
      const response = await fetch(`http://localhost:8090/api/v1/categorias`)
      const json = await response.json()
      if (response.ok) {
        this.categoria = json
      }
    },
    async getEstadoArticulo() {
      const response = await fetch(`http://localhost:8090/api/v1/estados-articulos`)
      const json = await response.json()
      if (response.ok) {
        this.estado = json
      }
    },
    async getTipoArticulo() {
      const response = await fetch(`http://localhost:8090/api/v1/tipos-articulos`)
      const json = await response.json()
      if (response.ok) {
        this.tipo = json
      }
    },
    async getMarcaVehiculo() {
      const response = await fetch(`http://localhost:8090/api/v1/marcas-vehiculos`)
      const json = await response.json()
      if (response.ok) {
        this.marca = json
      }
    },
  },
  components: {
    DashboardHeader,
    DashboardAside
  },
  beforeMount() {
    this.getModelosVehiculo()
    this.getCategoria()
    this.getEstadoArticulo()
    this.getTipoArticulo()
    this.getMarcaVehiculo()
  },
  computed: {
    imageComputed() {
      return this.product.imagenProducto
    },
    descuento() {
      return this.product.categoria.descuentoCategoria
    }
  }
}
</script>
<template>
  <div>
    <DashboardHeader></DashboardHeader>
    <div class="grid grid-cols-4 h-screen pt-5 bg-gray-100">
      <DashboardAside></DashboardAside>
      <div class="col-span-2 p-6 bg-white rounded-lg shadow-lg relative">
        <div class="absolute top-0 right-0 mt-4 mr-4 w-40 h-40 border border-solid border-sky-700 rounded-lg shadow-md">
          <img :src="imageComputed" alt="Imagen del producto" class="w-full h-full object-cover rounded-lg">
        </div>
        <h1 class="text-2xl font-semibold mb-6">Nuevo producto</h1>
        <form @submit.prevent="addProduct()" class="space-y-6">
          <div>
            <label for="nombre-articulo" class="block text-sm font-medium text-gray-700">Nombre articulo</label>
            <InputText type="text" v-model="product.articulo.nombreArticulo" id="nombre-articulo" class=" w-2/3 border-gray-300 rounded-md shadow-sm" />
          </div>
          <div>
            <label for="descripcion" class="block text-sm font-medium text-gray-700">Descripcion</label>
            <Textarea v-model="product.articulo.descripcion" id="descripcion" class="mt-1 w-full border-gray-300 rounded-md shadow-sm" autoResize />
          </div>
          <div class="flex space-x-4">
            <div>
            <label for="price" class="block text-sm font-medium text-gray-700">Precio</label>
            <InputNumber v-model="product.precio" inputId="integeronly" suffix=" COP" id="price" class="mt-1 w-full border-gray-300 rounded-md shadow-sm" />
          </div>
          <div>
            <label for="cantidad" class="block text-sm font-medium text-gray-700">Cantidad</label>
            <InputNumber v-model="product.articulo.cantidad" inputId="minmax" :min="0" :max="100" id="cantidad" class="mt-1 w-full border-gray-300 rounded-md shadow-sm" />
          </div>
          </div>

          <div>
            <label for="imagen-producto" class="block text-sm font-medium text-gray-700">Imagen</label>
            <Textarea v-model="product.imagenProducto" id="imagen-producto" class="mt-1 w-full border-gray-300 rounded-md shadow-sm" autoResize />
          </div>
          <div class="flex space-x-4">
            <div class="w-1/2">
              <label for="marca-vehiculo" class="block text-sm font-medium text-gray-700">Marca Vehiculo</label>
              <Select v-model="product.marcaVehiculo" :options="marca" optionLabel="nombreMarcaVehiculo" placeholder="Marca" class="mt-1 w-full border-gray-300 rounded-md shadow-sm" id="marca-vehiculo" />
            </div>
            <div class="w-1/2">
              <label for="modelo-vehiculo" class="block text-sm font-medium text-gray-700">Modelo Vehiculo</label>
              <Select v-model="product.modeloVehiculo" :options="vehiculo" optionLabel="nombreModeloVehiculo" placeholder="Modelo vehiculo" class="mt-1 w-full border-gray-300 rounded-md shadow-sm" id="modelo-vehiculo" />
              <p class="mt-1 text-sm text-blue-500">N° {{ product.modeloVehiculo.numeroModeloVehiculo }}</p>
            </div>
          </div>
          <div class="flex space-x-4">
            <div class="w-1/2">
              <label for="categoria-vehiculo" class="block text-sm font-medium text-gray-700">Categoria</label>
              <Select v-model="product.categoria" :options="categoria" optionLabel="nombreCategoria" placeholder="Categoria producto" class="mt-1 w-full border-gray-300 rounded-md shadow-sm" id="categoria-vehiculo" />
              <p class="mt-1 text-sm text-green-500">Descuento! {{ product.categoria.descuentoCategoria }}%</p>
            </div>
            <div class="w-1/2">
              <label for="tipo-articulo" class="block text-sm font-medium text-gray-700">Tipo articulo</label>
              <Select v-model="product.articulo.tipoArticulo" :options="tipo" optionLabel="nombreTipoArticulo" placeholder="Tipo de articulo" class="mt-1 w-full border-gray-300 rounded-md shadow-sm" id="tipo-articulo" />
            </div>
          </div>
          <div class="flex space-x-4">
            <div class="w-1/2">
              <label for="estado-articulo" class="block text-sm font-medium text-gray-700">Estado articulo</label>
              <Select v-model="product.articulo.estadoArticulo" :options="estado" optionLabel="nombreEstadoArticulo" placeholder="Estado del articulo" class="mt-1 w-full border-gray-300 rounded-md shadow-sm" id="estado-articulo" />
            </div>
          </div>
          <div>
            <button type="submit" class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Agregar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss"></style>
