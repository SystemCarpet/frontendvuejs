<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="relative max-w-full">
    <header class="z-10 flex w-full items-center justify-center bg-blue-900">
      <nav class="m-2 w-full">
        <div class="flex items-center font-mono" role="navigation">
          <RouterLink
            :to="{ name: 'homeview' }"
            class="mx-4 hidden w-1/5 lg:inline-block"
          >
            <div class="flex">
              <img
                src="/assets/imgs/AUTOCARPETS_LOGO_BLANCO.png"
                alt=""
                class="my-0"
              />
            </div>
          </RouterLink>
          <div class="flex grow">
            <input
              type="text"
              placeholder="¿Que estas buscando?"
              class="w-full rounded-r-none font-sans focus:ring-0"
            />
            <button
              class="relative flex items-center rounded-l-none uppercase focus:ring-0"
              type="button"
            >
              <span class="fas fa-search"></span>
            </button>
          </div>
          <div class="ml-4 cursor-pointer md:hidden">
            <span class="fas fa-bars text-4xl text-white"></span>
          </div>
          <div class="hidden grow md:block">
            <ul class="flex items-center justify-evenly">
              <li class="mx-1">
                <RouterLink :to="{ name: 'contactview' }" class="text-white"
                  >Contáctenos</RouterLink
                >
              </li>
              <li class="mx-1">
                <RouterLink :to="{ name: 'productosview' }" class="text-white"
                  >Productos</RouterLink
                >
              </li>
              <li class="mx-1">
                <RouterLink
                  :to="{ name: 'loginview' }"
                  class="text-white bg-green-500 px-4 py-2 rounded"
                  >Ingresar</RouterLink
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<style scoped></style>
