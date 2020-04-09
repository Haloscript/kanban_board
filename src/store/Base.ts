import {
  Getters,
  Mutations,
  Actions,
  Module,
  Context,
  createMapper
} from "vuex-smart-module";
import { Store } from "vuex";
import BaseService from "@/app/Services/BaseService";
import { User } from "./modules/User";
import { Modals } from "./modules/Modals";

const BASESERVICE = new BaseService();

class BaseState {
  count = 1;
}

class BaseGetters extends Getters<BaseState> {}

class BaseMutation extends Mutations<BaseState> {}

class BaseActions extends Actions<
  BaseState,
  BaseGetters,
  BaseMutation,
  BaseActions
> {
  User!: Context<typeof User>;

  $init(store: Store<any>): void {
    this.User = User.context(store);
  }
  sendDate() {
    return new Promise((resolve, reject) => {
      BASESERVICE.checkDate(this.User.getters.AllUserData.birthDate)
        .then(res => {
          resolve(res);
        })
        .catch(error => reject(error));
    });
  }
}

export const Base = new Module({
  state: BaseState,
  getters: BaseGetters,
  mutations: BaseMutation,
  actions: BaseActions,
  modules: {
    User,
    Modals
  }
});
export const BaseMapper = createMapper(Base);
