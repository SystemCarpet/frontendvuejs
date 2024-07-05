<script  setup>
import { RouterLink } from 'vue-router'

</script>
<template>

  <header class="sticky top-0 flex items-center justify-center bg-gray-100">
    <nav class="w-full">
      <div class=" flex lg:items-center justify-between m-4">

        <RouterLink :to="{ name: 'homeview' }">
          <p class="text-sm font-light uppercase mx-4">
            Autocarpet S.A.S
            <span class="block text-base font-bold tracking-widest">
              System
            </span>
          </p>

        </RouterLink>
        <ul class="flex items-center">
          <li>
            <a href="#" class="font-sans text-sm font-semibold tracking-wider text-gray-800">

            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<style scoped></style>