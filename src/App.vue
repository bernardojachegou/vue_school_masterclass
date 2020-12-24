<template>
  <div id="app">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import sourceData from "@/data";
export default {
  mounted() {
    console.log(sourceData);
  },
  name: "app",
};
</script>

<style>
@import "assets/css/style.css";
</style>
