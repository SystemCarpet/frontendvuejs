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
      tipo: []

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
    <div class="grid grid-cols-4 h-screen pt-5">
      <DashboardAside></DashboardAside>
      <div>
        <h1>Nuevo producto</h1>
        <form action="" @submit.prevent="console.log(this.product)" class="pt-5">
          <div>
            <label for="price">Precio</label><br>
            <InputNumber v-model="product.precio" inputId="integeronly" suffix=" COP" id="price" />
          </div>

          <div>
            <label for="imagen-producto">Imagen</label><br>
            <InputText type="text" v-model="product.imagenProducto" id="imagen-producto" />
          </div>
          <div>
            <label for="modelo-vehiculo">Modelo Vehiculo</label><br>
            <Select v-model="product.modeloVehiculo.idModeloVehiculo" :options="vehiculo"
              optionLabel="nombreModeloVehiculo" placeholder="Modelo vehiculo" class="w-full md:w-56"
              id="modelo-vehiculo" />
          </div>
          <div>
            <label for="categoria-vehiculo">Categoria</label><br>
            <Select v-model="product.categoria.idCategoria" :options="categoria" optionLabel="nombreCategoria"
              placeholder="Categoria producto" class="w-full md:w-56" id="categoria-vehiculo" />
          </div>
          <div>
            <label for="tipo-articulo">Tipo articulo</label><br>
            <Select v-model="product.articulo.tipoArticulo.idTipoArticulo" :options="tipo"
              optionLabel="nombreTipoArticulo" placeholder="Tipo de articulo" class="w-full md:w-56"
              id="tipo-articulo" />
          </div>
          <div>
            <label for="estado-articulo">Estado articulo</label><br>
            <Select v-model="product.articulo.estadoArticulo.idEstadoArticulo" :options="estado"
              optionLabel="nombreEstadoArticulo" placeholder="Estado del articulo" class="w-full md:w-56"
              id="estado-articulo" />
          </div>
          <div>
            <input type="submit" value="Submit" />

          </div>
        </form>
      </div>
      <div class="col-span-2">
        <img v-bind:src="imageComputed" alt="">
      </div>

    </div>

  </div>
</template>
<style scoped lang="scss"></style>
