<template>
  <div class="col-full">
    <h1>Welcome to the Vue Forum</h1>
    <CategoryList :categories="categories" />
  </div>
</template>

<script>
import CategoryList from "@/components/CategoryList";

export default {
  components: {
    CategoryList,
  },
  computed: {
    categories() {
      return Object.values(this.$store.state.categories);
    },
  },
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
