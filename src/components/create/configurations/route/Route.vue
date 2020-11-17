<template>
  <ValidationObserver ref="validationObserver">
    <b-form class="mt-2">
      <div class="w-100 d-flex aligns-item-center">
        <div class="w-50 p-3">
          <ValidationProvider
            rules="required|min:5|max:19"
            v-slot="{ errors }"
            name="Nome da rota"
          >
            <b-form-group
              id="input-group-name"
              label="Nome da rota:"
              label-for="input-name"
            >
              <b-form-input
                id="input-name"
                v-model="route.name"
                :state="!!!errors[0]"
                :formatter="format"
                type="text"
                autocomplete="off"
                placeholder="Informe o nome da rota..."
                @input="onInput"
                v-focus
              ></b-form-input>
              <b-form-invalid-feedback :state="!!!errors[0]">{{
                errors[0]
              }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider
            rules="required|min:3|max:19"
            v-slot="{ errors }"
            name="Caminho rota"
          >
            <b-form-group
              id="input-group-path"
              label="Caminho rota:"
              label-for="input-path"
              description="Exemplo: /route/path/"
            >
              <b-form-input
                id="input-path"
                v-model="route.path"
                :state="!!!errors[0]"
                :formatter="format"
                type="text"
                placeholder="Informe o caminho da rota..."
                autocomplete="off"
                @input="onInput"
              ></b-form-input>
              <b-form-invalid-feedback :state="!!!errors[0]">{{
                errors[0]
              }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>
        </div>

        <div class="w-50 p-3">
          <ValidationProvider
            rules="required|min:3|max:19"
            v-slot="{ errors }"
            name="Nome da tabela"
          >
            <b-form-group
              id="input-group-bucket"
              label="Nome da tabela:"
              label-for="input-bucket"
              description="Exemplo: bucket_name"
            >
              <b-form-input
                id="input-bucket"
                v-model="route.bucket"
                :state="!!!errors[0]"
                :formatter="format"
                type="text"
                placeholder="Informe o nome da coleção..."
                autocomplete="off"
                @input="onInput"
              ></b-form-input>
              <b-form-invalid-feedback :state="!!!errors[0]">{{
                errors[0]
              }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <div class="d-flex">
            <b-form-group
              id="input-group-has-child"
              label="Rota de exclusão e atualização:"
              label-for="input-has-child"
            >
              <SwitchDyn
                :model="route.hasChild"
                :name="'hasChild'"
                @event="onChangeHasChild"
              >
                <TooltipLabel :tooltip="tooltip.hasChild" />
              </SwitchDyn>
            </b-form-group>

            <b-form-group
              id="input-group-is-child"
              label="Rota descendente:"
              label-for="input-is-child"
              class="mr-4"
            >
              <SwitchDyn
                :model="route.isChild"
                :name="'isChild'"
                @event="onChangeIsChild"
              >
                <TooltipLabel :tooltip="tooltip.isChild" />
              </SwitchDyn>
            </b-form-group>

            <ValidationProvider
              rules="required|min_value:1|max_value:3"
              v-slot="{ errors }"
              name="Versão da rota"
            >
              <b-form-group
                id="input-group-version"
                label="Versão da rota:"
                label-for="input-version"
                class="mr-5 d-flex align-items-center w-75"
              >
                <b-form-input
                  id="input-bucket"
                  v-model="route.version"
                  :state="!!!errors[0]"
                  type="number"
                  min="1"
                  max="3"
                ></b-form-input>
              </b-form-group>
              <b-form-invalid-feedback :state="!!!errors[0]">{{
                errors[0]
              }}</b-form-invalid-feedback>
            </ValidationProvider>
          </div>
        </div>
      </div>
    </b-form>
  </ValidationObserver>
</template>

<script src="./route.js"></script>
