import Vue from "vue";
import Vuex from "vuex";
import gql from "graphql-tag";
import apollo from "./apollo";

Vue.use(Vuex);

const state = {
  //   languageIds: [],
  restaurants: [],
  restaurant: null,
};

const mutations = {
  setRestaurants(state, restaurants) {
    state.restaurants = restaurants;
  },
  setRestaurant(state, restaurant) {
    state.restaurant = restaurant;
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
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});
