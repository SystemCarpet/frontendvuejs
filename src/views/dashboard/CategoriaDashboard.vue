<script setup lang="ts">
import DashboardHeader from "./DashboardHeader.vue";
import DashboardAside from "./DashboardAside.vue";
</script>
<template>
    <div>
    <DashboardHeader></DashboardHeader>
    <div class="grid grid-cols-4 h-screen pt-5 bg-gray-100">
      <DashboardAside></DashboardAside>
      <div class="col-span-2 p-6 bg-white rounded-lg shadow-lg relative">
        <h1 class="text-2xl font-semibold mb-6">Nuevo categoria</h1>
        <form class="">
          <div class="flex space-x-4">
            <div class="w-1/2">
              <label for="marca-vehiculo" class="block text-sm font-medium text-gray-700">Nombre categoria</label>
              <Select  optionLabel="nombreMarcaVehiculo" placeholder="Nombre" class="mt-1 w-full border-gray-300 rounded-md shadow-sm" id="marca-vehiculo" />
            </div>
            <div>
            <label for="cantidad" class="block text-sm font-medium text-gray-700">Descuento categoria</label>
            <InputNumber inputId="minmax" :min="0" :max="100" id="cantidad" class="mt-1 w-full border-gray-300 rounded-md shadow-sm" />
          </div>
            <button type="submit" class=" border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Agregar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
