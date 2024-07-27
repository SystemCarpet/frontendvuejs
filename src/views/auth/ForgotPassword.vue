<script setup lang="ts">
import HeaderAlternative from "../base/HeaderAlternative.vue";
import FooterBase from "../base/FooterBase.vue";

import { Email } from "@/assets/smtp/smtp.js";


const sendEmail = () => {
  Email.send({

    Host : "smtp.elasticemail.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "javiervillabon2003@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
};
</script>
<template>
  <HeaderAlternative></HeaderAlternative>
  <main class="flex">
    <div class="container mx-auto">
      <div class="my-10 flex justify-center px-6">
        <div class="flex lg:w-11/12 xl:w-3/4">
          <div
            class="hidden rounded-l-lg bg-cover lg:block lg:w-1/2"
            style="
              background-image: url(&quot;assets/imgs/banners_autocarpet_tapetesgeneralMesa-de-trabajo-1-1100x519.png&quot;);
            "
          ></div>
          <div
            class="w-full rounded-lg bg-white p-5 lg:w-1/2 lg:rounded-l-none"
          >
            <div class="mb-4 px-8 text-center">
              <h3 class="mb-2 pt-4 text-2xl">¿Olvidaste tu contraseña?</h3>
              <p class="mb-4">
                Lo entendemos, pasan cosas. ¡Simplemente ingrese su dirección de
                correo electrónico a continuación y le enviaremos un enlace para
                restablecer su contraseña!
              </p>
            </div>
            <form class="mb-4 px-8 pb-8 pt-6" @submit.prevent="sendEmail()">
              <div class="mb-4 flex">
                <input
                  class="w-full shadow"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div class="mb-6">
                <button
                  class="w-full"
                  type="submit"

                >
                  Restablecer la contraseña
                </button>
              </div>
            </form>
            <div class="text-center">
              <RouterLink :to="{ name: 'registerview' }"
                >¡Crea una cuenta!</RouterLink
              >
            </div>
            <div class="text-center">
              <RouterLink :to="{ name: 'loginview' }"
                >¿Ya tienes una cuenta? Ingresa!</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <FooterBase></FooterBase>
</template>
<style scoped></style>
