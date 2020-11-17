import Vue from "vue";
import axios from "axios";
import Mixin from "@/assets/mixins/CreateMixin";
import Copy from "@/components/copy/Copy";
import {
  BModal,
  BButton,
  BCollapse,
  BCard,
  BCardHeader,
  BCardBody,
  BCardText,
  VBToggle
} from "bootstrap-vue";
import { mapState } from "vuex";

export default {
  name: "schemas",
  mixins: [Mixin],
  components: {
    BModal,
    BButton,
    BCollapse,
    BCard,
    BCardHeader,
    BCardBody,
    BCardText,
    Copy
  },
  directives: {
    "b-toggle": VBToggle
  },
  props: {
    showModal: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    ...mapState({
      _id: state => state.endpoints.schema
    }),
    showSelf: {
      get() {
        return this.showModal;
      },
      set(visibility) {
        this.$emit("showSelf", visibility);
      }
    }
  },
  watch: {
    jsonData: function() {
      const object = { key: `${this.$options.name}`, value: this.jsonData };
      this.updateObjectJson(object);
    }
  },
  methods: {
    closeModal() {
      this.$emit("showSelf", false);
    },
    async loadDefinitions() {
      const { data } = await axios.get(
        `${process.env.VUE_APP_ROOT_API}/create/defs`
      );

      this.def = data;
    },
    updateReferenceField(values) {
      this.$emit("updateReferenceField", values);
    }
  },
  mounted() {
    this.loadDefinitions();
  },
  data() {
    return {
      def: {}
    };
  }
};
