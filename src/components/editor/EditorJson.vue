<template>
  <div id="editor">
    <div class="d-flex p-3" style="min-height:400px;">
      <v-jsoneditor v-model="jsonData" :plus="true" class="pl-5 pr-5" />
    </div>
  </div>
</template>

<script>
import vue from "vue";
import VJsoneditor from "v-jsoneditor";

vue.use(VJsoneditor, { someOption: true });

export default {
  name: "editor",
  computed: {
    jsonData: {
      get() {
        return this.$store.state.jsonData;
      },
      set(value) {
        this.$store.commit("SET_JSON_DATA", value);
      }
    }
  }
};
</script>

<style lang="scss">
.jsoneditor-container {
  .max-btn {
    display: block;
    left: 145px;
    top: 5px;
    right: 0;
    border: 1px solid #d7e6fe;
  }
  .jsoneditor {
    border-color: #e74c3c;
  }
  .jsoneditor-menu {
    background-color: #e74c3c;
    border-bottom-color: #e74c3c;
  }
  .jsoneditor-menu {
    a.jsoneditor-poweredBy,
    .jsoneditor-sort,
    .jsoneditor-transform {
      display: none;
    }
  }
}

.block {
  line-height: 0;
}

.block_content .val-input {
  width: 20em;
}

.pure-form {
  select {
    height: 2em;
    font-size: 1.5em;
    padding: 0 0 0 5px;
  }

  input {
    &[type="text"],
    &[type="nunber"] {
      height: 2em;
      font-size: 1.5em;
      padding: 0 0 0 5px;
    }
  }

  .pure-button {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.5;
    border-radius: 0.2rem;
    background: var(--danger);
    color: var(--white);
  }

  .f-confirm {
    background: var(--primary);
  }
}

.result {
  background-color: var(--white);
  padding: 1em;
}
</style>
