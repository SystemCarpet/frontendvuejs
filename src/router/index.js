import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '@/views/ProductsView.vue'
import HomeView from '@/views/HomeView.vue'
import ProductView from '@/views/ProductView.vue'
import AddView from '@/views/AddView.vue'
import UpdateView from '@/views/UpdateView.vue'
import ContactView from '../views/ContactView.vue'
import LoginView from '../views/auth/LoginView.vue'
import ForgotPassword from '../views/auth/ForgotPassword.vue'
import RegisterView from '../views/auth/RegisterView.vue'
import ProductDashboard from '../views/dashboard/ProductDashboard.vue'


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
    ,
    {
      path: '/contacto',
      name: 'contactview',
      component: ContactView
    }
    ,
    {
      path: '/login',
      name: 'loginview',
      component: LoginView
    }
    ,
    {
      path: '/register',
      name: 'registerview',
      component: RegisterView
    },
    {
      path: '/forgotpassword',
      name: 'forgotpassword',
      component: ForgotPassword
    }
    ,
    {
      path: '/auth/dashboard',
      name: 'productdashboard',
      component: ProductDashboard
    }
  ]
})

export default router
