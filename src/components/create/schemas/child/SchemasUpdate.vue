<template>
  <div id="schemas">
    <Editor />
  </div>
</template>

<script>
import Mixin from '../../../../assets/mixins/CreateMixin'
import { mapState } from 'vuex'
export default {
  name: 'schemas',
  mixins: [Mixin],
  computed: {
    ...mapState({
      _id: state => state.endpoints.child.schema.update
    })
  },
  watch: {
    jsonData: function() {
      const object = { key: `${this.$options.name}_update`, value: this.jsonData }
      this.updateObjectJson(object)
    }
  }
}
</script>

