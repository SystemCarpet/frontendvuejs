<script lang="ts">
import HeaderAlternative from "./base/HeaderAlternative.vue";
import FooterBase from "./base/FooterBase.vue";
</script>
<template>
  <HeaderAlternative />

    <!-- component
    <div class="flex justify-center">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex">
      <div class="w-1/3 pr-6">
        <img src="https://via.placeholder.com/150" alt="Placeholder Image" class="w-full rounded shadow-md">
      </div>
      <div class="w-2/3">
        <h1 class="text-2xl font-bold mb-4">Crear Orden Personalizada</h1>
        <form @submit.prevent="submitForm">
          <div class="space-y-4">
            <div class="flex items-center space-x-4">
              <label for="baseAntideslizante" class="block text-sm font-medium text-gray-700">Base Antideslizante</label>
              <input type="checkbox" id="baseAntideslizante" v-model="form.base_antideslizante" class="form-checkbox" />
            </div>
            <div class="flex items-center space-x-4">
              <label for="impermeable" class="block text-sm font-medium text-gray-700">Impermeable</label>
              <input type="checkbox" id="impermeable" v-model="form.impermeable" class="form-checkbox" />
            </div>
            <div>
              <label for="usuarioId" class="block text-sm font-medium text-gray-700">Usuario</label>
              <input type="number" id="usuarioId" v-model="form.usuario_id" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
            </div>
            <div>
              <label for="productoId" class="block text-sm font-medium text-gray-700">Producto</label>
              <input type="number" id="productoId" v-model="form.producto_id" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
            </div>
            <div>
              <label for="colorId" class="block text-sm font-medium text-gray-700">Color</label>
              <input type="number" id="colorId" v-model="form.color_id" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
            </div>
            <div>
              <label for="estampadoId" class="block text-sm font-medium text-gray-700">Estampado</label>
              <input type="number" id="estampadoId" v-model="form.estampado_id" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
            </div>
            <div>
              <label for="colorBordeId" class="block text-sm font-medium text-gray-700">Color del Borde</label>
              <input type="number" id="colorBordeId" v-model="form.color_borde_id" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
            </div>
            <div class="text-right">
              <button type="submit" class="px-4 py-2 bg-indigo-500 text-white rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">Enviar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
   -->

  <FooterBase />
</template>

<style scoped></style>
