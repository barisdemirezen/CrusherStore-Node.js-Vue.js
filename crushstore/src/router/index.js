import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Wishlist from "../views/Wishlist.vue";
import Product from "../views/Product.vue";
import NotFound from "../views/NotFound.vue";
import Category from "../views/Category.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/wishlist",
    name: "Wishlist",
    component: Wishlist,
  },
  {
    path: "/product/:productid",
    name: "Product",
    component: Product,
  },
  {
    path: "/category",
    name: "Category",
    component: Category,
  },
  {
    path: "*",
    name: "404",
    component: NotFound,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
