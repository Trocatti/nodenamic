import { mapState } from "vuex";
import axios from "axios";

const createRouteMixin = {
  components: {
    Editor: () =>
      import(
        /* webpackChunkName: "createMixin_editorJson" */ "@/components/editor/EditorJson"
      )
  },
  computed: {
    ...mapState({
      jsonData: state => state.jsonData
    })
  },
  methods: {
    updateObjectJson(object) {
      this.$store.dispatch("setJsonObjects", object);
    },
    copyObject(object) {
      return JSON.parse(JSON.stringify(object));
    },
    objectEquals(source, target) {
      return (
        JSON.stringify(source, this.replacer) ===
        JSON.stringify(target, this.replacer)
      );
    },
    replacer(key, value) {
      if (typeof value === "number") {
        return value.toString();
      } else {
        return value;
      }
    }
  },
  created: async function() {
    try {
      const configurationDefined = this.$store.state.jsonObjects[
        this.$options.name
      ];
      if (configurationDefined) {
        this.$store.dispatch("setJsonData", configurationDefined);
      } else {
        const { data } = await axios.get(
          `${process.env.VUE_APP_ROOT_API}/${this.$options.name}/${this._id}`
        );

        this.$store.dispatch("setJsonData", data);
      }

      setTimeout(() => {
        this.$store.dispatch("setLoadingWizard", false);
      }, 1000);
    } catch (error) {
      this.$emit("error", true);
    }
  }
};

export default createRouteMixin;
