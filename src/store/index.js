import Vue from "vue";
import Vuex from "vuex";

import sourceData from "@/data";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { ...sourceData, authId: "NnooaWj4KHVxbhKwO1pEdfaQDsD2" },

  getters: {
    authUser(state) {
      return state.users[state.authId];
    }
  },

  actions: {
    createPost(context, post) {
      const postId = "greatPost" + Math.random();
      post[".key"] = postId;
      context.commit("setPost", { post, postId });
      context.commit("appendPostToThread", { threadId: post.threadId, postId });
      context.commit("appendThreadToUser", { userId: post.userId, postId });
    },
    updateUser({ commit }, user) {
      commit("setUser", { userId: user[".key"], user });
    }
  },
  mutations: {
    setPost(state, { post, postId }) {
      Vue.set(state.posts, postId, post);
    },
    setUser(state, { user, userId }) {
      Vue.set(state.users, userId, user);
    },
    appendPostToThread(state, { postId, threadId }) {
      const thread = state.threads[threadId];
      Vue.set(thread.posts, postId, postId);
    },
    appendThreadToUser(state, { postId, userId }) {
      const user = state.users[userId];
      Vue.set(user.posts, postId, postId);
    }
  }
});
