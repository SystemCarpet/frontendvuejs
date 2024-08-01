<script setup lang="ts">
import DashboardHeader from "../views/dashboard/DashboardHeader.vue";
import DashboardAside from "../views/dashboard/DashboardAside.vue";
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
import { ref, computed, watch, onMounted, onBeforeMount } from "vue";

const INFO_PRODUCT_QUERY = gql`
  query InfoForProductCreation {
    carModels {
      id
      name
      year
      type {
        id
        name
      }
      make {
        id
        name
      }
    }
    productCategories {
      id
      name
      discount
    }
  }
`;

let categoria = ref();
let estado = ref();
let tipo = ref();
let marca = ref();
let modelo = ref();

let producto = ref({
  precio: 0,//price
  imagen: "",//imageLink
  nombre: "",//itemName
  descripcion: "",//description
  cantidad: 0,//itemStock
  //tipoArticulo: 0,
  modeloVehiculo: 0,
  marcaVehiculo: 0,//modelMake
  categoria: 0,//category
  tipoVehiculo:0,//modelType
});

let dataJSON;

const { result, loading, error } = useQuery(INFO_PRODUCT_QUERY);

const dataLoaded = new Promise<void>((resolve) => {
  watch(loading, (newLoading) => {
    if (!newLoading && result.value) {
      dataJSON = JSON.parse(JSON.stringify(result.value));
      resolve();
    }
  });
});

onBeforeMount(async () => {
  await dataLoaded;
  categoria.value = dataJSON.productCategories;
  marca.value = dataJSON.carModels;
  modelo.value = [marca.value[0].make];
});

const addProduct = async () => {
  console.log(modelo.value);
};

const imageComputed = computed(() => producto.value.imagen);
</script>
<template>
  <div>
    <DashboardHeader></DashboardHeader>
    <div class="grid grid-cols-4 h-screen pt-5 bg-gray-100">
      <DashboardAside></DashboardAside>
      <div class="col-span-2 p-6 bg-white rounded-lg shadow-lg relative">
        <div
          class="absolute top-0 right-0 mt-4 mr-4 w-40 h-40 border border-solid border-sky-700 rounded-lg shadow-md"
        >
          <img
            :src="imageComputed"
            alt="Imagen del producto"
            class="w-full h-full object-cover rounded-lg"
          />
        </div>
        <h1 class="text-2xl font-semibold mb-6">Nuevo producto</h1>
        <form @submit.prevent="addProduct()" class="space-y-6">
          <div>
            <label
              for="nombre-articulo"
              class="block text-sm font-medium text-gray-700"
              >Nombre articulo</label
            >
            <InputText
              type="text"
              v-model="producto.nombre"
              id="nombre-articulo"
              class="w-2/3 border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label
              for="descripcion"
              class="block text-sm font-medium text-gray-700"
              >Descripcion</label
            >
            <Textarea
              v-model="producto.descripcion"
              id="descripcion"
              class="mt-1 w-full border-gray-300 rounded-md shadow-sm"
              autoResize
            />
          </div>
          <div class="flex space-x-4">
            <div>
              <label for="price" class="block text-sm font-medium text-gray-700"
                >Precio</label
              >
              <InputNumber
                v-model="producto.precio"
                inputId="integeronly"
                suffix=" COP"
                id="price"
                class="mt-1 w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label
                for="cantidad"
                class="block text-sm font-medium text-gray-700"
                >Cantidad</label
              >
              <InputNumber
                v-model="producto.cantidad"
                inputId="minmax"
                :min="0"
                :max="100"
                id="cantidad"
                class="mt-1 w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
          </div>

          <div>
            <label
              for="imagen-producto"
              class="block text-sm font-medium text-gray-700"
              >Imagen</label
            >
            <Textarea
              v-model="producto.imagen"
              id="imagen-producto"
              class="mt-1 w-full border-gray-300 rounded-md shadow-sm"
              autoResize
            />
          </div>
          <div class="flex space-x-4">
            <div class="w-1/2">
              <label
                for="marca-vehiculo"
                class="block text-sm font-medium text-gray-700"
                >Marca Vehiculo</label
              >
              <Select
                v-model="producto.marcaVehiculo"
                :options="marca"
                optionLabel="name"
                placeholder="Marca"
                class="mt-1 w-full border-gray-300 rounded-md shadow-sm"
                id="marca-vehiculo"
              />
            </div>
            <div class="w-1/2">
              <label
                for="modelo-vehiculo"
                class="block text-sm font-medium text-gray-700"
                >Modelo Vehiculo</label
              >
              <Select
                v-model="producto.modeloVehiculo"
                :options="modelo"
                optionLabel="name"
                placeholder="Modelo vehiculo"
                class="mt-1 w-full border-gray-300 rounded-md shadow-sm"
                id="modelo-vehiculo"
              />
              <p class="mt-1 text-sm text-blue-500">
                N°
                <!--{{  }} -->
              </p>
            </div>
          </div>
          <div class="flex space-x-4">
            <div class="w-1/2">
              <label
                for="categoria-vehiculo"
                class="block text-sm font-medium text-gray-700"
                >Categoria</label
              >
              <Select
                v-model="producto.categoria"
                :options="categoria"
                optionLabel="name"
                placeholder="Categoria producto"
                class="mt-1 w-full border-gray-300 rounded-md shadow-sm"
                id="categoria-vehiculo"
              />
              <p class="mt-1 text-sm text-green-500">
                Descuento! {{ producto.categoria.discount }}%
              </p>
            </div>
            <!--
            <div class="w-1/2">
              <label
                for="tipo-articulo"
                class="block text-sm font-medium text-gray-700"
                >Tipo articulo</label
              >
              <Select
                v-model="producto.tipoArticulo"
                :options="tipo"
                optionLabel="nombreTipoArticulo"
                placeholder="Tipo de articulo"
                class="mt-1 w-full border-gray-300 rounded-md shadow-sm"
                id="tipo-articulo"
              />
            </div>
            -->
          </div>
          <div class="flex space-x-4">
            <div class="w-1/2">
              <label
                for="estado-articulo"
                class="block text-sm font-medium text-gray-700"
                >Estado articulo</label
              >
              <Select
                v-model="producto.estadoArticulo"
                :options="estado"
                optionLabel="nombreEstadoArticulo"
                placeholder="Estado del articulo"
                class="mt-1 w-full border-gray-300 rounded-md shadow-sm"
                id="estado-articulo"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Agregar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
