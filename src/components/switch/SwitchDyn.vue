<template>
  <span class="switch switch-sm">
    <input
      type="checkbox"
      class="switch"
      v-model="self"
      :value="self"
      :id="'input-' + name"
      @change="onChange"
    />
    <label :for="'input-' + name">
      <span v-show="self">Sim</span>
      <span v-show="!self">Não</span>
    </label>
    <slot></slot>
  </span>
</template>

<style src="./switch.scss" lang="scss" scoped></style>

<script>
export default {
  name: "switchDyn",
  props: ["model", "name"],
  methods: {
    onChange() {
      this.$emit("event", this.self);
    }
  },
  data() {
    return {
      self: {}
    };
  },
  created() {
    this.self = this.model;
  }
};
</script>
