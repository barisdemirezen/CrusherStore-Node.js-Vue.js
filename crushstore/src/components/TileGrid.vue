<template>
  <div>
    <div class="tile-grid">
      <SfTile
        title="Phones"
        :background="{
          mobile:
            'https://media.wired.com/photos/5bcea2642eea7906bba84c67/master/w_2560%2Cc_limit/iphonexr.jpg',
          desktop:
            'https://media.wired.com/photos/5bcea2642eea7906bba84c67/master/w_2560%2Cc_limit/iphonexr.jpg',
        }"
        link=""
      />
      <SfTile
        title="Game Consoles"
        :background="{
          mobile:
            'https://i2.cnnturk.com/i/cnnturk/75/400x512/5c37157c61361f1c784aff1a.jpg',
          desktop:
            'https://i2.cnnturk.com/i/cnnturk/75/400x512/5c37157c61361f1c784aff1a.jpg',
        }"
        link=""
      />
      <SfTile
        title="Keyboards"
        :background="{
          mobile:
            'https://www.incehesap.com/resim/urun/202007/5f0c9cd6c42aa5.14390253_khoqmjpeniflg_500.jpg',
          desktop:
            'https://www.incehesap.com/resim/urun/202007/5f0c9cd6c42aa5.14390253_khoqmjpeniflg_500.jpg',
        }"
        link=""
      />
      <SfTile
        title="Gaming Chairs"
        :background="{
          mobile:
            'https://cdn.shopify.com/s/files/1/2360/6457/t/291/assets/home-about-min.jpg?v=15469314744188955009',
          desktop:
            'https://cdn.shopify.com/s/files/1/2360/6457/t/291/assets/home-about-min.jpg?v=15469314744188955009',
        }"
        link=""
      />
    </div>
  </div>
</template>
<script>
import { SfTile } from "@storefront-ui/vue";
export default {
  name: "TileGrid",
  components: {
    SfTile,
  },
};
</script>
<style scoped>
.tile-grid {
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: space-between;
}
.sf-tile {
  background-size: cover !important;
  background-position: center !important;
}
</style>
