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
                },
                {
                    path: '/guessdifferent',
                    component: () => import(/* webpackChunkName: "guessDifferent-view" */ '@views/guessDifferent/Index'),
                    children: [
                        {
                            path: '/',
                            name: 'guessDifferentHomePage',
                            component: () => import(/* webpackChunkName: "guessDifferentHomePage-view" */ '@views/guessDifferent/HomePage')
                        },
                        {
                            path: 'museum',
                            name: 'guessDifferentMuseum',
                            component: () => import(/* webpackChunkName: "guessDifferentMuseum-view" */ '@views/guessDifferent/Museum')
                        },
                        {
                            path: 'level',
                            name: 'guessDifferentLevel',
                            component: () => import(/* webpackChunkName: "guessDifferentLevel-view" */ '@views/guessDifferent/Level')
                        },
                        {
                            path: 'detail',
                            name: 'guessDifferentDetail',
                            component: () => import(/* webpackChunkName: "guessDifferentDetail-view" */ '@views/guessDifferent/Detail')
                        },
                        {
                            path: 'result',
                            name: 'guessDifferentResult',
                            component: () => import(/* webpackChunkName: "guessDifferentResult-view" */ '@views/guessDifferent/Result')
                        }
                    ]
                },
                {
                    path: '/novel',
                    name: 'novel',
                    component: () => import(/* webpackChunkName: "novel-view" */ '@views/novel/index')
                },
                {
                    path: '/project',
                    name: 'project',
                    component: () => import(/* webpackChunkName: "novel-view" */ '@views/huaguang/project')
                },
                {
                    path: '/demo',
                    name: 'demo',
                    component: () => import(/* webpackChunkName: "demo-view" */ '@views/novel/demo')
                }
            ]
        }
    ]
});
