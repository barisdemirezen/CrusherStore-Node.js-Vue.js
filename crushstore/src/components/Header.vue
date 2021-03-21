<template>
  <div>
    <SfHeader
      logo="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png"
      title="Storefront UI"
      cartIcon="empty_cart"
      wishlistIcon="heart"
      accountIcon=""
      wishlistItemsQty="0"
      cartItemsQty="0"
      isNavVisible
      :activeIcon="activeIcon"
      @click:cart="showCart()"
      @click:wishlist="routeWishlist()"
    >
      <div slot="search" />
      <div class="menu" slot="navigation">
        <div @click="routeHome()" class="sf-header-navigation-item">
          <SfMenuItem
            class="sf-header-navigation-item__item
          sf-header-navigation-item__item--desktop"
            :class="{
              'sf-header-active': this.$route.name.includes('Home'),
            }"
            label="Home"
            link=""
          />
        </div>
        <div @click="routeCategory()" class="sf-header-navigation-item">
          <SfMenuItem
            class="sf-header-navigation-item__item sf-header-navigation-item__item--desktop"
            :class="{
              'sf-header-active': this.$route.name.includes('Category'),
            }"
            label="Categories"
            link=""
          />
        </div>
      </div>
    </SfHeader>
  </div>
</template>
<script>
import router from "../router";
import { SfHeader, SfMenuItem } from "@storefront-ui/vue";
import { mapActions } from "vuex";
export default {
  name: "Header",
  components: {
    SfHeader,
    SfMenuItem,
  },
  data() {
    return {
      query: "",
      activeIcon: "",
      currentRoute: this.$route.path,
    };
  },
  methods: {
    ...mapActions(["showCart"]),
    routeHome() {
      if (this.$route.name != "Home") {
        router.push({ name: "Home" });
      }
    },
    routeCategory() {
      if (this.$route.name != "Category") {
        router.push({ name: "Category" });
      }
    },
    routeWishlist() {
      if (this.$route.name != "Wishlist") {
        router.push({ name: "Wishlist" });
      }
    },
  },
  watch: {
    $route(e) {
      if (e.name == "Wishlist") {
        this.activeIcon = "wishlist";
      } else {
        this.activeIcon = "";
      }
    },
  },
};
</script>
<style>
.sf-menu-item__count {
  display: none;
}
.sf-header-navigation-item:hover {
  --header-navigation-item-color: var(--c-primary);
  --header-navigation-item-border-color: var(--c-primary);
}
.sf-header-active {
  --header-navigation-item-color: var(--c-primary);
  --header-navigation-item-border-color: var(--c-primary);
}
</style>
