import { createStore } from "vuex";
import coahchesModule from "./modules/coaches/index.js";
import RequestsModule from "./modules/requests/index.js";
import authModule from "./modules/auth/index.js";

const store = createStore({
  modules: {
    coaches: coahchesModule,
    requests: RequestsModule,
    auth: authModule,
  },
  
 
});

export default store;
