import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      jwt: localStorage.getItem("jwt") || "",
      error: "",
    };
  },
  getters: {
    getJwt: (state) => state.jwt,
  },
  actions: {
    setJwt(token) {
      this.jwt = token;
      localStorage.setItem("jwt", token);  // Almacenar el JWT en localStorage
    },
    clearJwt() {
      this.jwt = "";
      localStorage.removeItem("jwt");  // Eliminar el JWT de localStorage
    },
    setError(error) {
      this.error = error;
    }
  }
});
