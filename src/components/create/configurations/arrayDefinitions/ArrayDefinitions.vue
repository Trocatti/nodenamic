<template>
  <div id="arrayDefinitions">
    <b-modal
      size="lg"
      v-model="showSelf"
      title="Definições do Array"
      hide-footer
    >
      <ValidationObserver
        ref="arrayDefinitionsValidationObserver"
        tag="div"
        class="container-fluid"
      >
        <b-form @submit.prevent.stop="saveDefinitions">
          <b-row>
            <b-col>
              <ValidationProvider
                rules="required"
                v-slot="{ errors }"
                name="Tipo"
              >
                <b-form-group label="Tipo:">
                  <b-form-select
                    v-model="arrayDefinitions.type"
                    placeholder="Tipo"
                    :state="!!!errors[0]"
                    :options="configuration.type"
                    @change="onChange"
                  ></b-form-select>
                  <b-form-invalid-feedback :state="!!!errors[0]">
                    <!-- -->
                    {{ errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </ValidationProvider>
            </b-col>
            <b-col>
              <ValidationProvider
                rules="required|min_value:1"
                v-slot="{ errors }"
                name="Quantidade mínima de itens"
              >
                <b-form-group label="Quantidade mínima de itens:">
                  <b-form-input
                    :state="!!!errors[0]"
                    v-model.number="arrayDefinitions.minItems"
                    placeholder="Quantidade mínima de itens"
                    type="number"
                  ></b-form-input>
                  <b-form-invalid-feedback :state="!!!errors[0]">
                    <!-- -->
                    {{ errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </ValidationProvider>
            </b-col>
          </b-row>

          <b-row>
            <b-col>
              <ValidationProvider
                rules="required"
                v-slot="{ errors }"
                name="Item único"
              >
                <b-form-group label="Item único:">
                  <b-form-radio-group
                    v-model="arrayDefinitions.uniqueItems"
                    placeholder="Item único"
                    :options="configuration.uniqueItems"
                  ></b-form-radio-group>
                  <b-form-invalid-feedback :state="!!!errors[0]">
                    <!-- -->
                    {{ errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </ValidationProvider>
            </b-col>
            <b-col>
              <ValidationProvider
                rules="required"
                v-slot="{ errors }"
                name="Itens adicionais"
              >
                <b-form-group label="Itens adicionais:">
                  <b-form-radio-group
                    v-model="arrayDefinitions.additionalItems"
                    placeholder="Itens adicionais"
                    :options="configuration.additionalItems"
                  ></b-form-radio-group>
                  <b-form-invalid-feedback :state="!!!errors[0]">
                    <!-- -->
                    {{ errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </ValidationProvider>
            </b-col>
          </b-row>
          <b-row class="mt-3 justify-content-center">
            <b-col lg="2">
              <b-button class="mr-1" variant="success" block type="submit"
                >Salvar</b-button
              >
            </b-col>
            <b-col lg="2">
              <b-button variant="danger" @click="closeModal" block type="button"
                >Cancelar</b-button
              >
            </b-col>
          </b-row>
        </b-form>
      </ValidationObserver>
    </b-modal>
  </div>
</template>

<style src="./arrayDefinitions.scss" scoped lang="scss"></style>
<script src="./arrayDefinitions.js"></script>
