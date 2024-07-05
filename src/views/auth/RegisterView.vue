<script setup lang="ts">
import HeaderAlternative from "../base/HeaderAlternative.vue";
import FooterBase from "../base/FooterBase.vue";
import gql from "graphql-tag";
import { ref } from "vue";
import { useMutation } from "@vue/apollo-composable";
import { useRouter } from 'vue-router';
const router = useRouter();

//https://apollo.vuejs.org/guide-option/queries.html

const REGISTER_MUTATION = gql`
  mutation login(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $phone: String!
  ) {
    createUser(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
      phone: $phone
    ) {
      user {
        email
      }
    }
  }
`;

let email = ref("");
let password = ref("");
let firstName = ref("");
let lastName = ref("");
let phone = ref("");

const { mutate: data } = useMutation(REGISTER_MUTATION);
const register = async () => {
  try {
    const response = await data({
      email: email.value,
      password: password.value,
      firstName: firstName.value,
      lastName: lastName.value,
      phone: phone.value,
    });
    router.push({ name: "loginview" });
  } catch (error) {
    console.log(error)
  }
};
</script>
<template>
  <HeaderAlternative></HeaderAlternative>
  <main class="">
    <div class="flex items-center justify-center md:justify-self-start p-10">
      <div class="mx-auto hidden xl:block">
        <lottie-player
          class=""
          src="assets/animations/json/Animation-1691717368127.json"
          background="Transparent"
          speed=" 1"
          style="width: 500px; height: 500px"
          direction="1"
          mode="bounce"
          loop
          autoplay
        ></lottie-player>
      </div>
      <div class="mx-auto">
        <div
          class="flex items-center justify-center rounded-lg bg-white px-14 shadow-xl"
        >
          <div class="">
            <div class="pt-4">
              <h2 class="py-1 text-center">Registrarse</h2>
              <p class="py-1 text-center">
                ¿Ya tienes una cuenta?
                <RouterLink :to="{ name: 'loginview' }" class="mx-2"
                  >Inicia sesión aquí</RouterLink
                >
              </p>
            </div>
            <form class="text-sm" @submit.prevent="register()">
              <div class="my-4 flex flex-col">
                <label for="name" class="">Nombres</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="mt-2 p-2"
                  placeholder="Introduzca su nombre"
                  v-model="firstName"
                />
              </div>

              <div class="my-4 flex flex-col">
                <label for="email" class="">Email</label>
                <input
                  id="login-email"
                  type="email"
                  name="email"
                  class="mt-2 p-2"
                  placeholder="Dirección de correo electrónico"
                  v-model="email"
                />
              </div>

              <div class="my-4 flex flex-col">
                <label for="password" class="">Contraseña</label>
                <div class="mt-2 flex items-center">
                  <input
                    id="password-signup"
                    class="flex-1 p-2 pr-10"
                    placeholder="Ingresa tu contraseña"
                    type="password"
                    v-model="password"
                  />
                </div>
              </div>
              <div class="mb-3 flex">
                <input
                  type="text"
                  placeholder="Apellidos"
                  class="block w-full rounded-md border"
                  v-model="lastName"
                />
              </div>
              <div class="mb-3 flex">
                <input
                  type="text"
                  placeholder="Telefono"
                  class="block w-full rounded-md border"
                  v-model="phone"
                />
              </div>

              <div class="my-4 flex flex-col">
                <label for="password_confirmation" class=""
                  >Confirme su contraseña</label
                >
                <div class="mt-2 flex items-center">
                  <input
                    name="password_confirmation"
                    id="password_confirmation"
                    class="flex-1 border p-2 pr-10"
                    placeholder="Introduce tu contraseña de nuevo"
                    type="password"
                  />
                </div>
              </div>

              <div class="flex items-center">
                <input
                  type="checkbox"
                  name="remember_me"
                  id="remember_me"
                  class="mr-2 rounded"
                />
                <label for="remember_me" class="">
                  Acepto los <a href="#" class="">términos</a> y la
                  <a href="#" class="">política de privacidad</a>
                </label>
              </div>

              <div class="my-4 flex items-center justify-end space-x-4">
                <button type="submit"
                  class="rounded-lg px-8 py-2 uppercase transition duration-150 hover:shadow-xl"
                >
                  Registrarse
                </button>
              </div>
            </form>

            <div class="flex items-center justify-between">
              <div class="h-1 w-full bg-gray-300"></div>
              <span class="mx-6 text-sm uppercase text-gray-400">O</span>
              <div class="h-1 w-full bg-gray-300"></div>
            </div>
            <div class="flex flex-col items-center">
              <p>
                <a href="#" class="">
                  <span class="fa-brands fa-google mb-4 py-2"></span>
                  Registrarse con Google
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <FooterBase></FooterBase>
</template>
<style scoped></style>
