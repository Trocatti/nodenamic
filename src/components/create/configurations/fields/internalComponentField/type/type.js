import {
  BButton,
  BFormGroup,
  BFormSelect,
  BCol,
  BInputGroup,
  BInputGroupAppend,
  BFormInvalidFeedback,
} from "bootstrap-vue";
import {
  ValidationProvider
} from 'vee-validate';
import Icon from "vue-awesome/components/Icon";
import "vue-awesome/icons/pencil-alt";

export default {
  name: "type",
  components: {
    BButton,
    BFormGroup,
    BFormSelect,
    BCol,
    BInputGroup,
    BInputGroupAppend,
    ValidationProvider,
    BFormInvalidFeedback,
    "v-icon": Icon,
  },
  props: {
    model: {
      type: Object
    },
    fieldProperties: {
      type: Object,
    },
  },
  computed: {
    validationName() {
      let name = this.fieldProperties.validations ? this.fieldProperties.validations.name : "";
      if (!name) {
        name = this.fieldProperties.container.label;
      }
      return name;
    }
  },  
  methods: {
    showArrayDefinitionModal() {
      this.$emit("showArrayDefinitionModal");
    }
  }
};
