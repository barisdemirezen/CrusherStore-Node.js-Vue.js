<template>
  <div>
    <SfHero
      :settings="{
        perView: 1,
        focusAt: 'center',
        autoplay: 3000,
        hoverpause: true,
        type: 'carousel',
      }"
    >
      <SfHeroItem
        image="https://s3b.cashify.in/gpro/uploads/2020/11/26090801/top-20-biggest-selling-devices-2020.jpg"
      />
      <SfHeroItem
        image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/m1-macbook-pro-lead-1612882959.jpg"
      />
      <SfHeroItem
        image="https://cdn.vox-cdn.com/thumbor/XhwwNSg95PE6wz5Kskgx3qPcePg=/0x27:2672x1363/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21948716/Screen_Shot_2020_10_09_at_12.36.02_PM.png"
      />
    </SfHero>
  </div>
</template>

<script>
import { SfHero } from "@storefront-ui/vue";

export default {
  name: "HomeSlider",
  props: {},
  components: {
    SfHero,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 100%;
}
</style>
