import Vue from "vue";
import axios from "axios";
import { ToastPlugin, BAlert, BModal, BButton } from "bootstrap-vue";
import {
  FormWizard,
  TabContent,
  WizardButton,
  WizardStep
} from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import { mapState } from "vuex";
import { vueTopprogress } from "vue-top-progress";
import Icon from "vue-awesome/components/Icon";
import "vue-awesome/icons/circle-notch";
import "vue-awesome/icons/chevron-left";
import "vue-awesome/icons/chevron-right";
import "vue-awesome/icons/regular/check-circle";

Vue.use(ToastPlugin);

const _componentesObjects = {
  configurations: { c: "Configurations", t: "Configurações" },
  routes: { c: "Routes", t: "Rota" },
  routesChild: { c: "RoutesChild", t: "Rota Filha" },
  operations: { c: "Operations", t: "Operação" },
  operationsChild: { c: "OperationsChild", t: "Operação Filha" },
  resources: { c: "Resources", t: "Recurso" },
  schemas: { c: "Schemas", t: "Modelo" },
  schemasCreate: { c: "SchemasCreate", t: "Modelo Criação" },
  schemasUpdate: { c: "SchemasUpdate", t: "Modelo Atualização" }
};

const _components = [
  _componentesObjects.configurations,
  _componentesObjects.routes,
  _componentesObjects.operations,
  _componentesObjects.resources,
  _componentesObjects.schemas
];

export default {
  name: "create",
  components: {
    "v-icon": Icon,
    BAlert,
    BModal,
    BButton,
    TabContent,
    FormWizard,
    WizardButton,
    WizardStep,
    vueTopprogress,
    Configurations: () =>
      import(
        /* webpackChunkName: "createRoute_Configurations" */ "@/components/create/configurations/Configurations.vue"
      ),
    Routes: () =>
      import(
        /* webpackChunkName: "createRoute_Routes" */ "@/components/create/routes/Routes"
      ),
    RoutesChild: () =>
      import(
        /* webpackChunkName: "createRoute_RoutesChild" */ "@/components/create/routes/child/RoutesChild"
      ),
    Operations: () =>
      import(
        /* webpackChunkName: "createRoute_Operations" */ "@/components/create/operations/Operations"
      ),
    OperationsChild: () =>
      import(
        /* webpackChunkName: "createRoute_OperationsChild" */ "@/components/create/operations/child/OperationsChild"
      ),
    Resources: () =>
      import(
        /* webpackChunkName: "createRoute_Resources" */ "@/components/create/resources/Resources"
      ),
    Schemas: () =>
      import(
        /* webpackChunkName: "createRoute_Schemas" */ "@/components/create/schemas/Schemas"
      ),
    SchemasCreate: () =>
      import(
        /* webpackChunkName: "createRoute_SchemasCreate" */ "@/components/create/schemas/child/SchemasCreate"
      ),
    SchemasUpdate: () =>
      import(
        /* webpackChunkName: "createRoute_SchemasUpdate" */ "@/components/create/schemas/child/SchemasUpdate"
      ),
    RouteCreated: () =>
      import(
        /* webpackChunkName: "createRoute_RouteCreated" */ "../../../components/routeCreated/RouteCreated.vue"
      )
  },
  computed: {
    ...mapState({
      hasEndpoints: state => state.hasEndpoints,
      loadingWizard: state => state.loadingWizard,
      jsonObjects: state => state.jsonObjects,
      hasRoutesChild: state => state.hasRoutesChild,
      isRoutesChild: state => state.isRoutesChild
    })
  },
  watch: {
    hasRoutesChild() {
      if (this.hasRoutesChild) {
        this.components = [
          _componentesObjects.configurations,
          _componentesObjects.routes,
          _componentesObjects.routesChild,
          _componentesObjects.operations,
          _componentesObjects.operationsChild,
          _componentesObjects.resources,
          _componentesObjects.schemasCreate,
          _componentesObjects.schemasUpdate,
          _componentesObjects.schemas
        ];
      } else {
        this.components = _components;
      }
    }
  },
  methods: {
    async complete() {
      try {
        this.$refs.topProgress.start();
        const { data } = await axios.put(
          `${process.env.VUE_APP_ROOT_API}/create`,
          {
            objects: this.jsonObjects,
            isChild: this.isRoutesChild,
            hasChild: this.hasRoutesChild
          }
        );

        this.path = data;
        this.routeCreateModalVisibility = true;
        this.$store.dispatch("setLoadingWizard", false);
        this.$refs.topProgress.done();
      } catch (err) {
        this.$bvToast.toast("Erro ao criar rota.\n Contate o administrador!", {
          title: "Erro!",
          variant: "danger",
          toaster: "b-toaster-bottom-left",
          solid: true
        });
      }
    },
    executeNextTab() {
      this.$refs.nextTab.$el.click();
      this.disableConfigurations();
    },
    onChangeTab(prevIndex, nextIndex) {
      this.tab = nextIndex;
    },
    setLoading() {
      this.$store.dispatch("setLoadingWizard", true);
    },
    validateAsync() {
      return new Promise((resolve, reject) => {
        try {
          resolve(true);
        } catch (error) {
          //
          reject(false);
        } //
      });
    },
    onComplete() {},
    disableConfigurations() {}
  },
  beforeDestroy() {
    this.$store.dispatch("setEndpoints", {});
    this.$store.dispatch("setJsonData", {});
    this.$store.dispatch("setLoadingWizard", false);
    this.$store.dispatch("setHasRoutesChild", false);
    this.$store.dispatch("resetJsonObjects");
  },
  data() {
    return {
      tab: 0,
      showDismissibleAlert: false,
      msgerror: "",
      path: "",
      components: _components,
      routeCreateModalVisibility: false
    };
  }
};
