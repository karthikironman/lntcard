import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'mainPage',
            component:() => import('../components/pages/welcome.vue'),
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component:() => import('../components/pages/dashboard.vue'),
        }, {
            path: '/pickup',
            name: 'pickup',
            component:() => import('../components/pages/pickup.vue'),
        }, {
            path: '/serve',
            name: 'serve',
            component:() => import('../components/pages/serve.vue'),
        }, {
            path: '/drop',
            name: 'drop',
            component:() => import('../components/pages/drop.vue'),
        },
        {
            path: '*',
            name: '',
            component: () => import('../components/pages/pageNotFound.vue'),
            beforeEnter: (to, from, next) => {
                if (!sessionStorage.getItem("loggedIn")) {
                    next("/");
                } else {
                    next();
                }
            }
        }

    ]
})
