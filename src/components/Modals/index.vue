<template>
  <div class="popup__veil" id="parent_popup" v-if="modalShow">
    <RegistrationModal
      v-if="modalShow === 'Registration'"
      @close="modalShow = ''"
    />
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { ModalMapper } from "../../store/modules/Modals";
const Mappers = Vue.extend({
  computed: {
    ...ModalMapper.mapGetters(["ModalType"])
  },
  methods: {
    ...ModalMapper.mapMutations(["setModalType"])
  }
});
@Component({
  components: { RegistrationModal: () => import("./RegistrationModal") }
})
export default class Index extends Mappers {
  get modalShow() {
    return this.ModalType;
  }

  set modalShow(val) {
    this.setModalType(val);
  }
}
</script>

<style scoped lang="scss">
.popup__veil {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.44);
  z-index: 999;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
</style>
