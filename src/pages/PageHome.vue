<template>
  <div v-if="asyncDataStatus_ready" class="col-full push-top">
    <h1>Welcome to the Vue Forum</h1>
    <CategoryList :categories="categories" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import CategoryList from "@/components/CategoryList";
import asyncDataStatus from "@/mixins/asyncDataStatus";

export default {
  components: {
    CategoryList,
  },

  mixins: [asyncDataStatus],

  computed: {
    categories() {
      return Object.values(this.$store.state.categories.items);
    },
  },

  methods: {
    ...mapActions("categories", ["fetchAllCategories"]),
    ...mapActions("forums", ["fetchForums"]),
  },

  created() {
    this.fetchAllCategories()
      .then((categories) =>
        Promise.all(
          categories.map((category) =>
            this.fetchForums({ ids: Object.keys(category.forums) })
          )
        )
      )
      .then(() => {
        this.asyncDataStatus_fetched();
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
