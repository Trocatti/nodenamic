export default class Description {
  static getField(descriptionRules, hasReferenceField) {
    return {
      description: {
        column: {
          lg: 3
        },

        validations: {
          rules: descriptionRules
        },

        container: {
          label: "Descrição"
        },

        field: {
          component: "b-form-input",
          modelName: "description",
          disabled: hasReferenceField,
          placeholder: "Descrição do campo",
          autocomplete: "off"
        }
      }
    };
  }
}
