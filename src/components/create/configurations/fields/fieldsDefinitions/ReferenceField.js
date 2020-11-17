export default class ReferenceField {
  static getField(hasReferenceField) {
    return {
      referenceField: {
        container: {
          label: "Campo de referência"
        },

        field: {
          component: "b-form-input",
          placeholder: "Campo de referência",
          autocomplete: "off",
          modelName: "referenceField",
          readonly: true,
        },

        tooltip: {
          label: "Campo de referência",
          message: "Este campo só poderá ser utilizado selecionando uma referência predefinida utilizando a lupa abaixo"
        },

        append: {
          disabled: hasReferenceField
        }
      },
    }
  }
}