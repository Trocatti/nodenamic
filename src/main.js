import Vue from 'vue';
import VueResource from 'vue-resource';

import App from './App';
import router from './router/routes';
import store from './store/store';

Vue.use(VueResource);
Vue.http.options.root = process.env.VUE_APP_ROOT_API;

Vue.config.productionTip = false;
Vue.config.devtools = process.env.NODE_ENV === 'development';

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
