import Vue from "vue";
import {
  BRow,
  BCol,
  BModal,
  BButton,
  BCollapse,
  BCard,
  BCardHeader,
  BCardBody,
  BCardText,
  VBToggle,
  BForm,
  BFormGroup,
  BFormInput,
  BFormSelect,
  BFormInvalidFeedback,
  BFormRadioGroup,
  ToastPlugin
} from "bootstrap-vue";
import {
  ValidationProvider,
  localize,
  extend,
  ValidationObserver
} from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import ptBR from "vee-validate/dist/locale/pt_BR.json";
import Icon from "vue-awesome/components/Icon";
import mixin from "../../../../assets/mixins/GeneralMixin";

// Importação das regras de validação
// eslint-disable-next-line
for (const rule in rules) {
  extend(rule, rules[rule]);
}

// Definição do idioma das mensagems das validações
localize("pt_BR", ptBR);

Vue.use(ToastPlugin);

export default {
  name: "schemas",
  mixins: [mixin],
  components: {
    BRow,
    BCol,
    BModal,
    BButton,
    BCollapse,
    BCard,
    BCardHeader,
    BCardBody,
    BCardText,
    ValidationProvider,
    ValidationObserver,
    BForm,
    BFormGroup,
    BFormInput,
    BFormSelect,
    BFormInvalidFeedback,
    BFormRadioGroup,
    "v-icon": Icon
  },
  directives: {
    "b-toggle": VBToggle
  },
  props: {
    showModal: {
      type: Boolean,
      required: true
    },
    arrayDefinitions: {
      type: Object,
      required: true
    },
    openedByInsert: {
      type: Boolean
    }
  },
  computed: {
    showSelf: {
      get() {
        return this.showModal;
      },
      set(visibility) {
        this.$emit("showSelf", visibility);
      }
    }
  },
  methods: {
    onChange() {
      if (
        this.arrayDefinitions.type === "Array" ||
        this.arrayDefinitions.type === "Object"
      ) {
        this.$bvToast.toast(
          "Para os campos Array ou Object as definições de seus filhos, deverá ser feita na edição do endpoint.",
          {
            title: "Atenção!",
            variant: "warning",
            toaster: "b-toaster-top-center",
            solid: true
          }
        );
      }
    },
    async saveDefinitions() {
      const valid = await this.validateForm();
      if (valid) {
        this.$emit("showSelf", false);

        if (this.openedByInsert) {
          this.$emit("onCreateEditField");
        }
      } else {
        this.$bvToast.toast(
          "Não foi possível executar a ação solicitada, verifique os campos preenchidos.",
          {
            title: "Error!",
            variant: "danger",
            toaster: "b-toaster-bottom-left",
            solid: true
          }
        );
      }
    },
    closeModal() {
      this.restoreForm();
      this.$emit("showSelf", false);
    },
    validateForm() {
      return this.$refs.arrayDefinitionsValidationObserver.validate();
    },
    restoreForm() {
      Object.keys(this.arrayDefinitions).forEach(
        key => (this.arrayDefinitions[key] = this.cleanArrayDefinitions[key])
      );
    }
  },
  mounted() {
    requestAnimationFrame(() => {
      this.validateForm();
    });
  },
  data() {
    return {
      cleanArrayDefinitions: this.copyObject(this.arrayDefinitions),
      configuration: {
        uniqueItems: [
          { text: "Sim", value: true },
          { text: "Não", value: false }
        ],
        additionalItems: [
          { text: "Sim", value: true },
          { text: "Não", value: false }
        ],
        type: [
          { text: "Selecione...", value: null },
          { text: "Array", value: "Array" },
          { text: "Boolean", value: "Boolean" },
          { text: "Integer", value: "Integer" },
          { text: "Number", value: "Number" },
          { text: "Object", value: "Object" },
          { text: "String", value: "String" }
        ]
      }
    };
  }
};
