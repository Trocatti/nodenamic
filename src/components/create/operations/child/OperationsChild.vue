<template>
  <div id="operations">
    <Editor />
  </div>
</template>

<script>
import Mixin from '../../../../assets/mixins/CreateMixin'
import { mapState } from 'vuex'
export default {
  name: 'operations',
  mixins: [Mixin],
  computed: {
    ...mapState({
      _id: state => state.endpoints.child.operation
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

