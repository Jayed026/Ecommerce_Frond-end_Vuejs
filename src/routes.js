import { createWebHistory, createRouter } from "vue-router";
import Welcome from "./components/Welcome.vue";
import Login from "./components/Login.vue";
import SignUp from "./components/SignUp.vue";

import CreateOrdr from "./components/CreateOrdr.vue";
import Orders from "./components/Orders.vue";
import DeleteOrder from "./components/DeleteOrder.vue";
import ShowOrders from "./components/ShowOrders.vue";
import DeleteProduct from "./components/DeleteProduct.vue";
import Uploadprodct from "./components/Uploadprodct.vue";
import ShowProducts from "./components/ShowProducts.vue";
import Products from "./components/Products.vue";

const routes = [
  {
    name: "Welcome",
    path: "/",
    component: Welcome,
  },
  {
    name: "Login",
    path: "/Login",
    component: Login,
  },
  {
    name: "SignUp",
    path: "/SignUp",
    component: SignUp,
  },

  {
    name: "Orders",
    path: "/Orders",
    component: Orders,
  },
  {
    name: "CreateOrdr",
    path: "/CreateOrdr",
    component: CreateOrdr,
  },
  {
    name: "DeleteOrder",
    path: "/DeleteOrder",
    component: DeleteOrder,
  },
  {
    name: "ShowOrders",
    path: "/ShowOrders",
    component: ShowOrders,
  },
  {
    name: "DeleteProduct",
    path: "/DeleteProduct",
    component: DeleteProduct,
  },
  {
    name: "Uploadprodct",
    path: "/Uploadprodct",
    component: Uploadprodct,
  },

  {
    name: "ShowProducts",
    path: "/ShowProducts",
    component: ShowProducts,
  },
  {
    name: "Products",
    path: "/Products",
    component: Products,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
