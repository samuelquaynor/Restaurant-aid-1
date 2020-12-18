<template>
  <div class="index">
    <div class="container">
      <div class="card" v-for="restaurant in $store.state.restaurants" :key="restaurant.id">
        <img :src="banner + restaurant.banner" class="card-img-top" alt="..." />
        <div class="card-body">
          <h2 class="card-title">
            <router-link
              tag="h2"
              :to="{
                name: 'restaurant',
                params: { name: restaurant.name, id: restaurant.id },
              }"
            >{{ restaurant.name }}</router-link>
          </h2>

          <!-- <div class="hold-em"> -->
          <span class="card-text">Location: {{ restaurant.city }}</span>
          <span v-if="restaurant.delivery" class="card-text">Delivery: Yes</span>
          <span v-else class="card-text">Delivery: No</span>
          <!-- <p class="chip desc">Description: {{ restaurant.description }}</p> -->
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  components: {},
  async created() {
    await this.$store.dispatch("getRestaurants");
    await this.$store.dispatch("getBanners");
  },
  computed: {
    banner() {
      return "https://storage.googleapis.com/heny.app/";
    }
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.index {
  height: 100%;
}
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  margin-top: 3rem;
}

.container .card {
  /* background: #5cdb95; */
  text-align: center;
  height: 100%;
  padding: 0.5rem;
}

.container .card-body h2.card-title {
  color: #5cdb95;
}

.container .card-body h2:hover,
.container .card-body h2.router-link-active,
.container .card-body h2.router-link-exact-active {
  text-decoration: none;
  color: #05386b;
}

.container .card-body .card-text {
  background: #05386b;
  color: #fff;
  padding: 0.3rem;
  border-radius: 20px;
  margin: 0.2rem;
}
</style>
