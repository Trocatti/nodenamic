<template>
  <div id="schemas">
    <!-- EDITOR -->
    <Editor />
    <!-- END EDITOR -->
  </div>
</template>

<script>
import Mixin from '@/assets/mixins/CreateMixin'
import { mapState } from 'vuex'

export default {
  name: 'schemas',
  mixins: [Mixin],
  computed: {
    ...mapState({
      _id: state => state.endpoints.schema
    })
  },
  watch: {
    jsonData: function() {
      const object = { key: `${this.$options.name}`, value: this.jsonData }
      this.updateObjectJson(object)
    }
  },
}
</script>
