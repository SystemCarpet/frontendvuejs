<script lang="ts" setup>
import HeaderAlternative from "./base/HeaderAlternative.vue";
</script>

<template>
  <HeaderAlternative />

  <div class="h-screen bg-gray-100 pt-20">
    <div
      class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0"
    >
      <div class="rounded-lg md:w-2/3">
        <div
          class="mb-6 justify-between rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
        >
          <img
            src="assets/imgs/tapetes-carros-mercedes-a200.jpeg"
            alt="product-image"
            class="w-full rounded-lg sm:w-40"
          />
          <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div class="mt-5 sm:mt-0">
              <h2 class="text-lg font-bold text-gray-900">
                Tapete para Mercedes Benz A200
              </h2>
              <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
            </div>
            <div
              class="mt-4 flex justify-between sm:mt-0 sm:block sm:space-x-6 sm:space-y-6"
            >
              <div class="flex items-center border-gray-100">
                <span
                  class="cursor-pointer rounded-l bg-gray-100 px-3.5 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50"
                >
                  -
                </span>
                <input
                  class="h-8 w-8 border bg-white text-center text-xs outline-none"
                  type="number"
                  value="2"
                  min="1"
                />
                <span
                  class="cursor-pointer rounded-r bg-gray-100 px-3 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50"
                >
                  +
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Sub total -->
      <div
        class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3"
      >
        <div class="mb-2 flex justify-between">
          <p class="text-gray-700">Subtotal</p>
          <p class="text-gray-700">$129.99</p>
        </div>
        <div class="flex justify-between">
          <p class="text-gray-700">Shipping</p>
          <p class="text-gray-700">$4.99</p>
        </div>
        <hr class="my-4" />
        <div class="flex justify-between">
          <p class="text-lg font-bold">Total</p>
          <div class="">
            <p class="mb-1 text-lg font-bold">$134.98 USD</p>
            <p class="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
