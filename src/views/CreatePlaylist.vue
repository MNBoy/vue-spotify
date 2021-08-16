<template>
  <div id="create-playlist">
    
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
    async addPlaylist() {
      const playlist = await this.$store.dispatch("playlist/addPlayList");
      this.$router.replace('/playlist/' + playlist.id);
    },
  },
  created() {
    this.addPlaylist();
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
</style>
