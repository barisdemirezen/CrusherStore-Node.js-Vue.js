<template>
  <div>
    <div class="category-grid">
      <div>
        <CategoryBar />
      </div>
      <div>
        <CategoryProducts />
      </div>
    </div>
  </div>
</template>
<script>
import CategoryBar from "../components/CategoryBar";
import CategoryProducts from "../components/CategoryProducts";
export default {
  name: "Category",
  components: {
    CategoryBar,
    CategoryProducts,
  },
};
</script>
<style scoped>
.category-grid {
  display: grid;
  grid-template-columns: 20% 80%;
  gap: 1vw;
}
</style>
