export default class Restriction {
  static getField() {
    return {
      restriction: {
        column: {
          lg: 3
        },

        validations: {
          rules: "required"
        },

        container: {
          label: "Restrição"
        },

        field: {
          component: "b-form-select",
          modelName: "restriction",
          options: [
            { text: "Selecione...", value: null },
            { text: "Não há restrição", value: "n/a" },
            { text: "Equal", value: "EQUAL" },
            { text: "Not_equal", value: "NOT_EQUAL" },
            { text: "Like", value: "LIKE" },
            { text: "Greater_than", value: "GREATER_THAN" },
            { text: "Greater_or_equal_than", value: "GREATER_OR_EQUAL_THAN" },
            { text: "Lower_than", value: "LOWER_THAN" },
            { text: "Lower_or_equal_than", value: "LOWER_OR_EQUAL_THAN" },
            { text: "In", value: "IN" },
            { text: "Not_in", value: "NOT_IN" },
            { text: "All", value: "ALL" },
            { text: "Size", value: "SIZE" }
          ],
          class: "restriction"
        },

        tooltip: {
          label: "Restrição",
          message:
            "Este campo irá definir se a rota haverá uma restrição (filtro) seguindo a regra abaixo"
        }
      }
    };
  }
}
