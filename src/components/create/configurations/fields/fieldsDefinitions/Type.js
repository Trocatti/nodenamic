export default class Type {
  static getField(typeIsArray, hasReferenceField) {
    return {
      type: {
        column: {
          lg: 3
        },

        validations: {
          rules: "required"
        },

        container: {
          label: "Tipo"
        },

        field: {
          component: "b-form-select",
          modelName: "type",
          disabled: hasReferenceField,
          options: [
            { text: "Selecione...", value: null },
            { text: "Array", value: "Array" },
            { text: "Boolean", value: "Boolean" },
            { text: "Integer", value: "Integer" },
            { text: "Number", value: "Number" },
            { text: "Object", value: "Object" },
            { text: "String", value: "String" }
          ]
        },

        append: {
          show: typeIsArray
        }
      }
    };
  }
}
