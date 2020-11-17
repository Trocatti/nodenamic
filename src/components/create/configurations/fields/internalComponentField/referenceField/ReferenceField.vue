<template>
  <b-col>
    <b-form-group v-bind="fieldProperties.container" :disabled="fieldProperties.field.disabled">
      <template slot="label" v-if="fieldProperties.tooltip">
        <TooltipLabel :tooltip="fieldProperties.tooltip" />
      </template>

      <b-input-group>
        <b-form-input
          v-model="model[fieldProperties.field.modelName]"
          v-bind="fieldProperties.field"
        ></b-form-input>
        <b-input-group-append>
          <b-button variant="outline-primary" block @click="showDefinitionModal">
            <v-icon name="search" />
          </b-button>
        </b-input-group-append>
        <b-input-group-append>
          <b-button
            variant="outline-danger"
            block
            @click="cleanReferenceField"
            :disabled="!fieldProperties.append.disabled"
          >
            <v-icon name="eraser" />
          </b-button>
        </b-input-group-append>
      </b-input-group>
    </b-form-group>
  </b-col>
</template>

<script src="./referenceField.js"></script>