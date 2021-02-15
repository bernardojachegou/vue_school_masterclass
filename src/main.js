// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import firebase from "firebase/app";
import Vuelidate from "vuelidate";
import App from "./App";
import router from "./router";
import store from "@/store";
import AppDate from "@/components/AppDate";

Vue.use(Vuelidate);
Vue.component("AppDate", AppDate);

Vue.config.productionTip = false;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_apiKey,
  authDomain: process.env.FIREBASE_authDomain,
  projectId: process.env.FIREBASE_projectId,
  storageBucket: process.env.FIREBASE_storageBucket,
  messagingSenderId: process.env.FIREBASE_messagingSenderId,
  appId: process.env.FIREBASE_appId,
  measurementId: process.env.FIREBASE_measurementId
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  template: "<App/>",
  components: { App }
});
