export default class Name {
  static getField() {
    return {
      name: {
        column: {
          lg: 3
        },

        validations: {
          rules: "required|min:3|max:20"
        },

        container: {
          label: "Nome"
        },

        field: {
          component: "b-form-input",
          modelName: "name",
          placeholder: "Nome do campo",
          autocomplete: "off",
          focus: true,
          ref: "fieldName",
        }
      },
    }
  }
}