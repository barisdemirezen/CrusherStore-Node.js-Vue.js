<template>
  <div>
    <SfNotification
      :visible="addedCartNotification"
      message="Added to cart"
      type="success"
    />
    <SfNotification
      :visible="removedCartNotification"
      message="Removed from cart"
      type="warning"
    />
  </div>
</template>

<script>
import { SfNotification } from "@storefront-ui/vue";
import { mapGetters } from "vuex";
export default {
  name: "Notifications",
  props: {},
  components: {
    SfNotification,
  },
  computed: {
    ...mapGetters(["addedCartNotification", "removedCartNotification"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sf-notification {
  position: fixed;
  z-index: 100;
  max-width: 600px;
  padding: 20px 40px;
  bottom: 5%;
  right: 5%;
}
.heart-icon {
  margin-right: 10px;
}
</style>
