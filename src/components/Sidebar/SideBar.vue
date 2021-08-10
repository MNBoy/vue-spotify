<template>
  <div id="side-bar-back"></div>
  <section id="side-bar">
    <div
      class="item"
      :class="{ active: isActive && isActive === 'H' }"
      @click="openLink('')"
    >
      <img
        v-if="currentLinkPage === '/'"
        class="logo"
        src="../../assets/icons/home.png"
        width="22"
        alt="Home"
      />

      <img
        v-else
        class="logo"
        src="../../assets/icons/home-stroke.png"
        width="22"
        alt="Home"
      />

      <span class="labelSidebar">Home</span>
    </div>
    <div
      class="item"
      :class="{ active: isActive && isActive === 'S' }"
      @click="openLink('search')"
    >
      <img
        class="logo"
        src="../../assets/icons/search.png"
        width="25"
        alt="Search"
      />
      <span class="labelSidebar">Search</span>
    </div>
    <div
      class="item"
      :class="{ active: isActive && isActive === 'Y' }"
      @click="openLink('collection/playlists')"
    >
      <img
        class="logo"
        src="../../assets/icons/library.png"
        width="25"
        alt="Your Library"
      />
      <span class="labelSidebar">Your Library</span>
    </div>
    <div
      class="item"
      :class="{ active: isActive && isActive === 'C' }"
      @click="openLink('create-playlist')"
    >
      <img class="logo" src="../../assets/icons/add.png" width="25" alt="Add" />
      <span class="labelSidebar">Create Playlist</span>
    </div>
    <div
      class="item"
      :class="{ active: isActive && isActive === 'L' }"
      @click="openLink('liked-songs')"
    >
      <img
        class="logo"
        src="../../assets/icons/like.png"
        width="25"
        alt="Like"
      />
      <span class="labelSidebar">Liked Songs</span>
    </div>
    <div class="divider"></div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    isActive() {
      if (this.currentLinkPage === "/") {
        return "H";
      } else if (this.currentLinkPage=== "/search") {
        return "S";
      } else if (this.currentLinkPage=== "/collection/playlists") {
        return "Y";
      } else if (this.currentLinkPage=== "/create-playlist") {
        return "C";
      } else if (this.currentLinkPage=== "/liked-songs") {
        return "L";
      }

      return false;
    },
    showLabel() {
      return screen.width > 1000;
    },
    currentLinkPage() {
      return this.$route.path;
    },
  },
  methods: {
    openLink(link) {
      this.$router.push("/" + link);
    },
  },
};
</script>

<style scoped>
/* Sidebar Section  */

#side-bar-back {
  width: 18%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  background: #000;
  padding: 0.5rem;
  z-index: 5;
}

#side-bar {
  position: fixed;
  left: 0;
  width: 15%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  background: #000;
  padding: 0.5rem;
  z-index: 10;
}

#side-bar .item {
  display: flex;
  justify-content: flex-start;
  padding: 1rem;
  align-items: center;
  margin-bottom: 1rem;
  color: #c9c9c9;
  width: 100%;
  height: 2.5rem;
  border-radius: 0.3rem;
  transition: all 0.1s;
  overflow: hidden;
}

#side-bar .item:nth-child(4) {
  margin-top: 1rem;
}

#side-bar .item:hover {
  color: #fff;
  cursor: pointer;
}

#side-bar .active {
  background: #282828;
  color: #fff;
}

#side-bar .item .logo {
  opacity: 0.5;
  margin-right: 1rem;
  margin-bottom: 0.2rem;
  transition: all 0.3s;
}

#side-bar .item:hover .logo {
  opacity: 1;
}

#side-bar .active .logo {
  opacity: 1;
}

.divider {
  width: 100%;
  height: 0.12rem;
  border-radius: 0.3rem;
  background: #282828;
}

@media only screen and (max-width: 656px) {
  .labelSidebar {
    display: none;
  }

  #side-bar .item .logo {
    margin-right: 0;
  }
}
</style>