<template>
  <div class="restaurant">
    <div v-if="restaurant">
      <h2>{{ restaurant.name }}</h2>
    </div>
    <router-link to="/">
      <h4>back</h4>
    </router-link>
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
      return this.$store.state.restaurants.find((res) => {
        return res.id === this.$route.params.id;
      });
    },
  },
  methods: {},
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
h4 {
  text-align: center;
}
</style>
