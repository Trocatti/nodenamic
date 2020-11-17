<style src="./create.scss" lang="scss"></style>
<style src="./create-scoped.scss" lang="scss" scoped></style>

<template>
  <div id="create" class="container mt-2">
    <vue-topprogress ref="topProgress"></vue-topprogress>

    <b-alert
      v-model="showDismissibleAlert"
      variant="danger"
      dismissible
    >Ocorreu um erro inesperado, favor contatar o administrador.</b-alert>

    <b-modal ref="success-modal" v-model="modalShow" hide-footer title="Rota criada com sucesso!">
      <div class="d-block text-center">
        <h5>Caminho: {{path}}</h5>
      </div>
      <b-button class="mt-5" variant="outline-danger" block @click="hideModal">Fechar</b-button>
    </b-modal>

    <form-wizard
      title="Novo Endpoint"
      subtitle="Novo endpoint, mais rápido, mais fácil"
      ref="wizard"
      @on-complete="onComplete"
      @on-loading="setLoading"
      @on-change="onChangeTab"
    >
      <template v-for="(c, i) in components">
        <tab-content :title="c.t" :key="c.t" :before-change="validateAsync">
          <transition name="fade">
            <component
              :is="c.c"
              v-if="tab == i"
              @error="showDismissibleAlert = $event"
              @executeInFather="executeNextTab"
            ></component>
          </transition>
        </tab-content>
      </template>

      <template slot="footer" slot-scope="props">
        <div class="wizard-footer-left">
          <wizard-button
            @click.native="props.prevTab()"
            v-if="props.activeTabIndex > 1"
            :style="props.fillButtonStyle"
          >
            <v-icon name="chevron-left" scale="2" />
          </wizard-button>
        </div>

        <div class="wizard-footer-right">
          <wizard-button
            @click.native="props.nextTab()"
            v-show="!props.isLastStep && hasEndpoints"
            class="wizard-footer-right"
            ref="nextTab"
            :style="props.fillButtonStyle"
          >
            <v-icon name="chevron-right" scale="2" />
          </wizard-button>

          <wizard-button
            @click.native="complete"
            v-if="props.isLastStep"
            class="wizard-footer-right finish-button"
            :style="props.fillButtonStyle"
          >
            <v-icon name="regular/check-circle" scale="3" />
          </wizard-button>
        </div>
      </template>

      <div v-if="loadingWizard" class="spinner">
        <v-icon name="circle-notch" class="spin" spin scale="6" />
      </div>
    </form-wizard>
  </div>
</template>

<script src="./create.js"></script>