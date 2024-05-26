// 这里导入这两个路由函数 下面调用设置路由模式
//        history模式         哈希模式
import { createRouter, createWebHistory } from "vue-router";
// 如何得到路由实例 createRouter()
// 如何设置路由模式 history
// history 模式 createWebHistory()// hash 模式 createwebHashHistory()

const router = createRouter({
  // createWebHistory这个函数有个默认参数是'/' 路由的基础路由
  // (import.meta.env.BASE_URL) 在vite.config.ts文件中控制
  history: createWebHistory(import.meta.env.BASE_URL),
  // 路由给规则配置
  routes: [
    {
      // 一级路由
      path: "/login",
      name: "login",
      component: () => import("../views/login/index.vue"),
      // children这个属性是设置2级路由     2路由也要出口 放在2级路由组件里
      children: [
        {
          // 默认2级路由path设置为空  当你访问一级路由的时候2级路由也会渲染
          path: "",
          name: "",
          component: () => import("../router"),
        },
      ],
    },
  ],
});

export default router;
