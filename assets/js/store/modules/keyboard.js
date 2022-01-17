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

    async fetchKeyboardById(_, keebId) {
      const url = `http://localhost/php-api/api/keyboard/view.php?id=${keebId}/`;
      try {
        const resById = await axios.get(url);
        return resById;
      } catch (err) {
        console.log(err);
      }
    },

    async updateKeyboard(_, payload) {
      const url = "http://localhost/php-api/api/keyboard/update.php";
      try {
        const {
          keebId,
          keebName,
          keebBrand,
          keebPrice,
          keebSwitch,
          keebKeycaps,
          keebConnection,
        } = payload;
        const resUpdate = await axios.put(url, {
          id: keebId,
          keeb_name: keebName,
          keeb_brand: keebBrand,
          keeb_price: keebPrice,
          keeb_switch: keebSwitch,
          keeb_keycaps: keebKeycaps,
          keeb_connection: keebConnection,
        });
        return resUpdate;
      } catch (err) {
        console.log(err);
      }
    },

    async storeKeyboard(_, payload) {
      const url = "http://localhost/php-api/api/keyboard/post.php";
      try {
        const {
          keebName,
          keebBrand,
          keebPrice,
          keebSwitch,
          keebKeycaps,
          keebConnection,
        } = payload;
        const resStore = await axios.post(url, {
          keeb_name: keebName,
          keeb_brand: keebBrand,
          keeb_price: keebPrice,
          keeb_switch: keebSwitch,
          keeb_keycaps: keebKeycaps,
          keeb_connection: keebConnection,
        });
        return resStore;
      } catch (err) {
        console.log(err);
      }
    },

    async deleteKeyboard(_, keebId) {
      const url = "http://localhost/php-api/api/delete.php";
      try {
        await axios.delete(url, {
          id: 3,
        });
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
