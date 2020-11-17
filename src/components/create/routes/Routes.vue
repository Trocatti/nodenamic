<template>
  <div id="routes">
    <Editor />
  </div>
</template>

<script>
import Mixin from "../../../assets/mixins/CreateMixin";
import { mapState } from "vuex";
export default {
  name: "routes",
  mixins: [Mixin],
  computed: {
    ...mapState({
      _id: state => state.endpoints.route
    })
  },
  methods: {},
  watch: {
    jsonData: function() {
      const object = { key: `${this.$options.name}`, value: this.jsonData };
      this.updateObjectJson(object);      
    }
  }
};
</script>

