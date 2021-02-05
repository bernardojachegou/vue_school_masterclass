<template>
  <div class="col-full" :class="$style.centered">
    <h1 :class="$style.headingLarge">Not Found</h1>
    <p :class="$style.textLarge">
      Oops, We can't track you anymore,
      <router-link :to="{ name: 'Home' }"> try back home! </router-link>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$emit("ready");
  },
};
</script>

<style module>
.headingLarge {
  font-size: 80px;
}

.textLarge {
  font-size: 40px;
  font-weight: 100;
}

.centered {
  text-align: center;
}
</style>