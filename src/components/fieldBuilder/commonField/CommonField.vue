<template>
  <b-form-group v-bind="fieldProperties.container" :disabled="fieldProperties.field.disabled">
    <template slot="label" v-if="fieldProperties.tooltip">
      <TooltipLabel :tooltip="fieldProperties.tooltip" />
    </template>

    <component
      :is="fieldProperties.field.component"
      v-bind="fieldProperties.field"
      v-model="model[fieldProperties.field.modelName]"
      :v-focus="fieldProperties.field.focus"
    ></component>
  </b-form-group>
</template>

<script src="./commonField.js"></script>