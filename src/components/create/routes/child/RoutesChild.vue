<template>
  <div id="routes" ref="routes_child">
    <Editor />
  </div>
</template>

<script>
import Mixin from '../../../../assets/mixins/CreateMixin'
import { mapState } from 'vuex'
export default {
  name: 'routes',
  mixins: [Mixin],
  computed: {
    ...mapState({
      _id: state => state.endpoints.child.route
    })
  },
  watch: {
    jsonData: function() {
      const object = { key: `${this.$options.name}_child`, value: this.jsonData }
      this.updateObjectJson(object)
    }
  }
}
</script>

