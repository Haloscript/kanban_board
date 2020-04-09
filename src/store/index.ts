import Vue from "vue";
import * as Vuex from "vuex";
import { createStore } from "vuex-smart-module";
import { Base } from "./Base";

Vue.use(Vuex);

export const store = createStore(Base, {
  strict: process.env.NODE_ENV !== "production"
});
