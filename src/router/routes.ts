import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MainScreen.vue')},
      { path: 'robots', component: () => import('pages/RobotsListScreen.vue')},
      { path: 'robots/:robot', component: () => import('pages/RobotScreen.vue')},
      { path: 'robots/:robot/orders', component: () => import('pages/OrdersScreen.vue')},
      { path: 'robots/:robot/algorithms/:algorithm', component: () => import('pages/AlgorithmScreen.vue')},
      { path: 'algorithms', component: () => import('pages/AlgorithmsScreen.vue')}
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
    name: 'NotFound'
  },
];

export default routes;
