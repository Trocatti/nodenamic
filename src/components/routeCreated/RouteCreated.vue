<template>
  <b-modal ref="success-modal" v-model="showSelf" hide-footer title="Rota criada com sucesso!">
    <div class="d-block text-center">
      <h5>Caminho: {{internalPath}}</h5>
    </div>
    <b-button class="mt-5" variant="outline-danger" block @click="closeModal">Fechar</b-button>
  </b-modal>
</template>

<script src="./routeCreated.js"></script>