export default class MinLength {
  static getField(hasReferenceField) {
    return {
      column: {
        lg: 3,
      },

      container: {
        label: "Tamanho mínimo"
      },

      field: {
        component: "b-form-input",
        min: 0,
        type: "number",
        placeholder: "Tamanho mínimo",
        modelName: "minLength",
        autocomplete: "off",
        disabled: hasReferenceField,
      }
    }
  }
}