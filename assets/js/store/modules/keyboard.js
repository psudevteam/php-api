export const keyboard = {
  state: () => ({
    keyboard: [],
  }),

  mutations: {
    SET_KEYBOARD(state, val) {
      state.keyboard = val;
    },
  },

  getters: {
    getKeyboard(state) {
      return state.keyboard;
    },
  },

  actions: {
    async fetchKeyboard({ commit }) {
      const url = "http://localhost/php-api/api/keyboard/get.php";
      try {
        const res = await axios.get(url);
        commit("SET_KEYBOARD", res.data);
        return res;
      } catch (err) {
        console.log(err);
      }
    },
  },
};

export default {
  keyboard,
  namespaced: true,
};
