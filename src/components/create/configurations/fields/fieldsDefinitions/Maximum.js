export default class Maximum {
  static getField(hasReferenceField) {
    return {
      column: {
        lg: 3,
      },

      container: {
        label: "Valor máximo"
      },

      field: {
        component: "b-form-input",
        min: 0,
        type: "number",
        placeholder: "Valor máximo",
        modelName: "maximum",
        autocomplete: "off",
        disabled: hasReferenceField,
      }
    }
  }
}