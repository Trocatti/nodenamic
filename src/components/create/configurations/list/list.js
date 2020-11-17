import Vue from "vue";
import { BRow, BCol, BTable, BButton, TooltipPlugin } from "bootstrap-vue";
import Icon from "vue-awesome/components/Icon";
import "vue-awesome/icons/trash-alt";
import "vue-awesome/icons/info";
import "vue-awesome/icons/clone";

Vue.use(TooltipPlugin);

export default {
  name: "config",
  components: {
    BRow,
    BCol,
    BTable,
    BButton,
    "v-icon": Icon
  },
  props: {
    listConfiguration: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    isDuplicating: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    selectRow(index) {
      this.$refs.fieldsTable.selectRow(index);
    },
    cleanTableSelection() {
      this.$refs.fieldsTable.clearSelected();
    },
    onRowSelected(items) {
      this.$emit("onRowSelected", items[0] || null);
    },
    onClickTrashButton(data) {
      this.$emit("onClickTrashButton", data);
    },
    onClickDuplicateButton(data) {
      this.$emit("onClickDuplicateButton", data);
    }
  },
  watch: {
    isDuplicating(newValue) {
      if (newValue) {
        requestAnimationFrame(() => this.$root.$emit("bv::hide::tooltip"));
      }
    }
  }
};
