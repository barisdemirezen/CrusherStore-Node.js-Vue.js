<template>
  <div>
    <SfCallToAction
      title="Subscribe to Newsletters"
      buttonText="Subscribe"
      description="Be aware of upcoming sales and events. Receive gifts and special offers!"
      background="#114125"
    />
  </div>
</template>
<script>
import { SfCallToAction } from "@storefront-ui/vue";
export default {
  name: "CallToAction",
  components: {
    SfCallToAction,
  },
};
</script>
<style></style>
