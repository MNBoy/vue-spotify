import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/TheHome.vue";
import Search from "../views/TheSearch.vue";
import Playlist from "../views/ThePlaylist.vue";
import CreatePlaylist from "../views/CreatePlaylist.vue";
import LikedSongs from "../views/LikedSongs.vue";

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
    name: "Playlist",
    component: Playlist,
  },
  {
    path: "/create-playlist",
    name: "CreatePlaylist",
    component: CreatePlaylist,
  },
  {
    path: "/liked-songs",
    name: "LikedSongs",
    component: LikedSongs,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
