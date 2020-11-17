import {
  BButton,
  BFormGroup,
  BCol,
  BInputGroup,
  BInputGroupAppend,
  BFormInvalidFeedback,
  BFormInput
} from "bootstrap-vue";
import { ValidationProvider } from "vee-validate";
import Icon from "vue-awesome/components/Icon";
import "vue-awesome/icons/search";
import "vue-awesome/icons/eraser";

export default {
  name: "type",
  components: {
    TooltipLabel: () =>
      import(
        /* webpackChunkName: "referenceField_tooltipLabel" */ "../../../../../fieldBuilder/tooltipLabel/TooltipLabel.vue"
      ),
    BButton,
    BFormGroup,
    BCol,
    BInputGroup,
    BInputGroupAppend,
    ValidationProvider,
    BFormInvalidFeedback,
    BFormInput,
    "v-icon": Icon
  },
  props: {
    model: {
      type: Object
    },
    fieldProperties: {
      type: Object
    }
  },
  methods: {
    showDefinitionModal() {
      this.$emit("showDefinitionModal");
    },
    cleanReferenceField() {
      this.$emit("cleanReferenceField");
    }
  }
};
