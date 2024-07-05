import { createRouter, createWebHistory } from "vue-router";
import ProductsView from "@/views/ProductsView.vue";
import HomeView from "@/views/HomeView.vue";
import ProductView from "@/views/ProductView.vue";
import AddView from "@/views/AddView.vue";
import UpdateView from "@/views/UpdateView.vue";
import ContactView from "../views/ContactView.vue";
import LoginView from "../views/auth/LoginView.vue";
import ForgotPassword from "../views/auth/ForgotPassword.vue";
import RegisterView from "../views/auth/RegisterView.vue";
import ProductDashboard from "../views/dashboard/ProductDashboard.vue";
import PersonalizacionView from "../views/PersonalizacionView.vue";
import CompraView from "../views/CompraView.vue";
import CategoriaDashboard from "../views/dashboard/CategoriaDashboard.vue";
import { useAuthStore } from "../store/Auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homeview",
      component: HomeView,
      meta: {
        requireAuth: false,
      },
    },
    {
      path: "/productos",
      name: "productosview",
      component: ProductsView,
      meta: {
        requireAuth: false,
      },
    },
    {
      path: "/productos/:id",
      name: "productoview",
      component: ProductView,
      meta: {
        requireAuth: false,
      },
    },
    {
      path: "/productos/add",
      name: "addproductoview",
      component: AddView,
      meta: {
        requireAuth: false,
      },
    },
    {
      path: "/productos/:id/edit",
      name: "updateproductoview",
      component: UpdateView,
      meta: {
        requireAuth: false,
      },
    },
    {
      path: "/contacto",
      name: "contactview",
      component: ContactView,
      meta: {
        requireAuth: false,
      },
    },
    {
      path: "/login",
      name: "loginview",
      component: LoginView,
      meta: {
        requireAuth: false,
      },
    },
    {
      path: "/register",
      name: "registerview",
      component: RegisterView,
      meta: {
        requireAuth: false,
      },
    },
    {
      path: "/forgotpassword",
      name: "forgotpassword",
      component: ForgotPassword,
      meta: {
        requireAuth: false,
      },
    },
    {
      path: "/auth/dashboard",
      name: "productdashboard",
      component: ProductDashboard,
      meta: {
        requireAuth: true,
      },
    },
    {
      path: "/personalizacion",
      name: "productopersonalizacion",
      component: PersonalizacionView,
      meta: {
        requireAuth: true,
      },
    },
    {
      path: "/pedido",
      name: "carritodecompras",
      component: CompraView,
      meta: {
        requireAuth: false,
      },
    },
    {
      path: "/auth/categorias",
      name: "categorias",
      component: CategoriaDashboard,
      meta: {
        requireAuth: true,
      },
    },
  ],
});
router.beforeEach((to, from, next) => {
  const store = useAuthStore();
  const auth = store.getJwt != "";
  const needAuth = to.meta.requireAuth;
  if (needAuth && !auth) {
    next("/login");
  }
  next();
});
export default router;
