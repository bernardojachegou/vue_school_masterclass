<template>
  <div class="col-full">
    <h1>Welcome to the Vue Forum</h1>
    <CategoryList :categories="categories" />
  </div>
</template>

<script>
import sourceData from "@/data";
import CategoryList from "@/components/CategoryList";

export default {
  components: {
    CategoryList,
  },
  data() {
    return {
      categories: Object.values(sourceData.categories),
    };
  },
  // mounted() {
  //   console.log(sourceData);
  // },
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
