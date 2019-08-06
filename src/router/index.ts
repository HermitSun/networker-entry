import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    // 锚点跳转
    scrollBehavior: (to) => {
        if (to.hash) {
            return {
                selector: to.hash
            };
        }
    }
});

router.beforeEach((to, from, next) => {
    next();
});

export default router;
