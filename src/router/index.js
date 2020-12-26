import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/PageHome";
import ThreadShow from "@/pages/PageThreadShow";
import PageCategory from "@/pages/PageCategory";
import PageForum from "@/pages/PageForum";
import NotFound from "@/pages/PageNotFound";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/category/:id",
      name: "Category",
      component: PageCategory,
      props: true
    },
    {
      path: "/forum/:id",
      name: "Forum",
      component: PageForum,
      props: true
    },
    {
      path: "/thread/:id",
      name: "ThreadShow",
      component: ThreadShow,
      props: true
    },
    {
      path: "*",
      name: "NotFound",
      component: NotFound
    }
  ],
  mode: "history"
});
