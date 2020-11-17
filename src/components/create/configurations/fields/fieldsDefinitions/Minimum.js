export default class Minimum {
  static getField(hasReferenceField) {
    return {
      column: {
        lg: 3,
      },

      container: {
        label: "Valor mínimo"
      },

      field: {
        component: "b-form-input",
        min: 0,
        type: "number",
        placeholder: "Valor mínimo",
        modelName: "minimum",
        autocomplete: "off",
        disabled: hasReferenceField,
      }
    }
  }
}