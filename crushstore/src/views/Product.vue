<template>
  <div>
    <div class="product">
      <div>
        <SfGallery
          :key="galleryKey"
          :images="productimages"
          :imageWidth="400"
          :imageHeight="400"
          :current="1"
          enableZoom
          :sliderOptions="{
            type: 'slider',
            autoplay: false,
            rewind: false,
            gap: 0,
          }"
        />
      </div>
      <div class="details">
        <SfHeading :level="3" :title="product.name" />
        <div class="sf-price">
          <span class="sf-price__regular"> {{ product.price }} TL </span>
        </div>
        <p class="product__description">{{ product.details.detail }}</p>
        <div class="cart-button">
          <SfAddToCart @click="addtocart(product._id)" :qty="1" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";
import { SfGallery, SfHeading, SfAddToCart } from "@storefront-ui/vue";
import { mapActions } from "vuex";
export default {
  name: "Product",
  data() {
    return {
      product: [],
      productimages: [],
      galleryKey: 0,
    };
  },
  components: {
    SfGallery,
    SfHeading,
    SfAddToCart,
  },
  methods: {
    ...mapActions(["addToCart"]),
    addtocart(id) {
      this.addToCart(id);
    },
  },
  mounted() {
    fetch(
      `localhost:3000/products/details/${this.$route.params.productid}`
    )
      .then((response) => response.json())
      .then((res) => (this.product = res[0]))
      .then(() => {
        if (this.product.details && this.product.details.images) {
          this.product.details.images.forEach((e) => {
            this.productimages.push({
              desktop: {
                url: e,
              },
              mobile: {
                url: e,
              },
              zoom: {
                url: e,
              },
              alt: this.product.name,
            });
          });
        } else {
          router.push({ name: "Home" });
        }
      })
      .then(() => {
        this.galleryKey += 1;
        this.$forceUpdate();
      });
  },
};
</script>
<style scoped>
.product {
  display: grid;
  grid-template-columns: 50% 50%;
}
@media screen and (max-width: 1420px) {
  .product {
    display: grid;
    grid-template-columns: 100%;
  }
}
.details {
  position: relative;
}
.details div {
  text-align: left;
}
.sf-price {
  margin-top: 1vh;
}
.cart-button {
  width: 80%;
  bottom: 0;
  right: 0;
  position: absolute;
}
</style>
