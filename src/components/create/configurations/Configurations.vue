<template>
  <div id="config">
    <vue-topprogress ref="topProgress"></vue-topprogress>

    <b-tabs fill v-model="tabIndex">
      <b-tab title="Rota" active :disabled="isRowSelectedInField">
        <Route
          id="routeForm"
          :route="route"
          @verifyRouteFormValidation="verifyRouteFormValidation"
        />
      </b-tab>
      <b-tab title="Campos Modelo" :disabled="fieldDisable">
        <Fields id="fieldForm" :fields="route.fields" @isRowSelected="isRowSelected" v-if="tabIndex == 1"/>
      </b-tab>
      <b-tab title="Criar rota" :disabled="createRouteDisable || isRowSelectedInField">
        <b-row id="createRoute" class="mt-3 mb-4 justify-content-center">
          <div class="cards-container">
            <b-button class="cards-content" variant="none" @click="generateRoute(createRoute)">
              <div class="card-icon mb-4">
                <v-icon name="plus" />
              </div>
              <div class="card-text">
                <span>Criar rota</span>
              </div>
            </b-button>
          </div>

          <div class="cards-container">
            <b-button class="cards-content" variant="none" @click="generateRoute(editRoute)">
              <div class="card-icon mb-4">
                <v-icon name="pencil-alt" />
              </div>
              <div class="card-text">
                <span>Editar rota</span>
              </div>
            </b-button>
          </div>
        </b-row>
      </b-tab>
    </b-tabs>
    <div class="text-center">
      <b-button-group class="mt-2">
        <b-button
          :disabled="tabIndex == 0 || isRowSelectedInField"
          variant="primary"
          class="mr-1"
          @click="tabIndex--"
        >
          <v-icon name="arrow-left" class="mr-1" />Anterior
        </b-button>
        <b-button
          :disabled="tabIndex == 2 || isRowSelectedInField"
          variant="primary"
          @click="nextTab"
        >
          Próximo
          <v-icon name="arrow-right" class="ml-1" />
        </b-button>
      </b-button-group>
    </div>

    <RouteCreated
      :showModal="routeCreateModalVisibility"
      :path="route.path"
      v-if="routeCreateModalVisibility"
      @showSelf="routeCreateModalVisibility = $event"
    />
  </div>
</template>
<style scoped>
</style>

<style src="./configurations.scss" lang="scss" scoped></style>
<script src="./configurations.js"></script>
