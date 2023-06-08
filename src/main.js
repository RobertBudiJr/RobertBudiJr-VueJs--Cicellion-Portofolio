import { createApp } from 'vue';
import { MotionPlugin } from '@vueuse/motion';
import { createPinia } from 'pinia';

import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/scss/styles.scss';

import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/layouts/HomeLayout.vue';
import Project from '@/layouts/ProjectLayout.vue';
import NotFound from '@/layouts/NotFoundLayout.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/project', component: Project },
  { path: '/:pathMatch(.*)', component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

const app = createApp(App);

app.use(MotionPlugin);
app.use(createPinia());
app.use(router);
app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
