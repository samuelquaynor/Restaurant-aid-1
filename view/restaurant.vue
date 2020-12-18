<template>
  <div class="restaurant">
    <div class="banner bg-image" :style="{ backgroundImage: `url(${banner}` }"></div>
    <div class v-if="restaurant">
      <h2 class>{{ restaurant.name }}</h2>
      <!-- <router-link class tag="p" to="/">
        <span>Back</span>
      </router-link>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "restaurant",
  async created() {
    await this.$store.dispatch("getRestaurants");
  },
  computed: {
    restaurant() {
      return this.$store.state.restaurants.find(res => {
        return res.id === this.$route.params.id;
      });
    },
    banner() {
      let myRes = this.$store.state.restaurants.find(res => {
        return res.id === this.$route.params.id;
      });

      return "https://storage.googleapis.com/heny.app/" + myRes.banner;
    }
  },
  methods: {}
  /*watch: {
    "$route.params.id": {
      handler(val) {
        this.$store.dispatch("getRestaurant", val);
      },
      immediate: true,
    },
  },*/
};
</script>

<style>
p.router-link-active {
  width: fit-content;
  margin: 0 auto;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.2;
  background: #05386b;
  color: #fff;
  padding: 0.5rem;
  border-radius: 40%;
}
</style>
