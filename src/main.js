// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import firebase from "firebase/app";
import App from "./App";
import router from "./router";
import store from "@/store";

import AppDate from "@/components/AppDate";

Vue.component("AppDate", AppDate);

Vue.config.productionTip = false;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApfd9e7ZCqZKhzsRNB5MntMZPvYAoJGxg",
  authDomain: "vue-school-forum-ecc88.firebaseapp.com",
  projectId: "vue-school-forum-ecc88",
  storageBucket: "vue-school-forum-ecc88.appspot.com",
  messagingSenderId: "981864202775",
  appId: "1:981864202775:web:aea807a6705d1b5d06d252",
  measurementId: "G-XZJ6RY9KK3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  template: "<App/>",
  components: { App },
  beforeCreate() {
    store.dispatch("fetchUser", { id: store.state.authId });
  }
});
