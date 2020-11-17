import Vue from "vue";
import { BButton, TooltipPlugin } from "bootstrap-vue";
import Icon from "vue-awesome/components/Icon";
import "vue-awesome/icons/info";

Vue.use(TooltipPlugin);

export default {
  name: "tooltipLabel",
  components: {
    "v-icon": Icon,
    BButton
  },
  props: {
    tooltip: {
      type: Object
    }
  }
};
