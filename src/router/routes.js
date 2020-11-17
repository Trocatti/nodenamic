import Vue    from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    suppressTransitionError: true,
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../pages/home/Home.vue'),
            menu: false
        },
        {
            path: '*',
            name: 'notfound',
            component: () => import('../pages/notfound/Notfound.vue'),
            menu: false
        },
        {
            path: '/create',
            name: 'create',
            component: () => import('../pages/create/route/Create.vue'),
            title: 'Criar nova rota',
            menu: true
        },
        {
            path: '/search',
            name: 'search',
            type: 'search',
            component: () => import('../pages/search/route/Search.vue'),
            title: 'Pesquisar rotas',
            menu: true
        },
        {
            path: '/create/queue',
            name: 'create_queue',
            component: () => import('../pages/create/queue/Create.vue'),
            title: 'Criar nova fila',
            menu: true
        },
        {
            path: '/search/queue',
            name: 'search_queue',
            type: 'search',
            component: () => import('../pages/search/queue/Search.vue'),
            title: 'Pesquisar filas',
            menu: true
        },
    ]
})
