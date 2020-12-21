<template>
  <div class="restaurant">
    <div
      class="banner-region banner bg-image"
      :style="{ backgroundImage: `url(${myBanner}${restaurant.banner})` }"
    >
      <div class="container" v-if="restaurant">
        <div class="row">
          <div class="col-lg-9">
            <h2 class>{{ restaurant.name }}</h2>
            <h6>{{ restaurant.description}}</h6>
            <p>{{restaurant.address}}, {{ restaurant.city}}</p>
            <p v-if="restaurant.delivery && restaurant.pickup">
              <span>Delivery</span>
              <span>Pickup</span>
            </p>
          </div>
        </div>

        <!-- <router-link class tag="p" to="/">
        <span>Back</span>
        </router-link>-->
      </div>
    </div>
    <div class="body">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-sm-12 col-md-4" v-for="meal in restaurant.meals" :key="meal.id">
            <div class="card">
              <img
                :src="myBanner + meal.image"
                class="card-img-top res-img"
                :alt="meal.name + 'image'"
              />
              <div class="card-body">
                <h6 class="card-title mb-0">{{ meal.name }}</h6>
                <p class="card-text">{{meal.description}}</p>
                <div class="row">
                  <div class="col-sm-6">
                    <span>¢{{ meal.price }}</span>
                  </div>
                  <div class="col-sm-6 txt-btn">
                    <button>
                      <span>ADD TO PLATE</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "restaurant",
  //
  async created() {
    await this.$store.dispatch("getRestaurants");
    //
  },
  computed: {
    restaurant() {
      return this.$store.state.restaurants.find(res => {
        return res.id === this.$route.params.id;
      });
    },
    myBanner() {
      return "https://storage.googleapis.com/heny.app/";
    }
  },
  methods: {},
  data() {
    return {
      // banner: this.$store.restaurant.banner
    };
  }
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

.banner.bg-image {
  background-size: cover;

  padding: 10vh 0;

  background-position: center;
  /* text-align: center; */
}

.banner.bg-image h2 {
  font-weight: 300;
  color: #fff;
}

.body {
  margin: 0.5em;
}
.card {
  margin: 0.5rem;
}
.card-text {
  font-size: 0.8em;
}
</style>
