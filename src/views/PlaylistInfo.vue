<template>
  <div id="create-playlist">
    <section>
      <div id="header">
        <div class="icon">
          <svg
            width="80"
            height="81"
            viewBox="0 0 80 81"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Playlist Icon</title>
            <path
              d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z"
            ></path>
          </svg>
        </div>
        <div id="caption">
          <p>Playlist</p>
          <h1>{{ playlist.name }}</h1>
          <p>MNBoy</p>
        </div>
      </div>
      <div id="content">
        <svg
          role="img"
          height="32"
          width="32"
          viewBox="0 0 32 32"
          class="Svg-sc-1bi12j5-0 fIDrcz"
          @click="toggleMenu"
        >
          <path
            d="M5.998 13.999A2 2 0 105.999 18a2 2 0 00-.001-4zm10.001 0A2 2 0 1016 18a2 2 0 000-4zm10.001 0A2 2 0 1026.001 18 2 2 0 0026 14z"
          ></path>
        </svg>
        <div id="context-menu" data-placement="top-start" v-if="menu">
          <ul tabindex="0" role="menu" data-depth="0">
            <li role="presentation" class="item">
              <button role="menuitem" tabindex="-1">
                <span as="span" dir="auto">Add to queue</span>
              </button>
            </li>
            <li role="presentation" class="item">
              <button role="menuitem" tabindex="-1">
                <span as="span" dir="auto">Go to playlist radio</span>
              </button>
            </li>
            <li role="presentation" class="item">
              <button role="menuitem" tabindex="-1">
                <span as="span" dir="auto">Go to playlist radio</span>
              </button>
            </li>
            <div class="divider"></div>
            <li role="presentation" class="item">
              <button role="menuitem" tabindex="-1">
                <span as="span" dir="auto">Edit details</span>
              </button>
            </li>
            <li role="presentation" class="item" @click="deletePlaylist">
              <button role="menuitem" tabindex="-1">
                <span as="span" dir="auto">Delete</span>
              </button>
            </li>
            <div class="divider"></div>
            <li role="presentation" class="item">
              <button role="menuitem" tabindex="-1">
                <span as="span" dir="auto">Open in Desktop app</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      playlist: null,
    };
  },
  methods: {
    toggleMenu() {
      this.menu = !this.menu;
    },
    getPlaylist() {
      const playlists = this.$store.getters["playlist/getPlaylists"];
      const id = this.$route.params.id;
      this.playlist = playlists.find((p) => p.id === id);
    },
    async deletePlaylist() {
      await this.$store.dispatch("playlist/deletePlayList", {
        id: this.playlist.id,
      });
      this.$router.replace("/");
    },
  },
  watch: {
    $route() {
      this.getPlaylist();
    },
  },
  created() {
    this.getPlaylist();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");

#create-playlist {
  position: relative;
  background: linear-gradient(to top, #1b1b1b 58%, #2b2b2b 58%);
}

#create-playlist section {
  width: 100%;
  height: 100vh;
  padding: 5rem 3rem;
}

#create-playlist section #header {
  display: flex;
  align-items: flex-end;
}

#create-playlist section #header .icon {
  width: 230px;
  height: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #282828;
  box-shadow: 0 4px 60px rgb(0 0 0 / 50%);
}

#create-playlist section #header .icon svg {
  fill: #7f7f7f;
}

#create-playlist section #header #caption {
  margin-left: 1rem;
}

#create-playlist section #header #caption p {
  color: #fff;
  font-weight: 600;
  font-size: 0.9rem;
}

#create-playlist section #header #caption h1 {
  color: #fff;
  font-size: 5rem;
}

#create-playlist section #content {
  width: 100%;
  height: 70%;
  padding-top: 3rem;
  fill: #7f7f7f;
}

#create-playlist section #content svg {
  cursor: pointer;
}

#create-playlist section #content #context-menu {
  border: 0;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  display: flex;
}

#create-playlist section #content #context-menu ul {
  -webkit-app-region: no-drag;
  background-color: #282828;
  border-radius: 4px;
  -webkit-box-shadow: 0 16px 24px rgb(0 0 0 / 30%), 0 6px 8px rgb(0 0 0 / 20%);
  box-shadow: 0 16px 24px rgb(0 0 0 / 30%), 0 6px 8px rgb(0 0 0 / 20%);
  max-height: calc(100vh - 24px);
  max-width: 350px;
  min-width: 160px;
  overflow-y: auto;
  padding: 0.3rem;
}

#create-playlist section #content #context-menu ul .divider {
  height: 1px;
  margin: 0;
  padding: 0;
  border-top: 1px solid #7f7f7f;
}

#create-playlist section #content #context-menu ul li {
  padding: 0.5rem;
  list-style: none;
  border-radius: 0.2rem;
  cursor: pointer;
}

#create-playlist section #content #context-menu ul li:hover {
  background: #ffffff1a;
}

#create-playlist section #content #context-menu ul button {
  background: none;
  border: none;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
}
</style>
