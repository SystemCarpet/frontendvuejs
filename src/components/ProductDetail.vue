<script>
export default {
  name: 'ProductDetail',
  data() {
    return {
      product: {
        idProducto: 0,
        imagenProducto: '',
        articulo: {
          idArticulo: 0,
          nombreArticulo: '',
          cantidadArticulo: 0,
          dimensionArticulo: '',
          descripcionArticulo: '',
          precioArticulo: 0,
          tipoArticulo: {
            idTipoArticulo: 0,
            nombreTipoArticulo: ''
          },
          estadoArticulo: {
            idEstadoArticulo: 0,
            nombreEstadoArticulo: ''
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
      const response = await fetch(`http://localhost:8090/api/productos/${this.$route.params.id}`)
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
  <div>
    <h1>/producto/{{ product.idProducto }}</h1>
    <ul>
      <li>{{ product }}</li>
      <RouterLink :to="{ name: 'updateproductoview', params: { id: product.idProducto } }">editar</RouterLink>
    </ul>
  </div>
</template>
<style scoped lang="scss"></style>
