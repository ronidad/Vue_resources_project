import { createStore } from "vuex";
import coahchesModule from "./modules/coaches/index.js";

const store = createStore({
  modules: {
    coaches: coahchesModule,
  },
});

export default store;
