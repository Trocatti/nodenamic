<template>
  <ValidationObserver ref="fieldFormObserver" v-slot="{ invalid }">
    <b-form @submit.prevent.stop="onCreateEditField">
      <b-row class="p-3">
        <b-col>
          <b-row>
            <FieldBuilder :model="fieldModel" :fieldProperties="fieldsItems.name" />
            <FieldBuilder :model="fieldModel" :fieldProperties="fieldsItems.description" />
            <Type
              :model="fieldModel"
              :fieldProperties="fieldsItems.type"
              @showArrayDefinitionModal="showArrayDefinitionModal"
            />
            <FieldBuilder :model="fieldModel" :fieldProperties="fieldsItems.restriction" />
          </b-row>

          <b-row>
            <FieldBuilder :model="fieldModel" :fieldProperties="fieldsItems.required" />
            <FieldBuilder :model="fieldModel" :fieldProperties="fieldsItems.readOnly" />
            <ReferenceField
              :model="fieldModel"
              :fieldProperties="fieldsItems.referenceField"
              @showDefinitionModal="showDefinitionModal"
              @cleanReferenceField="cleanReferenceField"
            />
          </b-row>

          <b-row>
            <template v-for="field in fieldItemsLine_3">
              <FieldBuilder
                :model="fieldModel"
                :fieldProperties="field"
                :key="field.field.modelName"
              />
            </template>
          </b-row>

          <b-row>
            <template v-for="field in fieldItemsLine_4">
              <FieldBuilder
                :model="fieldModel"
                :fieldProperties="field"
                :key="field.field.modelName"
              />
            </template>
          </b-row>          

          <b-row class="m-3 justify-content-center">
            <b-col lg="3">
              <b-button
                type="submit"
                block
                :variant="submitButtonProperties.variant"
                class="alignment-center"
              >
                <v-icon :name="submitButtonProperties.icon" />
                <span>{{ submitButtonProperties.description }}</span>
              </b-button>
            </b-col>
          </b-row>

          <b-row>
            <List
              :listConfiguration="fieldListConfiguration"
              :items="fields"
              :isDuplicating="isDuplicating"
              ref="list"
              @onRowSelected="onRowSelected"
              @onClickTrashButton="deleteField"
              @onClickDuplicateButton="duplicateField"
            />
          </b-row>
        </b-col>
      </b-row>
    </b-form>
    <Definitions
      :showModal="definitionModalVisibility"
      v-if="definitionModalVisibility"
      @showSelf="definitionModalVisibility = $event"
      @updateReferenceField="updateReferenceField"
    />
    <ArrayDefinitions
      :showModal="arrayDefinitionsModalVisibility"
      :arrayDefinitions="fieldModel.arrayDefinitions"
      :openedByInsert="arrayDefinitionOpenedByInsert"
      v-if="arrayDefinitionsModalVisibility"
      @showSelf="arrayDefinitionsModalVisibility = $event"
      @onCreateEditField="onCreateEditField"
    />
  </ValidationObserver>
</template>

<style lang="scss" src="./fields.scss"></style>
<script src="./fields.js"></script>