import Vue from "vue";
import Vuex from "vuex";
import gql from "graphql-tag";
import apollo from "./apollo";

Vue.use(Vuex);

const state = {
  //   languageIds: [],
  restaurants: [],
  banners: [],
  restaurant: null,
  meals: [],
};

const mutations = {
  setRestaurants(state, restaurants) {
    state.restaurants = restaurants;
  },
  setRestaurant(state, restaurant) {
    state.restaurant = restaurant;
  },
  setBanners(state, banners) {
    for (let i = 0; i < banners.length; i++) {
      let ans = Object.values(banners[i]);
      if (ans[1] == "Restaurant") {
        let neww = ans.shift();
        let appended = "https://storage.googleapis.com/heny.app/" + neww;
        state.banners.push(appended);
      }
    }
  },
};

const actions = {
  async getRestaurants({ commit }) {
    const response = await apollo.query({
      query: gql`
        {
          restaurants {
            data {
              name
              id
              description
              city
              logo
              banner
              delivery
              tagline
              address
              city
              pickup
              delivery
              meals {
                id
                name
                image
                image2
                price
                description
                delivery_price
              }
            }
          }
        }
      `,
    });
    const restaurants = response.data.restaurants.data;
    commit("setRestaurants", restaurants);
  },

  async getRestaurant({ commit }, id) {
    const query = gql`
      {
        restaurant(id: id) {
          name
          id
        }
      }
    `;
    const variables = { id: id };
    const response = await apollo.query({ query, variables });
    commit("setRestaurant", { id, data: response.data.restaurant });
    console.log(response.data.restaurant);
  },
  async getBanners({ commit }) {
    const response = await apollo.query({
      query: gql`
        {
          restaurants {
            data {
              banner
            }
          }
        }
      `,
    });
    const banners = response.data.restaurants.data;
    commit("setBanners", banners);
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});
