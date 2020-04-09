import {
  Getters,
  Mutations,
  Actions,
  Module,
  createMapper
} from "vuex-smart-module";
import UserService from "@/app/Services/UserService";
import { UserData } from "@/app/types";
const USER = new UserService();

type MutationType = {
  type: string;
  value: string | number;
};
class UserState {
  userData: UserData = {
    firstName: "",
    lastName: "",
    position: "",
    birthDate: ""
  };
}

class UserGetters extends Getters<UserState> {
  get AllUserData() {
    return this.state.userData;
  }
  getBaseUserState(key: string): string | number {
    return this.state.userData[key];
  }
}
class UserMutations extends Mutations<UserState> {
  setBaseUserState(data: MutationType): void {
    this.state.userData[data.type] = data.value;
  }
}
class UserActions extends Actions<
  UserState,
  UserGetters,
  UserMutations,
  UserActions
> {
  saveUser() {
    USER.saveUserData(this.state.userData);
  }
}

export const User = new Module({
  state: UserState,
  getters: UserGetters,
  mutations: UserMutations,
  actions: UserActions
});

export const UserMapper = createMapper(User);
