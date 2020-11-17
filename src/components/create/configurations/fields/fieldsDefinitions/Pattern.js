export default class Pattern {
  static getField(hasReferenceField) {
    return {
      column: {
        lg: 3,
      },

      container: {
        label: "Expressão"
      },

      field: {
        component: "b-form-input",
        placeholder: "[a-f0-9]{24}$",
        modelName: "pattern",
        autocomplete: "off",
        disabled: hasReferenceField,
      }
    }
  }
}