<template>
  <HeaderBase></HeaderBase>
  <main class="bg-gray-100 py-10">
    <div class="container mx-auto flex flex-wrap">
      <!-- Contenedor del Formulario -->
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex-1">
        <h2 class="block text-gray-700 text-xl font-bold mb-2">Contáctanos</h2>
        <form class="w-full max-w-lg">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
              Nombre
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Tu nombre"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="tuemail@ejemplo.com"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="message"
            >
              Mensaje
            </label>
            <textarea
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Tu mensaje"
            ></textarea>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
      <div class="flex-1 px-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15905.870737040765!2d-74.084505!3d4.6884925!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b1c4b43e8b9%3A0xaaf374b9c9b7abdb!2sAutocarpet!5e0!3m2!1ses-419!2sco!4v1719552033017!5m2!1ses-419!2sco"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </main>
  <FooterBase></FooterBase>
</template>

<script setup lang="ts">
import HeaderBase from "./base/HeaderBase.vue";
import FooterBase from "./base/FooterBase.vue";
</script>

<style scoped lang="scss"></style>
