import {
  BButton,
  BFormGroup,
  BFormInput,
  BFormSelect,
  BFormTextarea,
  BFormRadioGroup,
  BInputGroup,
  BInputGroupAppend,
} from "bootstrap-vue";

export default {
  name: "commonField",
  components: {
    TooltipLabel: () =>
      import(
        /* webpackChunkName: "commonField_tooltipLabel" */ "../tooltipLabel/TooltipLabel.vue"
      ),
    BFormGroup,
    BFormSelect,
    BFormInput,
    BButton,
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
  }
};
