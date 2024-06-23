<script>
export default {
  name: 'ProductUpdate',
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
    async getProduct() {
      const response = await fetch(
        `http://localhost:8090/api/v1/productos/${this.$route.params.id}/update`
      )
      const json = await response.json()
      this.product = json
    },
    async updateProduct() {
      const response = await fetch(
        `http://localhost:8090/api/v1/productos/${this.$route.params.id}/update`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.product)
        }
      )
      if (response.ok) {
        this.$router.push({ name: 'productoview', params: { id: this.product.idProducto } })
      }
    }
  },
  beforeMount() {
    this.getProduct()
  }
}
</script>
<template>
  <div>
    <h1>/producto/{{ product.idProducto }}/update</h1>
    <form action="" @submit.prevent="updateProduct()">
      <div>
        <label for="img"></label>
        <input type="text" id="img" name="img" v-model="product.nombreProducto" />
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  </div>
</template>
<style scoped lang="scss"></style>
