<template>
  <div class="restaurant">
    <div
      class="banner-region banner bg-image"
      :style="{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,1) 10%,
              rgba(255,255,255,0)) , url(${myBanner}${restaurant.banner})` }"
    >
      <div class="container" v-if="restaurant">
        <div class="row justify-content-end">
          <div class="col-lg-9 restaurant-details">
            <h2 class="restaurant-name">{{ restaurant.name }}</h2>
            <h6>{{ restaurant.description}}</h6>
            <p class="text-muted mb-0 ">{{restaurant.address}}, {{ restaurant.city}}</p>
            <p v-if="restaurant.delivery && restaurant.pickup">
              <span>Delivery </span>
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
      <div class="container con-list">
        <div class="row">
          <div class="col-lg-4 col-sm-12 col-md-4" v-for="meal in restaurant.meals" :key="meal.id">
            <div class="card">
              <img
                :src="myBanner + meal.image"
                class="card-img-top res-img-2"
                :alt="meal.name + 'image'"
              />
              <div class="card-body">
                <h6 class="card-title mb-0">{{ meal.name }}</h6>
                <p class="card-text text-muted text-sm">{{meal.description}}</p>
                <div class="row">
                    <div class="col-sm-6">
                        <span class="text-md mr 4">
                            <span>¢{{ meal.price }}</span>
                        </span>
                    </div>
                  <div class="col-sm-6 txt-btn">
                    <button class="btn btn-outline-secondary btn-sm">
                      <span class="plate">ADD TO PLATE</span>
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
  background-repeat: no-repeat;

  /* text-align: center; */
}

.banner.bg-image h2 {
  font-weight: 300;
  color: #fff;
}

.con-list {
    padding-top: 50px!important;
}

.res-img-2{
    height: 200px!important;
}

.btn-sm {
    border-radius: 0!important;
    border-width: 2px!important;
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

.restaurant-details{
    color: #fff;
}

.restaurant-details p{
    color: #a4a7a9!important;
}

.restaurant-details h2{
    font-size: 3rem;
    font-weight: 100!important;
}
.restaurant-details h6{
    margin-bottom: .25rem!important;
}
</style>
