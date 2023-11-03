<script>
export default {
  name: 'AddProduct',
  data() {
    return {
      product: {
        idProducto: 0,
        imagenProducto: ''
      }
    }
  },
  methods: {
    async addProduct() {
      const response = await fetch(`http://localhost:8090/api/productos/add`, {
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
  }
}
</script>
<template>
  <div>
    <form action="" @submit.prevent="addProduct()">
      <div>
        <label for="img"></label>
        <input type="text" id="img" name="img" v-model="product.imagenProducto" />
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  </div>
</template>
<style scoped lang="scss"></style>
