import { Getters, Mutations, Module, createMapper } from "vuex-smart-module";

class ModalState {
  type = "";
}

class ModalsGetters extends Getters<ModalState> {
  get ModalType(): string {
    return this.state.type;
  }
}
class ModalsMutations extends Mutations<ModalState> {
  setModalType(val: string): void {
    this.state.type = val;
  }
}
export const Modals = new Module({
  state: ModalState,
  getters: ModalsGetters,
  mutations: ModalsMutations
});

export const ModalMapper = createMapper(Modals);
