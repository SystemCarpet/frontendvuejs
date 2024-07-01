<script setup></script>
<template>
  <div class="flex col-span-1 row-span-4 rounded-md">
    <ul class="flex w-full flex-col">
      <li class="p-4">
        <a href="#" class="">
          <div class="hidden md:block">
            <img class="" src="assets/imgs/autocarpet_logo.png" alt="">
          </div>
        </a>
      </li>
      <li class="px-4 my-2">
        <span class="font-medium uppercase text-gray-400">Productos</span>
      </li>
      <li class="px-4 my-2">
        <RouterLink :to="{ name: 'productdashboard' }" class="flex items-center rounded-lg text-gray-600 hover:bg-gray-100">
          <span class="text-blue-500">
            <i class="fa-solid fa-boxes-packing text-2xl"></i>
          </span>
          <span class="ml-3 text-lg">Productos</span>
        </RouterLink>
      </li>
      <li class="px-4 my-2">
        <RouterLink :to="{ name: 'categorias' }" class="flex items-center rounded-lg text-gray-600 hover:bg-gray-100">
          <span class="text-blue-500">
            <i class="fa-solid fa-list text-2xl"></i>
          </span>
          <span class="ml-3 text-lg">Categorias</span>
        </RouterLink>
      </li>
      <li class="px-4 my-2">
        <RouterLink :to="{ name: 'addproductoview' }" class="flex items-center rounded-lg text-gray-600 hover:bg-gray-100">
          <span class="text-green-400">
            <i class="fa-solid fa-plus text-2xl"></i>
          </span>
          <span class="ml-3 text-lg">Add new</span>
        </RouterLink>
      </li>
      <li class="px-4 my-2">
        <span class="my-4 flex text-sm font-medium uppercase text-gray-400">Cuenta</span>
      </li>
      <li class="px-4 my-2">
        <a href="#" class="flex items-center rounded-lg text-gray-600 hover:bg-gray-100">
          <span class="text-red-500">
            <i class="fa-solid fa-lock-open text-2xl"></i>
          </span>
          <span class="ml-3 text-lg">Logout</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>