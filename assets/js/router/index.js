const { createRouter, createWebHistory } = VueRouter;
import { Home, TableKeyboard, TableSwitch } from "../component/index.js";

const routes = [
  { path: "/", component: Home },
  { path: "/keyboard", component: TableKeyboard },
  { path: "/switch", component: TableSwitch },
  { path: "/owner", component: TableSwitch },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
