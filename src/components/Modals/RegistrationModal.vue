<template>
  <div
    class="modal fade show"
    id="exampleModalCenter"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="$emit('close')"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="firstName">Имя</label>
            <input
              type="text"
              class="form-control"
              id="firstName"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              v-model.trim="firstName"
            />
            <small id="firstNameHelp" class="form-text text-muted"
              >We'll never share your email with anyone else.</small
            >
          </div>
          <div class="form-group">
            <label for="lastName">Фамилия</label>
            <input
              type="email"
              class="form-control"
              id="lastName"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              v-model.trim="lastName"
            />
            <small id="lastNameHelp" class="form-text text-muted"
              >We'll never share your email with anyone else.</small
            >
          </div>
          <div class="form-group">
            <label for="position">Ваша должность</label>
            <input
              type="email"
              class="form-control"
              id="position"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              v-model.trim="position"
            />
            <small id="positionHelp" class="form-text text-muted"
              >We'll never share your email with anyone else.</small
            >
          </div>
          <div class="form-group row">
            <label for="example-date-input" class="col-2 col-form-label"
              >Дата рождения</label
            >
            <div class="col-10">
              <input
                class="form-control"
                type="date"
                value="2011-08-19"
                id="example-date-input"
                v-model="birthDate"
                @change="getNotification()"
              />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            @click="getNotification()"
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
          <button @click="saveUser()" type="button" class="btn btn-primary">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { UserMapper } from "../../store/modules/User";
import { BaseMapper } from "../../store/Base";
import { successNotify, errorNotify } from "../../app/Notifications";

const Mappers = Vue.extend({
  computed: {
    ...UserMapper.mapGetters(["getBaseUserState"])
  },
  methods: {
    ...UserMapper.mapMutations(["setBaseUserState"]),
    ...UserMapper.mapActions(["saveUser"]),
    ...BaseMapper.mapActions(["sendDate"])
  }
});
@Component
export default class RegistrationModal extends Mappers {
  get firstName() {
    return this.getBaseUserState("firstName");
  }
  set firstName(value) {
    this.setBaseUserState({ type: "firstName", value: value });
  }
  get lastName() {
    return this.getBaseUserState("lastName");
  }
  set lastName(value) {
    this.setBaseUserState({ type: "lastName", value: value });
  }
  get position() {
    return this.getBaseUserState("position");
  }
  set position(value) {
    this.setBaseUserState({ type: "position", value: value });
  }
  get birthDate() {
    return this.getBaseUserState("birthDate");
  }
  set birthDate(value) {
    this.setBaseUserState({ type: "birthDate", value: value });
  }
  getNotification() {
    this.sendDate()
      .then(data => {
        successNotify("interesting fact", data.data);
      })
      .catch(() => {
        errorNotify("Warning", "No information on this date");
      });
  }
}
</script>

<style scoped lang="scss">
.modal {
  display: block;
  & .modal-content {
    border: 2px solid #17a2b8;
    border-radius: 5px;
  }
}
</style>
