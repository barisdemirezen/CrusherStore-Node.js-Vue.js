<template>
  <div>
    <SfHeading :level="2" title="Categories" />
    <div class="horizontal-swipe">
      <div class="inner-swipe">
        <SfCategoryCard
          class="capitalize-text"
          v-for="category in categories"
          :key="category._id"
          :label="category.title"
          :background="category.image"
          link="#"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { SfCategoryCard, SfHeading } from "@storefront-ui/vue";
export default {
  name: "CategoryCard",
  components: {
    SfCategoryCard,
    SfHeading,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["categories"]),
  },
};
</script>
<style scoped>
.horizontal-swipe {
  overflow: auto;
}
.inner-swipe {
  display: inline-flex;
  padding-bottom: 25px;
}
.inner-swipe a {
  margin: 0 15px 0 15px;
}
.sf-category-card {
  background-position: top !important;
  background-size: 60% !important;
  background-repeat: no-repeat !important;
}
</style>
