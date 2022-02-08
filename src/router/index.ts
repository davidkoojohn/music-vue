import { createRouter, createWebHashHistory } from "vue-router"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Landing",
      component: () => import("../pages/Landing.vue")
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../pages/About.vue")
    }
  ]
})

export default router
