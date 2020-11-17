<template>
  <b-col lg="3">
    <ValidationProvider
      v-bind="fieldProperties.validations"
      v-slot="{ errors }"
      :name="validationName"
    >
      <b-form-group v-bind="fieldProperties.container" :disabled="fieldProperties.field.disabled">
        <b-input-group>
          <b-form-select
            :state="!!!errors[0]"
            v-model="model[fieldProperties.field.modelName]"
            v-bind="fieldProperties.field"
          ></b-form-select>
          <b-input-group-append v-show="fieldProperties.append.show">
            <b-button variant="outline-success" block @click="showArrayDefinitionModal">
              <v-icon name="pencil-alt" />
            </b-button>
          </b-input-group-append>
        </b-input-group>
        <b-form-invalid-feedback :state="!!!errors[0]">
          <!-- -->
          {{ errors[0] }}
        </b-form-invalid-feedback>
      </b-form-group>
    </ValidationProvider>
  </b-col>
</template>

<script src="./type.js"></script>