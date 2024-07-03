<script lang="ts">
import HeaderAlternative from "../base/HeaderAlternative.vue";
import FooterBase from "../base/FooterBase.vue";


export default {
  name: "LoginView",
  data() {
    return {
    }
  },
  components: {
    HeaderAlternative,
    FooterBase,
  },
};
</script>
<template>
  <HeaderAlternative></HeaderAlternative>
  <div>
    <main>
      <div class="flex w-full justify-center">
        <div class="my-10 flex items-center px-6">
          <div
            class="flex h-full items-center rounded-lg bg-white shadow-md md:rounded-l-lg md:rounded-r-none"
          >
            <div class="m-5 h-min">
              <h1 class="text-xl font-semibold">Bienvenido de nuevo</h1>
              <small class="">Por favor ingrese sus datos</small>
              <form class="mt-4">
                <div class="mb-3 flex">
                  <input
                    id="login-email"
                    type="email"
                    placeholder="Email"
                    class="block w-full rounded-md"

                  />
                </div>
                <div class="mb-3 flex">
                  <input
                    type="password"
                    placeholder="Contraseña"
                    class="block w-full rounded-md border"

                  />
                </div>
                <div class="mb-3 flex items-center">
                  <input id="remember" type="checkbox" class="" />
                  <label for="remember" class="mx-2">Recordarme</label>

                  <RouterLink :to="{ name: 'forgotpassword' }" class="mx-2"
                    >Olvido su contraseña?</RouterLink
                  >
                </div>
                <div class="mb-3">
                  <button type="submit" class="my-1 w-full">
                    iniciar sesión
                  </button>
                </div>
              </form>
              <div class="text-center">
                <p class="">¿No tienes cuenta?</p>
                <RouterLink :to="{ name: 'registerview' }"
                  >Registrarse</RouterLink
                >
              </div>
            </div>
          </div>
          <div class="hidden h-full rounded-r-md md:flex">
            <img
              class="h-full w-full rounded-r-md bg-cover bg-center bg-no-repeat"
              src="assets/imgs/tapetes-final.png"
            />
          </div>
        </div>
      </div>
    </main>
    <FooterBase></FooterBase>
  </div>
</template>
<style scoped lang="scss"></style>
