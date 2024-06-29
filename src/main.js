import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

import FloatLabel from 'primevue/floatlabel';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';
import InputMask from 'primevue/inputmask';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Textarea from 'primevue/textarea';


const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: 'light',
        }
    }
});


app.component('InputNumber', InputNumber);

app.component('FloatLabel',FloatLabel)
app.component('Button',Button)
app.component('InputMask',InputMask)
app.component('InputText',InputText)
app.component('Textarea',Textarea)
app.component('Select',Select)




app.use(router)

app.mount('#app')
