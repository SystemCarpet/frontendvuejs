import { createApp, h } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client/core";
import { createApolloProvider } from '@vue/apollo-option'


const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  cache,
  uri: 'http://localhost:4042/graphql',
})


const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
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
    render: () => h(App),
});
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
app.use(apolloProvider);

app.mount("#app");
