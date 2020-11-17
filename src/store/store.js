import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        hasEndpoints: false,
        hasRoutesChild: false,
        isRoutesChild: false,
        loadingWizard: false,
        endpoints: {},
        jsonObjects: {},
        jsonData: {},
    },
    mutations: {
        SET_ENDPOINT: (state, endpoints) => {
            state.endpoints = endpoints;
            state.hasEndpoints = endpoints.route != undefined
        },
        SET_JSON_OBJECTS: (state, object) => state.jsonObjects[object.key] = object.value,
        SET_JSON_DATA: (state, data) => state.jsonData = data,
        SET_LOADING_WIZARD: (state, flag) => state.loadingWizard = flag,
        SET_HAS_ROUTES_CHILD: (state, flag) => state.hasRoutesChild = flag,
        SET_IS_ROUTES_CHILD: (state, flag) => state.isRoutesChild = flag,
        RESET_JSON_OBJECTS: (state) => state.jsonObjects = {},
    },
    actions: {
        setEndpoints: ({ commit }, endpoints) => commit('SET_ENDPOINT', endpoints),
        setJsonObjects: ({ commit }, object) => commit('SET_JSON_OBJECTS', object),
        setJsonData: ({ commit }, data) => commit('SET_JSON_DATA', data),
        setLoadingWizard: ({ commit }, flag) => commit('SET_LOADING_WIZARD', flag),
        setHasRoutesChild: ({ commit }, flag) => commit('SET_HAS_ROUTES_CHILD', flag),
        setIsRoutesChild: ({ commit }, flag) => commit('SET_IS_ROUTES_CHILD', flag),
        resetJsonObjects: ({ commit }) => commit('RESET_JSON_OBJECTS'),
    }


});
