import { BCol } from "bootstrap-vue";

export default {
  name: "fieldBuilder",
  components: {
    CommonField: () =>
      import(
        /* webpackChunkName: "fieldBuilder_commonField" */ "./commonField/CommonField.vue"
      ),
    ValidationField: () =>
      import(
        /* webpackChunkName: "fieldBuilder_validationField" */ "./validationField/ValidationField.vue"
      ),
    BCol
  },
  props: {
    model: {
      type: Object
    },
    fieldProperties: {
      type: Object,
      required: true
    }
  }
};
