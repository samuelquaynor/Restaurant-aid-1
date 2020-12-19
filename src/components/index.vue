<template>
    <div class="container">
        <div class="row gutters-sm">
            <div class="col-lg-4 col-sm-12 col-md-4" v-for="restaurant in $store.state.restaurants" :key="restaurant.id">
                <div class="card">
                    <router-link
                    tag="a"
                    :to="{
                            name: 'restaurant',
                            params: { name: restaurant.name, id: restaurant.id },
                        }"
                    >
                    <img
                    :src="banner + restaurant.banner"
                    class="card-img-top res-img"
                    :alt="restaurant.name + ' banner'"
                    />
                    <img
                        class="logo img-thumbnail img"
                        :src="banner + restaurant.logo"
                        :alt="restaurant.name + ' logo'"
                    />
                    <div class="card-body">
                        <h6 class="mb-0">{{ restaurant.name }}</h6>
                        <p class="text-muted text-sm mb-0">Location: {{ restaurant.city }}</p>
                        <p v-if="restaurant.delivery" class="mb-0 text-muted text-sm">Delivery: Yes</p>
                        <p v-else class="mb-0 text-muted text-sm">Delivery: No</p>
                    </div>
                    </router-link>
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
    a, a:hover{
        text-decoration: none!important;
        color: rgba(0, 0, 0, 0.877)!important;
    }

    
    .res-img{
        top: 0;
        left: 0;
        width: 100%;
        height: 200px;
        background-size: cover;
        z-index: 0;
        background-position: 50% center;
        background-repeat: no-repeat;
    }

    .img-thumbnail{
        border-radius: 0.70rem;

    }

    .logo{
        width: 20%;
        top: 100px;
        left: 15px;
        position: absolute;
        z-index: 1;
    }

    .card{
        border: none!important;
    }

    .card-body{
        padding:10px 0!important;
    }
</style>
