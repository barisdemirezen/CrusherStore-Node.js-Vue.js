<template>
  <div>
    <SfSidebar
      @close="hideCart()"
      class="sf-sidebar--right"
      title="My Cart"
      :headingLevel="3"
      button
      :visible="isCartOpen"
    >
      Total items: {{ cart.length }}
      <div slot="default">
        <SfCollectedProduct
          v-for="cartItem in cart"
          :key="cartItem._id"
          :image="cartItem.image"
          :imageWidth="150"
          :imageHeight="200"
          :title="cartItem.name"
          :regularPrice="cartItem.price + ' TL'"
          @click:remove="removefromcart(cartItem._id)"
        >
          <div slot="configuration" />
          <div slot="input" />
        </SfCollectedProduct>
      </div>
    </SfSidebar>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { SfSidebar, SfCollectedProduct } from "@storefront-ui/vue";
export default {
  name: "CartSidebar",
  components: {
    SfSidebar,
    SfCollectedProduct,
  },
  data() {
    return {
      cartItems: [],
    };
  },
  computed: {
    ...mapGetters(["cart", "isCartOpen"]),
  },
  mounted() {
    this.getCartAction();
    this.$forceUpdate();
  },
  methods: {
    ...mapActions(["getCartAction", "removeFromCart", "hideCart"]),
    removefromcart(id) {
      this.removeFromCart(id);
    },
  },
};
</script>
<style></style>
