import { createApp } from "vue";
import App from "./App.vue";
import Greeting from "@/Components/Greeting.vue";

let vm = createApp(App);

vm.component("Greeting", Greeting);

vm.mount("#app");
