const { createApp, mounted } = Vue;
import { store } from "./store/index.js";
import { router } from "./router/index.js";

export const app = createApp({});

app.use(store);
app.use(router);
app.mount("#app");
