<template>
  <div class="index">
    <div class="container">
      <div
        class="card"
        v-for="restaurant in $store.state.restaurants"
        :key="restaurant.id"
      >
        <div class="card-content">
          <router-link
            :to="{
              name: 'restaurant',
              params: { name: restaurant.name, id: restaurant.id },
            }"
          >
            <h2 class="indigo-text">{{ restaurant.name }}</h2>
          </router-link>
          <div class="hold-em">
            <p class="chip loca">Location: {{ restaurant.city }}</p>
            <!-- <p class="chip desc">Description: {{ restaurant.description }}</p> -->
          </div>
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
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}
</style>
