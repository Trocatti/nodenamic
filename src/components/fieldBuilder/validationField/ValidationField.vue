<template>
  <ValidationProvider
    v-bind="fieldProperties.validations"
    v-slot="{ errors }"
    :name="validationName"
  >
    <b-form-group v-bind="fieldProperties.container" :disabled="fieldProperties.field.disabled">
      <template slot="label" v-if="fieldProperties.tooltip">
        <TooltipLabel :tooltip="fieldProperties.tooltip" />
      </template>

      <component
        :is="fieldProperties.field.component"
        v-bind="fieldProperties.field"
        :state="!!!errors[0]"
        v-model="model[fieldProperties.field.modelName]"
        :v-focus="fieldProperties.field.focus"
      ></component>
      <b-form-invalid-feedback :state="!!!errors[0]">{{ errors[0] }}</b-form-invalid-feedback>
    </b-form-group>
  </ValidationProvider>
</template>

<script src="./validationField.js"></script>