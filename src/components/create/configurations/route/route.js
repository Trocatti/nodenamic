import Vue from "vue";
import { mapState } from "vuex";
import { vueTopprogress } from "vue-top-progress";
import {
  BButton,
  BForm,
  BFormCheckbox,
  BFormGroup,
  BFormInput,
  BFormSelect,
  ToastPlugin,
  BFormInvalidFeedback,
  BNav,
  BNavItem,
  BNavItemDropdown,
  BDropdownItem
} from "bootstrap-vue";
import {
  ValidationProvider,
  localize,
  extend,
  ValidationObserver
} from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import ptBR from "vee-validate/dist/locale/pt_BR.json";

// Importação das regras de validação
// eslint-disable-next-line
for (const rule in rules) {
  extend(rule, rules[rule]);
}

// Definição do idioma das mensagems das validações
localize("pt_BR", ptBR);

Vue.use(ToastPlugin);

export default {
  name: "configRoute",
  components: {
    BForm,
    BFormGroup,
    BFormCheckbox,
    BFormSelect,
    BFormInput,
    BButton,
    vueTopprogress,
    BFormInvalidFeedback,
    ValidationProvider,
    ValidationObserver,
    BNav,
    BNavItem,
    BNavItemDropdown,
    BDropdownItem,
    TooltipLabel: () =>
      import(
        /* webpackChunkName: "configRoute_tooltipLabel" */ "../../../fieldBuilder/tooltipLabel/TooltipLabel.vue"
      ),
    SwitchDyn: () =>
      import(
        /* webpackChunkName: "configRoute_switchDyn" */ "@/components/switch/SwitchDyn.vue"
      )
  },
  directives: {
    focus: {
      // definição da diretiva
      inserted: function(el) {
        el.focus();
      }
    }
  },
  props: {
    route: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState({
      hasEndpoints: state => state.hasEndpoints
    })
  },
  methods: {
    format(value) {
      return value.replace(/(\d+)|(\W+)+/g, "");
    },
    validateForm() {
      return this.$refs.validationObserver.validate();
    },
    onChangeHasChild(value) {
      this.$store.dispatch("setHasRoutesChild", value);
    },
    onChangeIsChild(value) {
      this.$store.dispatch("setIsRoutesChild", value);
    },
    emitFormValidationProperty() {
      requestAnimationFrame(() => {
        this.$emit(
          "verifyRouteFormValidation",
          this.$refs.validationObserver.ctx.valid
        );
      });
    },
    onInput() {
      this.emitFormValidationProperty();
    }
  },
  created() {
    this.$store.dispatch("setHasRoutesChild", this.route.hasChild);
  },
  mounted() {
    this.validateForm();
    this.emitFormValidationProperty();
  },
  data() {
    return {
      tooltip: {
        hasChild: {
          message:
            "Ativo: Será criada um endpoint para atualizações e exclusões de um único registro, exemplo: (PUT) /xpto/XPTO_ID"
        },
        isChild: {
          message: "Rota padrão: /pessoa"
        }
      }
    };
  }
};
