<template>
  <div class="d-flex justify-content-center align-items-center mt-2">
    <b-button variant="primary" @click="copyValue">
      <span class="code mr-2">Copiar</span>
      <v-icon name="regular/copy" />
    </b-button>
  </div>
</template>

<script>
import Vue from "vue";
import { BButton, ToastPlugin } from "bootstrap-vue";
import Icon from "vue-awesome/components/Icon";
import "vue-awesome/icons/regular/copy";

Vue.use(ToastPlugin);

export default {
  name: "copy",
  components: {
    "v-icon": Icon,
    BButton
  },
  props: {
    values: {
      type: Object,
      required: true
    }
  },
  methods: {
    copyValue() {
      this.$emit("updateReferenceField", this.values);
      this.$emit("closeModal");
    }
  }
};
</script>

<style scoped lang="scss">
.text-red {
  color: var(--danger);
  font-size: 1.25em;
  cursor: pointer;
}
</style>
