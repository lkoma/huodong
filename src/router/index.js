import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Base',
            component: () => import(/* webpackChunkName: "base-view" */ '@src/App'),
            redirect: { name: 'Huaguang' },
            children: [
                {
                    path: '/huaguang',
                    name: 'Huaguang',
                    component: () => import(/* webpackChunkName: "huaguang-view" */ '@views/huaguang/Index')
                }
            ]
        }
    ]
});
