import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { CAlert } from '@coreui/bootstrap-vue';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
