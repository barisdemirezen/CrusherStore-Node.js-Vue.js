<template>
  <div>
    <div class="product-grid" v-if="categoryItems.length != 0">
      <SfProductCard
        v-for="product in categoryItems"
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
    <div v-else>
      <SfNotification
        class="no-item"
        visible
        :message="
          'Sorry there is no product in ' + currentCategory + ' category'
        "
        type="warning"
      />
    </div>
  </div>
</template>
<script>
import { SfProductCard, SfNotification } from "@storefront-ui/vue";
import { mapGetters } from "vuex";
export default {
  name: "CategoryProducts",
  data() {
    return {
      items: [],
    };
  },
  computed: {
    ...mapGetters(["categoryItems", "currentCategory"]),
  },
  components: {
    SfProductCard,
    SfNotification,
  },
};
</script>
<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 15px;
  margin-top: 2vh;
}
.no-item {
  margin-top: 10px;
}
@media screen and (max-width: 800px) {
  .product-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 2vh;
  }
}
</style>
