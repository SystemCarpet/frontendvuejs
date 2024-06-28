<script>
import DashboardHeader from '../views/dashboard/DashboardHeader.vue'
import DashboardAside from '../views/dashboard/DashboardAside.vue';

export default {
  name: 'AddProduct',
  data() {
    return {
      product: {
        idProducto: 0,
        imagenProducto: '',
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
        },
        categoria: {
          idCategoria: 0,
          nombreCategoria: '',
          descuentoCategoria: 0
        },
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
        catalogo: {
          idCatalogo: 0,
          nombreCatalogo: ''
        }
      }
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
    }
  },
  components: {
    DashboardHeader,
    DashboardAside
  },
}
</script>
<template>
  <div>
    <DashboardHeader></DashboardHeader>
    <div class="grid grid-cols-4 h-screen">
      <DashboardAside></DashboardAside>
      <form action="" @submit.prevent="addProduct()">
      <div>
        <label for="img">Imagen producto</label>
        <input type="text" id="img" name="img" v-model="product.imagenProducto" />
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
    </div>

  </div>
</template>
<style scoped lang="scss"></style>
