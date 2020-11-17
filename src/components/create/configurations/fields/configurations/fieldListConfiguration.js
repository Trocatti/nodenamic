function formatTrueOrFalse(value) {
  return value === true ? "Sim" : "Não";
}

function formatToReducedValue(value) {
  return value ? value.toString().substr(0, 7).concat('...') : "";
}

function formatReferenceField(value) {
  return value ? value.substr(value.lastIndexOf("/") + 1, value.length) : "";
}

export default [
  {
    key: "name",
    label: 'Nome',
    formatter: value => formatToReducedValue(value),
  },
  {
    key: "description",
    label: "Descrição",
    formatter: value => formatToReducedValue(value),
  },
  {
    key: "type",
    label: "Tipo",
  },
  {
    key: "restriction",
    label: "Restrição",
  },
  {
    key: "required",
    label: "Obrigatório",
    formatter: value => formatTrueOrFalse(value),
  },
  {
    key: "readOnly",
    label: "Somente leitura",
    formatter: value => formatTrueOrFalse(value),
  },
  {
    key: "referenceField",
    label: "Referência",
    formatter: value => formatReferenceField(value),

  },
  {
    key: "minLength",
    label: "Tam. mínimo",
    formatter: value => formatToReducedValue(value),
  },
  {
    key: "maxLength",
    label: "Tam. máximo",
    formatter: value => formatToReducedValue(value),
  },
  {
    key: "pattern",
    label: "Expressão",
    formatter: value => formatToReducedValue(value),
  },
  {
    key: "format",
    label: "Formato",
  },
  {
    key: "minimum",
    label: "Vl. mínimo",
    formatter: value => formatToReducedValue(value),
  },
  {
    key: "maximum",
    label: "Vl. máximo",
    formatter: value => formatToReducedValue(value),
  },
  {
    key: "enum",
    label: "Enumerador",
    formatter: value => formatToReducedValue(value),
  },
  {
    key: "acoes",
    label: "Ações",
  }
]