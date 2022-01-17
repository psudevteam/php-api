export const keebSwitch = {
  state: () => ({
    switch: [],
  }),

  mutations: {
    SET_SWITCH(state, val) {
      state.switch = val;
    },
  },

  getters: {
    getSwitch(state) {
      return state.switch;
    },
  },

  actions: {
    async fetchSwitch({ commit }) {
      const url = "http://localhost/php-api/api/switch/get.php";
      try {
        const res = await axios.get(url);
        commit("SET_SWITCH", res.data);
        return res;
      } catch (err) {
        console.log(err);
      }
    },
  },
};

export default {
  keebSwitch,
  namespaced: true,
};
