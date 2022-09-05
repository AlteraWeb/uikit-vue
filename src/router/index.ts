import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { nextFactory } from "./utils";

const routes: Array<RouteRecordRaw> = [];
// @ts-ignore
const requireRoute = require.context("@/pages", true, /router(.*)index.ts$/);

requireRoute.keys().forEach((fileName: any) => {
  routes.push(...requireRoute(fileName).default);
});

routes.push({
  path: "/:pathMatch(.*)*",
  name: "Error",
  component: () => import("../pages/404.vue"),
  meta: {
    title: "Page not found",
  },
});
routes.map((el: RouteRecordRaw) => {
  if (el?.meta && !el?.meta?.layout) el.meta.layout = "empty";
  return el;
});

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to: any, from: any, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];

    const context = {
      from,
      next,
      router,
      to,
    };
    const nextMiddleware = nextFactory({
      context: context,
      middleware: middleware,
      index: 1,
    });

    return middleware[0]({ ...context, next: nextMiddleware });
  }

  return next();
});

export default router;
