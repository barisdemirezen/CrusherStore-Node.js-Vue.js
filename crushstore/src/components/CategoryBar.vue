<template>
  <div>
    <div
      v-for="category in categories"
      :class="{ 'category-items-active': category.title == currentCategory }"
      :key="category._id"
      @click="routeTo(category.title)"
    >
      <SfBar
        class="category-items capitalize-text"
        :title="category.title"
        :back="false"
        close
      >
        <SfIcon
          :class="{
            'category-items-icon-active': category.title == currentCategory,
          }"
          class="category-items-icon "
          slot="close"
          icon="chevron_right"
          viewBox="0 0 24 24"
          :coverage="1"
        />
      </SfBar>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { SfBar, SfIcon } from "@storefront-ui/vue";
export default {
  name: "CategoryBar",
  components: {
    SfBar,
    SfIcon,
  },
  computed: {
    ...mapGetters(["categories", "currentCategory"]),
  },
  methods: {
    ...mapActions(["setCurrentCategoryAction", "setCategoryItemsAction"]),
    routeTo(category) {
      this.setCurrentCategoryAction(category);
      this.setCategoryItemsAction(category);
    },
  },
};
</script>
<style>
.category-items {
  margin: 10px 0;
}

.category-items:hover .category-items-icon svg {
  fill: #5ece7b;
  transition: 0.2s ease;
}
.category-items:hover .sf-bar__title {
  color: #5ece7b;
  transition: 0.2s ease;
}
.category-items:hover {
  cursor: pointer;
}
.category-items-active {
  color: #5ece7b;
}
.category-items-icon-active {
  fill: #5ece7b;
}
</style>
