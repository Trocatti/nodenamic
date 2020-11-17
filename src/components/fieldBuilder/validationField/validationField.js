import {
  BButton,
  BFormGroup,
  BFormInput,
  BFormSelect,
  BFormInvalidFeedback,
  BFormTextarea,
  BFormRadioGroup,
  BInputGroup,
  BInputGroupAppend
} from "bootstrap-vue";
import { ValidationProvider } from "vee-validate";

export default {
  name: "fieldBuilder",
  components: {
    TooltipLabel: () =>
      import(
        /* webpackChunkName: "fieldBuilder_tooltipLabel" */ "../tooltipLabel/TooltipLabel.vue"
      ),
    BFormGroup,
    BFormSelect,
    BFormInput,
    BButton,
    BFormInvalidFeedback,
    ValidationProvider,
    BFormTextarea,
    BFormRadioGroup,
    BInputGroup,
    BInputGroupAppend
  },
  props: {
    model: {
      type: Object
    },
    fieldProperties: {
      type: Object,
      required: true
    }
  },
  computed: {
    validationName() {
      let name = this.fieldProperties.validations
        ? this.fieldProperties.validations.name
        : "";
      if (!name) {
        name = this.fieldProperties.container.label;
      }
      return name;
    }
  }
};
