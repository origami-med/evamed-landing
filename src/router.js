import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';

// Routes for modal navigation
// The actual content is rendered in App.vue, routes just trigger modal opening
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Home,
  },
  {
    path: '/terms',
    name: 'Terms',
    component: Home,
  },
  {
    // Catch-all route: redirect any unmatched paths to home
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
