import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import axios from "axios";
// import Vue from "vue";
import { initializeApp } from "firebase/app";

// Vue.prototype.$axios = axios;
// Vue.config.productionTip = false;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnwgFs1JrNyFeY3YgaD7Y1MJGRPVccOXM",
  authDomain: "bubsplaydate.firebaseapp.com",
  projectId: "bubsplaydate",
  storageBucket: "bubsplaydate.appspot.com",
  messagingSenderId: "614428359815",
  appId: "1:614428359815:web:67bfba2c531e7fcbcf4c22",
  measurementId: "G-5BPS0Q8NSM",
};

// Initialize Firebase
initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

createApp(App).use(store).use(router).mount("#app");
