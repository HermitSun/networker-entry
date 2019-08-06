/**
 * meta 配置参数
 * @param {boolean} icon 页面icon
 * @param {boolean} keepAlive 是否缓存页面
 * @param {string} title 页面标题
 */
export default [
    {
        path: '/',
        name: '测试',
        component: () => import('views/Index.vue'),
        meta: {
            title: '测试',
            keepAlive: true
        }
    },
    {
        path: '/404',
        name: '找不到页面',
        component: () => import('views/PageNotFound.vue'),
        meta: {
            title: '找不到页面',
            keepAlive: true
        }
    },
    {
        path: '*',
        redirect: '/404'
    }
];
