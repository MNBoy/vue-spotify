import { createStore } from "vuex";
import PlayList from "./PlayList/index";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    playlist: PlayList,
  },
});
