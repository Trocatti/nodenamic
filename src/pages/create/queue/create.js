import Vue from "vue";
import axios from "axios";
import { BToast, ToastPlugin, BAlert, BModal, BButton } from "bootstrap-vue";
import { FormWizard, TabContent, WizardButton } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import { mapState } from "vuex";
import { vueTopprogress } from 'vue-top-progress';
import Icon from "vue-awesome/components/Icon";
import "vue-awesome/icons/circle-notch";
import "vue-awesome/icons/chevron-left";
import "vue-awesome/icons/chevron-right";
import "vue-awesome/icons/regular/check-circle";

Vue.use(ToastPlugin);

const _componentesObjects = {
    configurations: { c: 'Configurations', t: 'Configurações' },
    routes: { c: 'Routes', t: 'Rota' },
    routesChild: { c: 'RoutesChild', t: 'Rota Filha' },
    operations: { c: 'Operations', t: 'Operação' },
    operationsChild: { c: 'OperationsChild', t: 'Operação Filha' },
    resources: { c: 'Resources', t: 'Recurso' },
    schemas: { c: 'Schemas', t: 'Modelo' },
    schemasCreate: { c: 'SchemasCreate', t: 'Modelo Criação' },
    schemasUpdate: { c: 'SchemasUpdate', t: 'Modelo Atualização' },
};

const _components = [
    _componentesObjects.configurations,
    _componentesObjects.routes,
    _componentesObjects.operations,
    _componentesObjects.resources,
    _componentesObjects.schemas
];

export default {
  name: "create_queue",
  components: {
    "v-icon": Icon,
    BToast,
    BAlert,
    BModal,
    BButton,
    TabContent,
    FormWizard,
    WizardButton,
    vueTopprogress,
    Configurations: () =>
      import(
        /* webpackChunkName: "createQueue_Configurations" */ "@/components/create/configurations/Configurations.vue"
      ),
    Routes: () =>
      import(
        /* webpackChunkName: "createQueue_Routes" */ "@/components/create/routes/Routes"
      ),
    RoutesChild: () =>
      import(
        /* webpackChunkName: "createQueue_RoutesChild" */ "@/components/create/routes/child/RoutesChild"
      ),
    Operations: () =>
      import(
        /* webpackChunkName: "createQueue_Operations" */ "@/components/create/operations/Operations"
      ),
    OperationsChild: () =>
      import(
        /* webpackChunkName: "createQueue_OperationsChild" */ "@/components/create/operations/child/OperationsChild"
      ),
    Resources: () =>
      import(
        /* webpackChunkName: "createQueue_Resources" */ "@/components/create/resources/Resources"
      ),
    Schemas: () =>
      import(
        /* webpackChunkName: "createQueue_Schemas" */ "@/components/create/schemas/Schemas"
      )
  },
  computed: {
    ...mapState({
      hasEndpoints: state => state.hasEndpoints,
      loadingWizard: state => state.loadingWizard,
      jsonObjects: state => state.jsonObjects,
      hasRoutesChild: state => state.hasRoutesChild
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
            child: this.hasRoutesChild
          }
        );

        this.path = data;
        this.modalShow = true;
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
    hideModal() {
      this.$refs["success-modal"].hide();
      this.$router.push({ name: "home" });
    },
    onComplete() {}
  },
  beforeDestroy() {
    this.$store.dispatch("setEndpoints", {});
    this.$store.dispatch("setJsonData", {});
    this.$store.dispatch("setHasRoutesChild", false);
    this.$store.dispatch("resetJsonObjects");
  },
  data() {
    return {
      tab: 0,
      showDismissibleAlert: false,
      modalShow: false,
      path: "",
      components: _components
    };
  }
};
