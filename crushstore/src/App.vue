<template>
  <div id="app">
    <div id="nav">
      <Header />
      <Notifications />
      <CartSidebar />
    </div>
    <router-view id="pages" />
  </div>
</template>

<script>
import CartSidebar from "./components/CartSidebar.vue";
import Notifications from "./components/Notifications.vue";
import Header from "./components/Header.vue";
import { mapActions } from "vuex";
export default {
  components: {
    Header,
    CartSidebar,
    Notifications,
  },
  mounted() {
    this.getNewArrivals();
    this.getCategories();
  },
  methods: {
    ...mapActions(["getNewArrivals", "getCategories"]),
  },
};
</script>

<style>
#app {
  width: 80vw;
  margin: auto;
}

@media screen and (max-width: 800px) {
  #app {
    width: 100vw;
  }
}

#pages {
  margin-top: 1vh;
}
.sf-product-card__wishlist-icon {
  --icon-color: #e83131;
}
.menu {
  display: flex;
  align-items: center;
}
* {
  font-family: var(--font-family--primary);
}
*:focus {
  outline: none;
}
* {
  scrollbar-width: thin;
  scrollbar-color: #5ece7b transparent;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

*::-webkit-scrollbar-track {
  background: none;
}

*::-webkit-scrollbar-thumb {
  background-color: #5ece7b;
  border-radius: 20px;
}

.sh-heading__title {
  font: var(
    --heading-title-font,
    var(--heading-title-font-weight, var(--font-weight--semibold))
      var(--heading-title-font-size, var(--h1-font-size)) /
      var(--heading-title-font-line-height, 1.6)
      var(--heading-title-font-family, var(--font-family--secondary))
  );
}
.sf-tile__title h3 {
  color: white;
  text-shadow: 1px 1px 2px black;
}
.sf-accordion-item__header:hover {
  color: var(--c-primary);
}
.capitalize-text {
  text-transform: capitalize;
}
</style>
