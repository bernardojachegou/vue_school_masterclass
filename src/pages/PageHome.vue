<template>
  <div class="col-full push-top">
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

  beforeCreate() {
    this.$store.dispatch("fetchAllCategories").then((categories) => {
      categories.forEach((category) =>
        this.$store.dispatch("fetchForums", {
          ids: Object.keys(category.forums),
        })
      );
    });
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
