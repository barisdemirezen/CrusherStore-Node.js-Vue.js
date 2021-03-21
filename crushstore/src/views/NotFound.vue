<template>
  <div>
    <div class="notfound">
      <img
        src="https://www.artzstudio.com/wp-content/uploads/2020/05/404-error-not-found-page-lost-1024x788.png"
      />
      <SfButton @click="routehome" class="color-primary notfound-button">
        HOMEPAGE
      </SfButton>
    </div>
  </div>
</template>
<script>
import { SfButton } from "@storefront-ui/vue";
import router from "../router";
export default {
  name: "NotFound",
  components: {
    SfButton,
  },
  methods: {
    routehome() {
      router.push({ name: "Home" });
    },
  },
};
</script>
<style scoped>
.notfound {
  display: grid;
  align-items: center;
  justify-content: center;
}
.notfound img {
  width: 60%;
  margin: auto;
  animation: shake 1s linear infinite alternate;
  transition: 0.2s ease;
}

.notfound-button {
  margin: auto;
}

@keyframes shake {
  from {
    transform: rotate(5deg);
  }
  to {
    transform: rotate(-5deg);
  }
}
</style>
