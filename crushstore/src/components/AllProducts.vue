<template>
  <div>
    <SfHeading
      v-if="showHeading"
      :level="2"
      title="New Arrivals"
      description="#GETNOW"
    />
    <div class="product-grid">
      <SfProductCard
        v-for="product in newArrivals"
        :key="product._id"
        :image="product.image"
        :imageWidth="216"
        :imageHeight="326"
        :title="product.name"
        :scoreRating="4"
        :reviewsCount="product.stock"
        :regularPrice="product.price + ' TL'"
        :maxRating="5"
        :link="'./product/' + product._id"
        wishlistIcon="heart"
        isOnWishlistIcon="heart_fill"
        :isOnWishlist="product.isliked"
        showAddToCartButton
        @enter:search="search()"
        @click:wishlist="addRemoveWishlist(product)"
        @click:add-to-cart="addToCart(product._id)"
      />
    </div>
  </div>
</template>
<script>
import { SfProductCard, SfHeading } from "@storefront-ui/vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AllProducts",
  data() {
    return {
      loading: true,
    };
  },
  props: ["showHeading"],
  components: {
    SfProductCard,
    SfHeading,
  },
  computed: {
    ...mapGetters(["newArrivals"]),
  },
  methods: {
    ...mapActions(["addRemoveWishlist", "addToCart"]),
    search() {
      console.log("xx");
    },
  },
  mounted() {},
};
</script>
<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 15px;
  margin-top: 2vh;
}

@media screen and (max-width: 800px) {
  .product-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 2vh;
  }
}
</style>
