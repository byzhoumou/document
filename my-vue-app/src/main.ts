import { createApp } from "vue";
import "./assets/style.scss";
import "./style.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);
// 挂载app
app.mount("#app");
