import Vue from "vue";
import {
  BButton,
  BForm,
  BFormGroup,
  BFormInput,
  BFormSelect,
  ToastPlugin,
  BFormInvalidFeedback,
  BRow,
  BCol,
  BFormTextarea,
  BFormRadioGroup,
  BTable,
  BInputGroup,
  BInputGroupAppend
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
import "vue-awesome/icons/search";
import "vue-awesome/icons/info";
import "vue-awesome/icons/plus";
import "vue-awesome/icons/pencil-alt";
import "vue-awesome/icons/eraser";
import "vue-awesome/icons/clone";
import "vue-awesome/icons/regular/plus-square";
import Swal from "sweetalert2";

import mixin from "../../../../assets/mixins/GeneralMixin";
import fieldListConfiguration from "./configurations/fieldListConfiguration";

import {
  Name,
  Description,
  Type,
  Restriction,
  Required,
  ReadOnly,
  ReferenceField,
  MinLength,
  MaxLength,
  Pattern,
  Format,
  Minimum,
  Maximum,
  Enum
} from "./fieldsDefinitions/components";

// Importação das regras de validação
// eslint-disable-next-line
for (const rule in rules) {
  extend(rule, rules[rule]);
}

// Definição do idioma das mensagems das validações
localize("pt_BR", ptBR);

Vue.use(ToastPlugin);

export default {
  name: "config",
  mixins: [mixin],
  components: {
    Definitions: () =>
      import(
        /* webpackChunkName: "fields_definitions" */ "../definitions/Definitions.vue"
      ),
    List: () =>
      import(/* webpackChunkName: "fields_list" */ "../list/List.vue"),
    ArrayDefinitions: () =>
      import(
        /* webpackChunkName: "fields_arraydefinitions" */ "../arrayDefinitions/ArrayDefinitions.vue"
      ),
    FieldBuilder: () =>
      import(
        /* webpackChunkName: "fields_fieldbuilder" */ "../../../fieldBuilder/FieldBuilder.vue"
      ),
    Type: () =>
      import(
        /* webpackChunkName: "fields_type" */ "./internalComponentField/type/Type.vue"
      ),
    ReferenceField: () =>
      import(
        /* webpackChunkName: "fields_referenceField" */ "./internalComponentField/referenceField/ReferenceField.vue"
      ),
    "v-icon": Icon,
    BForm,
    BFormGroup,
    BFormSelect,
    BFormInput,
    BButton,
    BFormInvalidFeedback,
    ValidationProvider,
    ValidationObserver,
    BRow,
    BCol,
    BFormTextarea,
    BFormRadioGroup,
    BTable,
    BInputGroup,
    BInputGroupAppend
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  },
  props: {
    fields: {
      type: Array,
      required: false
    }
  },
  computed: {
    isRowSelected() {
      this.$emit("isRowSelected", !!this.selectedRow);

      return this.selectedRow;
    },

    submitButtonProperties() {
      return this.isRowSelected
        ? {
            description: "Salvar",
            variant: "primary",
            icon: "regular/plus-square"
          }
        : { description: "Inserir", variant: "success", icon: "plus" };
    },

    hasReferenceField() {
      return (
        this.fieldModel.referenceField != "" &&
        this.fieldModel.referenceField != null
      );
    },

    descriptionRules() {
      return this.hasReferenceField ? "" : "required|min:5|max:55";
    },

    typeIsArray() {
     return this.compareIgnoreCase("array", this.fieldModel.type);
    },

    fieldsItems() {
      return {
        ...Name.getField(),
        ...Description.getField(this.descriptionRules, this.hasReferenceField),
        ...Type.getField(this.typeIsArray, this.hasReferenceField),
        ...Restriction.getField(),
        ...Required.getField(),
        ...ReadOnly.getField(this.hasReferenceField),
        ...ReferenceField.getField(this.hasReferenceField)
      };
    },
    fieldItemsLine_3() {
      return [
        MinLength.getField(this.hasReferenceField),
        MaxLength.getField(this.hasReferenceField),
        Pattern.getField(this.hasReferenceField),
        Format.getField(this.hasReferenceField)
      ];
    },
    fieldItemsLine_4() {
      return [
        Minimum.getField(this.hasReferenceField),
        Maximum.getField(this.hasReferenceField),
        Enum.getField(this.hasReferenceField)
      ];
    }
  },
  methods: {
    uniqueID() {
      return (
        Date.now().toString(36) +
        Math.random()
          .toString(36)
          .substr(2, 5)
      ).toUpperCase();
    },
    showToastError(message) {
      this.$bvToast.toast(message, {
        title: "Erro!",
        variant: "danger",
        toaster: "b-toaster-bottom-left",
        solid: true
      });
    },
    validateFieldForm() {
      return this.$refs.fieldFormObserver.validate();
    },
    validateDuplicatedItems() {
      const duplicated =
        this.fields.findIndex(
          item =>
            item.id != this.fieldModel.id &&
            item.name.toUpperCase() == this.fieldModel.name.toUpperCase()
        ) > -1;

      if (duplicated) {
        this.showToastError(
          "Não foi possível executar a ação solicitada, já existe um campo inserido com o Nome informado."
        );
        return false;
      }

      return true;
    },
    validateArrayDefinitions() {
      let valid = true;
      for (const key in this.fieldModel.arrayDefinitions) {
        if (this.fieldModel.arrayDefinitions[key] == null) {
          valid = false;
          break;
        }
      }

      return valid;
    },
    insertEditField(index, deleteCount, model) {
      this.fields.splice(index, deleteCount, this.copyObject(model));
      this.cleanFieldModel();
    },
    cleanTableSelection() {
      this.$refs.list.cleanTableSelection();
    },
    selectTableRow(index) {
      this.$refs.list.selectRow(index);
    },
    cleanFieldModel() {
      this.fieldModel = this.copyObject(this.fieldModelBackup);
    },
    duplicateField(data) {
      const copiedObject = this.copyObject(data.item);
      delete copiedObject.name;
      delete copiedObject.description;
      copiedObject.id = this.uniqueID();

      this.insertEditField(0, 0, copiedObject);
      requestAnimationFrame(() => {
        this.selectTableRow(0);
      });

      this.$bvToast.toast(
        "Linha duplicada com sucesso, defina o nome e a descrição para prosseguir.",
        {
          title: "Sucesso!",
          variant: "success",
          toaster: "b-toaster-bottom-left",
          solid: true
        }
      );

      requestAnimationFrame(() => {
        this.defineIsDuplicating(true);
        this.$refs.fieldName.focus();
      });
    },
    async onCreateEditField() {
      const valid = await this.validateFieldForm();
      if (valid) {
        const arrayDefinitionsValid =
          !this.typeIsArray || this.validateArrayDefinitions();

        if (arrayDefinitionsValid) {
          if (this.validateDuplicatedItems()) {
            if (!this.isRowSelected) {
              this.fieldModel.id = this.uniqueID();
              this.insertEditField(0, 0, this.fieldModel);
            } else {
              if (!this.typeIsArray) {
                this.fieldModel.arrayDefinitions = this.copyObject(
                  this.arrayDefinitionsBackup
                );
              }

              const index = this.fields.findIndex(
                item => item.id == this.fieldModel.id
              );
              this.insertEditField(index, 1, this.fieldModel);
              this.cleanTableSelection();
            }
            this.arrayDefinitionOpenedByInsert = false;
            this.defineIsDuplicating(false);
          }
        } else {
          this.showToastError(
            "Não foi possível executar a ação solicitada, as definições do array não foram atribuídas."
          );
          this.showArrayDefinitionModal(true);
        }
      } else {
        this.showToastError(
          "Não foi possível executar a ação solicitada, verifique os campos preenchidos."
        );
      }
    },
    onRowSelected(item) {
      this.selectedRow = item;

      //Caso seja selecionado algum item na tabela, os campos serão preenchidos com o valor do item selecionado, caso contrário o formulário será limpo.
      this.fieldModel = this.isRowSelected
        ? this.copyObject(this.selectedRow)
        : this.copyObject(this.fieldModelBackup);
    },
    updateReferenceField(values) {
      Swal.fire({
        html:
          "Esta ação irá <strong>sobrescrever</strong> os valores prescritos na referência selecionada e também <strong>limpará</strong> os demais campos que não são necessários.",
        type: "question",
        showCancelButton: true,
        confirmButtonColor: "var(--primary)",
        cancelButtonColor: "var(--danger)",
        confirmButtonText: "Sim, sobrescrever e limpar!",
        reverseButtons: true,
        cancelButtonText: "Cancelar"
      }).then(result => {
        if (result.value) {
          const newModel = {
            type: values.type,
            referenceField: values.ref,
            name: this.fieldModel.name,
            required: this.fieldModel.required,
            restriction: this.fieldModel.restriction
          };

          this.fieldModel = {};

          this.fieldModel.readOnly = false;
          this.fieldModel.format = null;
          this.fieldModel.type = newModel.type;
          this.fieldModel.referenceField = newModel.referenceField;
          this.fieldModel.name = newModel.name;
          this.fieldModel.required = newModel.required;
          this.fieldModel.restriction = newModel.restriction;
        }
      });
    },
    deleteByClick(data) {
      const index = this.fields.findIndex(item => item.id === data.item.id);
      if (index > -1) {
        this.fields.splice(index, 1);
      }
    },
    deleteField(data) {
      Swal.fire({
        title: "Você deseja excluir ?",
        text: "Esta ação não poderá ser revertida!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "var(--primary)",
        cancelButtonColor: "var(--danger)",
        confirmButtonText: "Sim, excluir!",
        reverseButtons: true,
        cancelButtonText: "Cancelar"
      }).then(result => {
        if (result.value) {
          this.defineIsDuplicating(false);
          this.deleteByClick(data);
        }
      });
    },
    showDefinitionModal() {
      this.definitionModalVisibility = true;
    },
    cleanReferenceField() {
      this.fieldModel.type = null;
      this.fieldModel.referenceField = null;
    },
    showArrayDefinitionModal(arrayDefinitionOpenedByInsert) {
      if (!this.isRowSelected) {
        this.arrayDefinitionOpenedByInsert = arrayDefinitionOpenedByInsert;
      }

      this.arrayDefinitionsModalVisibility = true;
    },
    defineIsDuplicating(isDuplicating) {
      this.isDuplicating = isDuplicating;
    },
    createModelBackup() {
      this.fieldModelBackup = this.copyObject(this.fieldModel);
    },
    createArrayDefinitionBackup() {
      this.arrayDefinitionsBackup = this.copyObject(
        this.fieldModel.arrayDefinitions
      );
    }
  },

  mounted() {
    setTimeout(() => {
      this.validateFieldForm();
    }, 100);
    this.createModelBackup();
    this.createArrayDefinitionBackup();
  },

  data() {
    return {
      selectedRow: null,
      definitionModalVisibility: false,
      arrayDefinitionsModalVisibility: false,
      arrayDefinitionOpenedByInsert: false,
      isDuplicating: false,
      arrayDefinitionsBackup: {},
      fieldListConfiguration,
      fieldModelBackup: {},
      fieldModel: {
        id: null,
        name: null,
        description: null,
        type: null,
        restriction: null,
        required: null,
        readOnly: false,
        format: null,
        referenceField: null,
        arrayDefinitions: {
          type: null,
          minItems: 1,
          uniqueItems: false,
          additionalItems: false
        }
      }
    };
  }
};
