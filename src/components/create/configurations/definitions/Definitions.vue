<template>
  <div id="definitions">
    <b-modal ref="defs-modal" v-model="showSelf" title="Definições do modelo" hide-footer>
      <div class="d-block text-center">
        <template v-for="(d, i) in def">
          <div role="tablist" :key="i">
            <b-card no-body class="mb-2">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle="i" variant="outline-info">{{ i.toUpperCase() }}</b-button>
              </b-card-header>
              <b-collapse :id="i" :accordion="i" role="tabpanel">
                <b-card-body>
                  <b-card-text>
                    <template v-for="(text, title) in d">
                      <div class="content m-2" :key="title">
                        <b class="mr-2">{{title}}:</b>
                        <span class="text">{{text}}</span>
                      </div>
                    </template>
                    <Copy
                      :values="d"
                      @updateReferenceField="updateReferenceField"
                      @closeModal="closeModal"
                    />
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </template>
      </div>
      <b-button class="mt-5" variant="outline-danger" block @click="closeModal">Fechar</b-button>
    </b-modal>
  </div>
</template>

<style src="./definitions.scss" scoped lang="scss"></style>
<script src="./definitions.js"></script>
