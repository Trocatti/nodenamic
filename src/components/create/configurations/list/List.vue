<template>
  <div class="w-100">
    <div class="mb-2 select-line-text">
      <b-button
        variant="link"
        size="sm"
        class="button-info-icon"
        v-b-tooltip.hover
        title="Selecione a linha para editar"
      >
        <v-icon name="info" class="info-icon" />
      </b-button>
    </div>
    <b-table
      striped
      hover
      :fields="listConfiguration"
      empty-text="Não há registros para exibir"
      :items="items"
      class="font-13 text-center"
      responsive
      small
      bordered
      show-empty
      :selectable="!isDuplicating"
      stacked="md"
      select-mode="single"
      selected-variant="primary"
      @row-selected="onRowSelected"
      ref="fieldsTable"
    >
      <template v-slot:cell(acoes)="data">
        <div class="d-flex justify-content-center align-items-center">
          <b-button
            :disabled="isDuplicating"
            v-b-tooltip.hover.left
            title="Duplicar registro"
            type="button"
            variant="link"
            size="sm"
            @click="onClickDuplicateButton(data)"
          >
            <v-icon name="clone" class="icon-alignment-center" />
          </b-button>
          <b-button
            v-b-tooltip.hover.left
            title="Excluir registro"
            type="button"
            variant="link"
            size="sm"
            @click="onClickTrashButton(data)"
          >
            <v-icon name="trash-alt" class="button-trash-icon" />
          </b-button>
        </div>
      </template>
    </b-table>
  </div>
</template>

<style src="./list.scss" lang="scss" scoped></style>
<script src="./list.js"></script>
