export default class MaxLength {
  static getField(hasReferenceField) {
    return {
      column: {
        lg: 3,
      },

      container: {
        label: "Tamanho máximo"
      },

      field: {
        component: "b-form-input",
        min: 0,
        type: "number",
        placeholder: "Tamanho máximo",
        modelName: "maxLength",
        autocomplete: "off",
        disabled: hasReferenceField,
      }
    }
  }
}