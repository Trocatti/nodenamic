export default class Maximum {
  static getField(hasReferenceField) {
    return {
      container: {
        label: "Enumerador"
      },

      field: {
        id: "textarea",
        component: "b-form-textarea",
        placeholder: "Insira os itens do enumerador separados por ';' (ponto e vírgula)",
        modelName: "enum",
        autocomplete: "off",
        rows: 1,
        disabled: hasReferenceField,
      }
    }
  }
}