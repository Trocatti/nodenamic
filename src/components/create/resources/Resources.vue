<template>
  <div id="resources">
    <Editor />
  </div>
</template>

<script>
import Mixin from '../../../assets/mixins/CreateMixin'
import { mapState } from 'vuex'
export default {
  name: 'resources',
  mixins: [Mixin],
  computed: {
    ...mapState({
      _id: state => state.endpoints.resource
    })
  },
  watch: {
    jsonData: function() {
      const object = { key: `${this.$options.name}`, value: this.jsonData }
      this.updateObjectJson(object)
    }
  }
}
</script>

