export default class Required {
  static getField() {
    return {
      required: {
        column: {
          lg: 3
        },

        validations: {
          rules: "required",
          name: " "
        },

        container: {
          label: "Obrigatório"
        },

        field: {
          component: "b-form-radio-group",
          modelName: "required",
          options: [
            { text: "Sim", value: true },
            { text: "Não", value: false }
          ]
        },

        tooltip: {
          label: "Obrigatório",
          message: "Esta opção irá definir se o envio deste campo será obrigatório nos métodos REST"
        }
      },
    }
  }
}