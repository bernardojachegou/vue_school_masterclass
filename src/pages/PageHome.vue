<template>
  <div class="col-full push-top">
    <h1>Welcome to the Vue Forum</h1>
    <CategoryList :categories="categories" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
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

  methods: {
    ...mapActions(["fetchAllCategories", "fetchForums"]),
  },

  created() {
    this.fetchAllCategories().then((categories) => {
      categories.forEach((category) =>
        this.fetchForums({ ids: Object.keys(category.forums) })
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
