import { createApp } from 'vue';
import { MotionPlugin } from '@vueuse/motion';

import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/scss/styles.scss';

const app = createApp(App);

app.use(MotionPlugin);
app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
