import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import layoutRoute from '../components/layout-route.vue';
export const letters = 'abcdef';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/lr',
    name: 'spec-lr',
    component: layoutRoute,
    meta: { title: 'Layout route' }
  }
];

for (const l of letters) {
  const L = l.toUpperCase();
  routes.push({
    name: `r-${l}`,
    path: `/${l}`,
    component: { template: `<p>test-${L}</p>` },
    meta: { title: `${L}-test` }
  });
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
