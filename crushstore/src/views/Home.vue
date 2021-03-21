<template>
  <div class="home">
    <ProductStories />
    <HomeSlider style="margin-top:2vh;" />
    <AllProducts showHeading="true" style="margin-top:5vh;" />
    <CategoryCard style="margin-top:5vh;" />
    <TileGrid style="margin-top:5vh;" />
    <CallToAction style="margin-top:5vh;" />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductStories from "../components/ProductStories.vue";
import HomeSlider from "@/components/HomeSlider.vue";
import AllProducts from "@/components/AllProducts.vue";
import CategoryCard from "../components/CategoryCard.vue";
import CallToAction from "../components/CallToAction.vue";
import TileGrid from "../components/TileGrid.vue";

export default {
  name: "Home",
  components: {
    ProductStories,
    HomeSlider,
    AllProducts,
    CategoryCard,
    CallToAction,
    TileGrid,
  },
};
</script>
