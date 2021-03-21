<template>
  <div>
    <div class="story-outer-container">
      <div class="story-container">
        <a
          :href="'./product/' + item._id"
          v-for="(item, index) in newArrivals"
          :key="index"
        >
          <div class="story-box">
            <div class="story-outer-circle">
              <img class="story-circle" :src="item.image" />
            </div>
            <SfHeading :level="5" :title="item.name" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { SfHeading } from "@storefront-ui/vue";
import { mapGetters } from "vuex";
export default {
  name: "ProductStories",
  components: {
    SfHeading,
  },
  data() {
    return {
      items: [],
    };
  },
  computed: {
    ...mapGetters(["newArrivals"]),
  },
};
</script>
<style>
a {
  text-decoration: none;
}
.story-circle {
  border-radius: 100%;
  width: 4vw;
  height: 4vw;
  background: white;
  padding: 5px;
}
.story-box {
  width: 8vw;
  display: grid;
  place-items: center;
  text-align: center;
}
.story-box p {
  margin: 0;
}
.story-outer-circle {
  width: 5vw;
  height: 5vw;
  display: grid;
  place-items: center;
  border-radius: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 0, 189, 1) 10%,
    rgba(255, 145, 0, 1) 95%
  );
  margin: auto;
}
.story-container {
  width: full;
  margin: 0;
  display: inline-flex;
  align-items: baseline;
  padding: 15px 0px;
}
.story-outer-container {
  overflow: auto;
}
</style>
