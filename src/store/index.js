import { createStore } from "vuex";
import coahchesModule from "./modules/coaches/index.js";
import RequestsModule from "./modules/requests/index.js";

const store = createStore({
  modules: {
    coaches: coahchesModule,
    requests: RequestsModule,
  },
});

export default store;
