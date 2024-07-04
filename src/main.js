import { createApp,provide, h } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink
} from "@apollo/client/core";
import { createPinia } from 'pinia'
const pinia = createPinia()


import { DefaultApolloClient } from '@vue/apollo-composable'
const httpLink = new createHttpLink({
  uri:'http://localhost:8000/graphql/'
})

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";

import FloatLabel from "primevue/floatlabel";
import InputNumber from "primevue/inputnumber";
import Button from "primevue/button";
import InputMask from "primevue/inputmask";
import InputText from "primevue/inputtext";
import Select from "primevue/select";
import Textarea from "primevue/textarea";

const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
});
app.use(pinia)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: "light",
    },
  },
});

app.component("InputNumber", InputNumber);
app.component("FloatLabel", FloatLabel);
app.component("Button", Button);
app.component("InputMask", InputMask);
app.component("InputText", InputText);
app.component("Textarea", Textarea);
app.component("Select", Select);

app.use(router);


app.mount("#app");
