import Vue from "vue";
import Notifications from "vue-notification";

Vue.use(Notifications);
/**
 *
 * @param {string}title
 * @param {string}text
 */
export const successNotify = (title: string, text: string): void => {
  Vue.notify({
    group: "app",
    text: text,
    type: "success",
    title: title
  });
};

/**
 *
 * @param {string}title
 * @param {string}text
 */
export const errorNotify = (title: string, text: string): void => {
  Vue.notify({
    group: "app",
    text: text,
    type: "error",
    title: title
  });
};
