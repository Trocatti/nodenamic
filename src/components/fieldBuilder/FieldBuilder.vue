<template>
  <b-col v-bind="fieldProperties.column">
    <ValidationField
      :model="model"
      :fieldProperties="fieldProperties"
      v-if="fieldProperties.validations"
    />
    <CommonField :model="model" :fieldProperties="fieldProperties" v-else />
  </b-col>
</template>

<script src="./fieldBuilder.js"></script>