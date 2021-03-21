<template>
  <div>
    <SfHeading class="heading" :level="2" title="Your Wishlist" />
    <div class="product-grid" v-if="wishlist.length">
      <div v-for="item in wishlist" :key="item._id">
        <SfProductCard
          :image="item.image"
          :imageWidth="216"
          :imageHeight="326"
          :title="item.name"
          :scoreRating="4"
          :reviewsCount="item.stock"
          :regularPrice="item.price + ' TL'"
          :maxRating="5"
          wishlistIcon="heart"
          :link="'./product/' + item._id"
          :isOnWishlist="item.isliked"
          isOnWishlistIcon="heart_fill"
          showAddToCartButton
          @click:wishlist="addRemoveWishlist(item)"
          @click:add-to-cart="addToCart(item._id)"
        />
      </div>
    </div>
    <div id="empty" v-else>
      <SfHeading
        :level="3"
        title="You haven't added anything to the wishlist yet"
      />
      <h2 class="text-primary" @click="routetohome()">Back to Home</h2>
    </div>
  </div>
</template>
<script>
import { SfProductCard, SfHeading } from "@storefront-ui/vue";
import router from "../router";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Wishlist",
  components: {
    SfProductCard,
    SfHeading,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["wishlist"]),
  },
  methods: {
    ...mapActions(["addRemoveWishlist", "addToCart"]),

    routetohome() {
      router.push({ name: "Home" });
    },
  },
  mounted() {
    this.wishlist.forEach(function(i) {
      i.isliked = true;
    });
    this.$forceUpdate();
  },
};
</script>
<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  margin-top: 2vh;
}
.heading {
  text-align: left;
}
#empty {
  margin-top: 10vh;
  text-align: center;
}
#empty h2:hover {
  cursor: pointer;
}
</style>
