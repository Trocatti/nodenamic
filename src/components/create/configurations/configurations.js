import Vue from "vue";
import axios from "axios";
import { mapState } from "vuex";
import { vueTopprogress } from "vue-top-progress";
import {
  BRow,
  BCol,
  ToastPlugin,
  BButton,
  BNav,
  BNavItem,
  BTabs,
  BTab,
  BButtonGroup
} from "bootstrap-vue";
import Icon from "vue-awesome/components/Icon";
import "vue-awesome/icons/arrow-right";
import "vue-awesome/icons/arrow-left";
import "vue-awesome/icons/pencil-alt";
import "vue-awesome/icons/plus";

Vue.use(ToastPlugin);

export default {
  name: "config",
  components: {
    Route: () =>
      import(/* webpackChunkName: "configuration_route" */ "./route/Route.vue"),
    Fields: () =>
      import(
        /* webpackChunkName: "configuration_fields" */ "./fields/Fields.vue"
      ),
    RouteCreated: () =>
      import(
        /* webpackChunkName: "configuration_routecreated" */ "../../routeCreated/RouteCreated.vue"
      ),
    BRow,
    BCol,
    vueTopprogress,
    BButton,
    BNav,
    BNavItem,
    BTabs,
    BTab,
    BButtonGroup,
    "v-icon": Icon
  },
  computed: {
    ...mapState({
      hasEndpoints: state => state.hasEndpoints
    }),

    fieldDisable() {
      return !this.routeFormIsValid;
    },

    createRouteDisable() {
      return !this.routeFormIsValid || this.fields.length == 0;
    },

    fields() {
      return this.route.fields;
    }
  },
  methods: {
    showToastError(message) {
      this.$bvToast.toast(message, {
        title: "Error!",
        variant: "danger",
        toaster: "b-toaster-bottom-left",
        solid: true
      });
    },

    async generateRoute(fnCallBack) {
      this.$refs.topProgress.start();
      const { data } = await axios.post(
        `${process.env.VUE_APP_ROOT_API}/create/`,
        this.route
      );
      if (data.msgerror) {
        this.showToastError("Erro ao aplicar as configurações.");

        this.$emit("error", { error: true, msg: data.msgerror });
      } else {
        fnCallBack(data);
        this.$emit("error", { error: false, msg: "" });
      }
    },

    async createRoute() {
      this.$refs.topProgress.done();
      this.routeCreateModalVisibility = true;
    },

    async editRoute(data) {
      this.$bvToast.toast(
        "Configurações aplicadas!\n Siga para a próxima etapa.",
        {
          title: "Sucesso!",
          variant: "success",
          toaster: "b-toaster-bottom-left",
          solid: true
        }
      );

      this.$store.dispatch("setEndpoints", data);
      this.$refs.topProgress.done();
      setTimeout(() => {
        this.$emit("executeInFather");
      }, 2000);
    },

    async nextTab() {
      switch (this.tabIndex) {
        case 0: // Aba "Rota"
          if (!this.routeFormIsValid) {
            this.showToastError(
              "Os campos obrigatórios devem ser preenchidos."
            );
          } else {
            this.tabIndex++;
          }
          break;
        case 1: // Aba "Campos modelo"
          if (this.fields.length == 0) {
            this.showToastError("É necessário inserir ao menos um campo.");
          } else {
            this.tabIndex++;
          }
          break;
        default:
          this.tabIndex++;
          break;
      }
    },

    verifyRouteFormValidation(valid) {
      this.routeFormIsValid = valid;
    },

    isRowSelected(value) {
      this.isRowSelectedInField = value;
    }
  },

  data() {
    return {
      route: {
        name: "",
        hasChild: false,
        isChild: false,
        path: "",
        version: 1,
        bucket: "",
        fields: []
      },
      tabIndex: 0,
      routeFormIsValid: false,
      routeCreateModalVisibility: false,
      isRowSelectedInField: false
    };
  }
};
