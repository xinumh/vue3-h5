
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/user'
  },
  {
    path: '/user',
    component: () => import('./view/user'),
    meta: {
      title: '会员中心'
    }
  },
  {
    path: '/cart',
    component: () => import('./view/cart'),
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/goods',
    component: () => import('./view/goods'),
    meta: {
      title: '商品详情'
    }
  }
];


const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

