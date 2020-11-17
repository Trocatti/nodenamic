export default class ReadOnly {
  static getField(hasReferenceField) {
    return {
      readOnly: {
        column: {
          lg: 3,
        },

        container: {
          label: "Somente leitura"
        },

        field: {
          component: "b-form-radio-group",
          modelName: "readOnly",
          options: [
            { text: "Sim", value: true },
            { text: "Não", value: false },
          ],
          disabled: hasReferenceField,
        }
      },
    }
  }
}