import Vue from "vue";
import store from "@/store";
import Router from "vue-router";
import Home from "@/pages/PageHome";
import ThreadShow from "@/pages/PageThreadShow";
import ThreadCreate from "@/pages/PageThreadCreate";
import ThreadEdit from "@/pages/PageThreadEdit";
import PageCategory from "@/pages/PageCategory";
import PageForum from "@/pages/PageForum";
import PageProfile from "@/pages/pageProfile";
import PageRegister from "@/pages/pageRegister";
import PageSignIn from "@/pages/PageSignIn";
import NotFound from "@/pages/PageNotFound";

Vue.use(Router);

const router = new Router({
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
      path: "/thread/create/:forumId",
      name: "ThreadCreate",
      component: ThreadCreate,
      props: true
    },
    {
      path: "/thread/:id",
      name: "ThreadShow",
      component: ThreadShow,
      props: true
    },
    {
      path: "/thread/:id/edit",
      name: "ThreadEdit",
      component: ThreadEdit,
      props: true
    },
    {
      path: "/me",
      name: "PageProfile",
      component: PageProfile,
      props: true,
      meta: { requiresAuth: true }
    },
    {
      path: "/me/edit",
      name: "PageProfileEdit",
      component: PageProfile,
      props: { edit: true }
    },
    {
      path: "/register",
      name: "PageRegister",
      component: PageRegister
    },
    {
      path: "/signin",
      name: "PageSignIn",
      component: PageSignIn
    },
    {
      path: "/logout",
      name: "SignOut",
      beforeEnter(to, from, next) {
        store.dispatch("signOut").then(() => next({ name: "Home" }));
      }
    },
    {
      path: "*",
      name: "NotFound",
      component: NotFound
    }
  ],
  mode: "history"
});

router.beforeEach((to, from, next) => {
  console.log(`🚦 navigating to ${to.name} from ${from.name}`);
  store.dispatch("initAuthentication").then(user => {
    if (to.matched.some(route => route.meta.requiresAuth)) {
      // protected route
      if (user) {
        next();
      } else {
        next({ name: "Home" });
      }
    } else {
      next();
    }
  });
});

export default router;
