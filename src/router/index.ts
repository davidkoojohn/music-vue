import { createRouter, createWebHashHistory } from "vue-router"

const router = createRouter({
  history: createWebHashHistory(),
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "Landing",
      component: () => import("../pages/Landing.vue")
    },
    {
      path: "/artist/:id",
      component: () => import("../pages/ArtistDetail.vue"),
      children: [
        {
          path: "",
          name: "ArtistDetail",
          component: () => import("../pages/Artist/Detail.vue")
        },
        {
          path: "album",
          name: "ArtistAlbum",
          component: () => import("../pages/Artist/Album.vue")
        },
        {
          path: "mv",
          name: "ArtistMV",
          component: () => import("../pages/Artist/MV.vue")
        },
        {
          path: "simi",
          name: "ArtistSimi",
          component: () => import("../pages/Artist/Simi.vue")
        },
      ]
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../pages/About.vue")
    }
  ]
})

export default router
