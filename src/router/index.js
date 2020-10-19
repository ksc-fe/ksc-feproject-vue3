import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/layout/Home.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/testbutton',
        name: 'TestButton',
        component: () =>
            import(/* webpackChunkName: "test" */ '../views/TestButton.vue')
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/layout/About.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
