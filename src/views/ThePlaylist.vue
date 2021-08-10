<template>
  <div id="playlist-page">
    <nav>
      <ul>
        <router-link to="/collection/playlists"
          ><li :class="{ activeTab: isActive && isActive === 'Playlist' }">
            Playlists
          </li></router-link
        >
        <router-link to="/collection/podcasts">
          <li :class="{ activeTab: isActive && isActive === 'Podcasts' }">
            Podcasts
          </li>
        </router-link>
        <router-link to="/collection/artists">
          <li :class="{ activeTab: isActive && isActive === 'Artists' }">
            Artists
          </li>
        </router-link>
        <router-link to="/collection/albums">
          <li :class="{ activeTab: isActive && isActive === 'Albums' }">
            Albums
          </li>
        </router-link>
      </ul>
    </nav>
    <div
      class="create-playlist"
      v-if="currentLinkPage === '/collection/playlists'"
    >
      <div class="card-create">
        <svg
          width="90"
          height="91"
          viewBox="0 0 90 91"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Playlist Icon</title>
          <path
            d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z"
            fill="currentColor"
            fill-rule="evenodd"
          ></path>
        </svg>
        <div>
          <h1>Create your first playlist</h1>
          <h5>It's easy, we'll help you.</h5>
          <router-link to="/create-playlist"
            ><button id="createBtn">CREATE PLAYLIST</button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    isActive() {
      if (this.currentLinkPage === "/collection/playlists") {
        return "Playlist";
      } else if (this.currentLinkPage === "/collection/podcasts") {
        return "Podcasts";
      } else if (this.currentLinkPage === "/collection/artists") {
        return "Artists";
      } else if (this.currentLinkPage === "/collection/albums") {
        return "Albums";
      }
      return false;
    },
    currentLinkPage() {
      return this.$route.path;
    },
  },
};
</script>

<style scoped>
#playlist-page {
  padding: 1rem 3rem;
  position: relative;
}

#playlist-page nav {
  margin-left: 4rem;
  width: 90%;
  margin-top: -0.1rem;
  display: flex;
  flex-wrap: wrap;
}

@media only screen and (max-width: 656px) {
  #playlist-page nav {
    margin-left: 0.5rem;
  }
}

#playlist-page nav ul li {
  display: inline-block;
  padding: 0.5rem;
  margin: 0.5rem;
  margin-top: 0;
  background: #2e2e2e;
  color: #ffffff;
  border-radius: 0.3rem;
  min-width: 90px;
  max-width: 90px;
  text-align: center;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;
}

#playlist-page .create-playlist {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
}

#playlist-page .create-playlist .card-create {
  width: 25rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-align: center;
}

#playlist-page .create-playlist .card-create div {
  margin-top: 2rem;
}

#playlist-page .create-playlist .card-create #createBtn {
  width: 11rem;
  margin-top: 1rem;
  padding: 0.5rem;
  font-weight: 600;
  border: none;
  border-radius: 1.5rem;
  cursor: pointer;
  transition: all 0.2s;
}

#playlist-page .create-playlist .card-create #createBtn:hover {
  transform: scale(1.05);
}

.activeTab {
  background: #505050 !important;
}
</style>
