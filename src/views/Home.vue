<template
  ><div>
    <div class="button-block">
      <button type="button" class="btn btn-outline-info" @click="openModal()">
        Регистрация
      </button>
      <button type="button" class="btn btn-outline-info">Создать доску</button>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { ModalMapper } from "@/store/modules/Modals";
const Mappers = Vue.extend({
  computed: {
    ...ModalMapper.mapGetters(["ModalType"])
  },
  methods: {
    ...ModalMapper.mapMutations(["setModalType"])
  }
});
@Component
export default class Home extends Mappers {
  openModal() {
    this.setModalType("Registration");
  }
}
</script>

<style scoped lang="scss">
.button-block {
  width: 320px;
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  border: 2px solid #17a2b8;
  border-radius: 5px;
  button {
    margin: 15px;
  }
}
</style>
