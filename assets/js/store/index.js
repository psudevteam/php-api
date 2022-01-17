const { createStore } = Vuex;
import { keyboard } from '../store/modules/keyboard.js'
import { keebSwitch } from '../store/modules/switch.js'

export const store = createStore({
   modules: {
     key :keyboard,
     swi :keebSwitch
   }
});

