import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";

const Main = defineAsyncComponent(() => import('home/main'));

const app = createApp(App)
app.component('header-element',Main)

app.mount("#app");
