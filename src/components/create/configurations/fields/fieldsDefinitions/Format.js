export default class Format {
  static getField(hasReferenceField) {
    return {
      column: {
        lg: 3,
      },

      container: {
        label: "Formato"
      },

      field: {
        component: "b-form-select",
        type: "number",
        modelName: "format",
        disabled: hasReferenceField,
        options: [
          { text: "Selecione...", value: null },
          { text: "Date", value: "date" },
          { text: "Date-time", value: "date-time" },
          { text: "URL", value: "url" },
        ]
      }
    }
  }
}