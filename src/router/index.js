import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '@/views/ProductsView.vue'
import HomeView from '@/views/HomeView.vue'
import ProductView from '@/views/ProductView.vue'
import AddView from '@/views/AddView.vue'
import UpdateView from '@/views/UpdateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homeview',
      component: HomeView
    },
    {
      path: '/productos',
      name: 'productosview',
      component: ProductsView
    },
    {
      path: '/productos/:id',
      name: 'productoview',
      component: ProductView
    },
    {
      path: '/productos/add',
      name: 'addproductoview',
      component: AddView
    },
    {
      path: '/productos/:id/edit',
      name: 'updateproductoview',
      component: UpdateView
    }
  ]
})

export default router
