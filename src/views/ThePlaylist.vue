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
      v-if="currentLinkPage === '/collection/playlists' && playlists.length < 1"
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
    <div
      class="create-playlist"
      v-if="currentLinkPage === '/collection/podcasts'"
    >
      <div class="card-create">
        <svg
          width="90"
          height="90"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Show</title>
          <path
            d="M319.261 652.453q23.15 27.685 55.388 48.318l-27.685 32.22q-34.233-22.651-59.907-52.853-52.355-60.926-66.459-138.693t12.086-152.28 87.092-126.364q11.587-10.069 27.187-20.137l27.685 32.22q-16.122 10.584-27.187 20.137-52.355 44.804-74.759 108.476t-10.321 130.147 56.89 118.808zM865.98 185.789q60.422 70.994 88.843 158.315t20.904 179.986q-5.034 61.924-25.172 119.312t-54.621 107.725-81.809 90.629q-11.587 9.565-26.688 20.652l-27.685-32.22q15.103-10.584 27.187-20.652 63.923-55.388 101.944-129.632t44.804-158.83-19.119-164.116-80.812-143.979q-31.722-36.756-74.003-67.456l27.685-32.22q44.804 32.719 78.522 72.489zM190.382 762.714q31.722 36.756 74.003 67.456l-27.685 32.22q-44.3-32.719-78.522-72.489-60.422-70.994-88.843-158.315t-21.156-180.238 49.072-174.689 112.758-142.711q11.587-9.565 26.688-20.652l27.685 32.22q-15.103 10.584-27.187 20.652-64.942 55.892-102.691 132.145t-44.037 156.317 18.867 161.351 81.062 146.748zM512.061 360.97q52.355 0 89.61 37.254t37.254 89.61q0 46.823-30.206 82.058t-75.525 42.786v298.026h-42.288v-298.026q-29.702-5.034-53.854-22.651t-38.001-44.552-13.832-57.638q0-52.355 37.254-89.61t89.61-37.254zM512.061 572.408q35.241 0 59.907-24.92t24.668-59.655-24.92-59.655-59.655-24.92-59.655 24.92-24.92 59.655q0 23.15 11.338 42.537t30.721 30.721 42.537 11.338zM737.104 295.533q52.355 60.926 66.459 138.693t-12.086 152.28-87.092 126.364q-11.587 10.069-27.187 20.652l-27.685-32.719q16.122-10.584 27.187-20.137 52.355-44.3 74.759-108.224t10.321-130.399-56.89-118.808q-23.15-27.685-55.388-48.318l27.685-32.22q33.718 22.651 59.907 52.853z"
            fill="currentColor"
            fill-rule="evenodd"
          ></path>
        </svg>
        <div>
          <h1>Follow your first podcast</h1>
          <h5>Follow podcasts you like by tapping the follow button.</h5>
          <router-link to="/search"
            ><button id="createBtn">FIND PODCASTS</button></router-link
          >
        </div>
      </div>
    </div>
    <div
      class="create-playlist"
      v-if="currentLinkPage === '/collection/artists'"
    >
      <div class="card-create">
        <svg
          height="90"
          role="img"
          width="90"
          viewBox="0 0 64 64"
          testid="artist-icon"
        >
          <path
            d="M35.711 34.619l-4.283-2.461a1.654 1.654 0 0 1-.808-1.156 1.65 1.65 0 0 1 .373-1.36l3.486-4.088a14.3 14.3 0 0 0 3.432-9.293V14.93c0-3.938-1.648-7.74-4.522-10.435C30.475 1.764 26.658.398 22.661.661c-7.486.484-13.35 6.952-13.35 14.725v.875c0 3.408 1.219 6.708 3.431 9.292l3.487 4.089a1.656 1.656 0 0 1-.436 2.516l-8.548 4.914A14.337 14.337 0 0 0 0 49.513V53.5h2v-3.987c0-4.417 2.388-8.518 6.237-10.705l8.552-4.916a3.648 3.648 0 0 0 1.783-2.549 3.643 3.643 0 0 0-.822-2.999l-3.488-4.091a12.297 12.297 0 0 1-2.951-7.993v-.875c0-6.721 5.042-12.312 11.479-12.729 3.449-.22 6.725.949 9.231 3.298a12.182 12.182 0 0 1 3.89 8.976v1.331c0 2.931-1.048 5.77-2.952 7.994l-3.487 4.089a3.653 3.653 0 0 0-.822 3 3.653 3.653 0 0 0 1.782 2.548l3.036 1.745a11.959 11.959 0 0 1 2.243-1.018zM45 25.629v15.289a7.476 7.476 0 0 0-5.501-2.418c-4.135 0-7.5 3.365-7.5 7.5s3.364 7.5 7.5 7.5 7.5-3.365 7.5-7.5V29.093l5.861 3.384 1-1.732L45 25.629zM39.499 51.5a5.506 5.506 0 0 1-5.5-5.5c0-3.033 2.467-5.5 5.5-5.5s5.5 2.467 5.5 5.5-2.467 5.5-5.5 5.5z"
            fill="currentColor"
            fill-rule="evenodd"
          ></path>
        </svg>
        <div>
          <h1>Follow your first artist</h1>
          <h5>Follow artists you like by tapping the follow button.</h5>
          <router-link to="/search"
            ><button id="createBtn">FIND ARTISTS</button></router-link
          >
        </div>
      </div>
    </div>
    <div
      class="create-playlist"
      v-if="currentLinkPage === '/collection/albums'"
    >
      <div class="card-create">
        <svg
          width="90"
          height="90"
          viewBox="0 0 52 52"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Album</title>
          <path
            d="M26 0.00100708C11.641 0.00100708 0 11.642 0 26.001C0 40.36 11.641 52.001 26 52.001C40.36 52 52 40.36 52 26C52 11.64 40.36 0.00100708 26 0.00100708ZM26 50C12.767 50 2 39.234 2 26C2 12.766 12.767 2.00001 26 2.00001C39.234 2.00001 50 12.766 50 26C50 39.234 39.234 50 26 50ZM26 18C21.582 18 18 21.582 18 26C18 30.418 21.582 34 26 34C30.418 34 34 30.418 34 26C34 21.582 30.419 18 26 18ZM26 32C22.692 32 20 29.309 20 26C20 22.691 22.692 20 26 20C29.308 20 32 22.691 32 26C32 29.309 29.309 32 26 32Z"
            fill="currentColor"
            fill-rule="evenodd"
          ></path>
        </svg>
        <div>
          <h1>Follow your first album</h1>
          <h5>Save albums by tapping the heart icon.</h5>
          <router-link to="/search"
            ><button id="createBtn">FIND ALBUMS</button></router-link
          >
        </div>
      </div>
    </div>
    <div
      class="playlists"
      v-if="currentLinkPage === '/collection/playlists' && playlists.length > 0"
    >
      <h2>Playlists</h2>
      <div class="show-card">
        <div class="liked-songs">
          <h1>Liked Songs</h1>
          <h4>0 Liked Songs</h4>
          <img
            src="../assets/icons/play.png"
            width="55"
            alt="cover"
            loading="lazy"
          />
        </div>
        <div
          class="card-playlist"
          v-for="playlist in playlists"
          :key="playlist.id"
        >
          <div class="icon">
            <svg
              height="180"
              role="img"
              width="180"
              viewBox="-20 -25 100 100"
              class="DeZUaoyaDtLMNKg6osSk vqvv90_26hb91AuKeNmu"
              aria-hidden="true"
              data-testid="card-image-fallback"
            >
              <path
                d="M16 7.494v28.362A8.986 8.986 0 0 0 9 32.5c-4.962 0-9 4.038-9 9s4.038 9 9 9 9-4.038 9-9V9.113l30-6.378v27.031a8.983 8.983 0 0 0-7-3.356c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9s9-4.037 9-9V.266L16 7.494zM9 48.5c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7c0 3.859-3.141 7-7 7zm32-6.09c-3.86 0-7-3.14-7-7 0-3.859 3.14-7 7-7s7 3.141 7 7c0 3.861-3.141 7-7 7z"
              ></path>
            </svg>
          </div>
          <img
            class="controlBtn"
            src="../assets/icons/play.png"
            width="45"
            alt="cover"
            loading="lazy"
          />
          <h4>{{ playlist.name }}</h4>
          <p>By MNBoy</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playlists: [],
    };
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
  methods: {
    getPlaylist() {
      this.playlists = this.$store.getters["playlist/getPlaylists"];
    },
  },
  created() {
    this.getPlaylist();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");

#playlist-page {
  padding: 1rem 3rem;
  position: relative;
  margin-bottom: 7rem;
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

.activeTab {
  background: #505050 !important;
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
  text-decoration: underline;
}

#playlist-page .playlists {
  padding: 1rem;
  color: #ffffff;
}

#playlist-page .playlists h2 {
  font-weight: 700;
}

#playlist-page .playlists .show-card {
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
}

#playlist-page .create-playlist .card-create h1 {
  font-weight: 700;
}

#playlist-page .create-playlist .card-create h5 {
  font-weight: 500;
}

#playlist-page .playlists .liked-songs {
  width: 400px;
  height: 240px;
  background: linear-gradient(149.46deg, #450af5, #8e8ee5 99.16%);
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  position: relative;
}

#playlist-page .playlists .liked-songs h1 {
  font-weight: 600;
  font-size: 2rem;
}

#playlist-page .playlists .liked-songs h4 {
  font-weight: 500;
}

#playlist-page .playlists .liked-songs img {
  position: absolute;
  bottom: -2rem;
  right: 1rem;
  transition: all 0.3s;
  opacity: 0;
  visibility: hidden;
}

#playlist-page .playlists .liked-songs:hover img {
  bottom: 1rem;
  visibility: visible;
  opacity: 1 !important;
}

#playlist-page .playlists .liked-songs img:hover {
  transform: scale(1.1);
}

#playlist-page .playlists .card-playlist {
  position: relative;
  max-width: 11rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0.8rem;
  background: #1e1e1e;
  color: #fff;
  border-radius: 0.4rem;
  overflow: hidden;
  transition: all 0.2s;
  box-shadow: rgba(0, 0, 0, 0.123) 0px 6px 6px;
  margin-left: 1rem;
  margin-bottom: 1rem;
}

#playlist-page .playlists .card-playlist h4 {
  text-align: left;
}

#playlist-page .playlists .card-playlist .icon {
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #282828;
  margin-bottom: 1rem;
  box-shadow: 0 4px 60px rgb(0 0 0 / 50%);
}

#playlist-page .playlists .card-playlist .icon svg {
  fill: #b3b3b3;
  stroke: #b3b3b3;
}

#playlist-page .playlists .card-playlist:hover {
  background: #292929;
}

#playlist-page .playlists .card-playlist img:nth-child(2) {
  position: absolute;
  bottom: 3rem;
  right: 1rem;
  transition: all 0.3s;
  opacity: 0;
}

#playlist-page .playlists .card-playlist:hover img:nth-child(2) {
  bottom: 4.8rem;
  opacity: 1 !important;
}

#playlist-page .playlists .card-playlist img:nth-child(2):hover {
  transform: scale(1.1);
}

#playlist-page .playlists .card-playlist .playlistActive {
  bottom: 5.8rem !important;
  opacity: 1 !important;
}

#playlist-page .playlists .card-playlist h4 {
  font-weight: 600;
}

#playlist-page .playlists .card-playlist p {
  font-size: 0.9rem;
  opacity: 0.7;
}
</style>
