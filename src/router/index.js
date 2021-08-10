import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/TheHome.vue";
import Search from "../views/TheSearch.vue";
import Playlist from "../views/ThePlaylist.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/collection/playlists",
    name: "Playlists",
    component: Playlist,
  },
  {
    path: "/collection/podcasts",
    name: "Podcasts",
    component: Playlist,
  },
  {
    path: "/collection/artists",
    name: "Artists",
    component: Playlist,
  },
  {
    path: "/collection/albums",
    name: "Albums",
    component: Playlist,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
