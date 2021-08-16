<template>
  <div id="search-page">
    <div class="cover-top"></div>
    <section id="search-top-section">
      <img
        id="searchLogo"
        src="../assets/icons/search-black.png"
        width="25"
        alt="search logo"
      />
      <input
        type="search"
        id="searchInp"
        placeholder="Artists, songs, or products"
      />
    </section>
    <section class="search-playlists">
      <div class="titlePlaylist"><h1>Your top genres</h1></div>
      <div class="card-top-genres">
        <h3>Pop</h3>
        <img
          src="https://t.scdn.co/images/0a74d96e091a495bb09c0d83210910c3"
          width="130"
          alt="cover"
          loading="lazy"
        />
      </div>
      <div class="card-top-genres">
        <h3>Dance / Electronic</h3>
        <img
          src="https://i.scdn.co/image/ab67706f000000020377baccf69ede3cf1a26eff"
          width="130"
          alt="cover"
          loading="lazy"
        />
      </div>
      <div class="card-top-genres">
        <h3>Hip Hop</h3>
        <img
          src="https://i.scdn.co/image/ab67706f000000029bb6af539d072de34548d15c"
          width="130"
          alt="cover"
          loading="lazy"
        />
      </div>
    </section>

    <!-- Browse All Section  -->
    <section class="search-playlists">
      <div class="titleBrowseAll"><h1>Browse all</h1></div>
      <div class="browseAllPlaylists" v-for="item in 10" :key="item">
        <div class="card-browse-all">
          <h3>Podcasts</h3>
          <img
            src="https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5"
            width="100"
            alt="cover"
            loading="lazy"
          />
        </div>
        <div class="card-browse-all">
          <h3>Made For You</h3>
          <img
            src="https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe"
            width="100"
            alt="cover"
            loading="lazy"
          />
        </div>
        <div class="card-browse-all">
          <h3>Charts</h3>
          <img
            src="https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg"
            width="100"
            alt="cover"
            loading="lazy"
          />
        </div>
        <div class="card-browse-all">
          <h3>New Releases</h3>
          <img
            src="https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112"
            width="100"
            alt="cover"
            loading="lazy"
          />
        </div>
        <div class="card-browse-all">
          <h3>Discover</h3>
          <img
            src="https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg"
            width="100"
            alt="cover"
            loading="lazy"
          />
        </div>
        <div class="card-browse-all">
          <h3>Concerts</h3>
          <img
            src="https://t.scdn.co/images/8cfa9cb1e43a404db76eed6ad594057c"
            width="100"
            alt="cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    searchBackground() {
      return window.scrollY > 10 ? true : false;
    },
  },
};
</script>

<style scoped>
#search-page {
  padding: 1rem 3rem;
  position: relative;
  margin-bottom: 7rem;
}

.cover-top {
  width: 100%;
  position: fixed;
  left: 1rem;
  top: 0;
  height: 10vh;
  background: #2c2c2c;
  z-index: 1;
}

#search-page #search-top-section {
  padding-left: 5rem;
}

#searchInp {
  position: fixed;
  width: 35%;
  border: none;
  outline: none;
  padding: 0.5rem;
  padding-left: 2.5rem;
  border-radius: 1.3rem;
  z-index: 2;
}

#searchLogo {
  position: fixed;
  top: 1.3rem;
  left: 23rem;
  z-index: 3;
}

@media only screen and (max-width: 656px) {
  #search-page #search-top-section {
    display: none;
  }

  .cover-top {
    display: none;
  }
}

/* Playlists Section  */

#search-page .search-playlists {
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  margin-top: 2rem;
}

.browseAllPlaylists {
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
}

#search-page .search-playlists .card-top-genres {
  position: relative;
  width: 23rem;
  height: 12rem;
  margin-top: 5rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 0.8rem;
  background: #8d67ab;
  color: #fff;
  border-radius: 0.4rem;
  overflow: hidden;
  transition: all 0.2s;
  box-shadow: rgba(0, 0, 0, 0.123) 0px 6px 6px;
  cursor: pointer;
}

#search-page .search-playlists .card-top-genres:nth-child(3) {
  background: #dc148c;
}

#search-page .search-playlists .card-top-genres:nth-child(4) {
  background: #ba5d07;
}

#search-page .search-playlists .card-top-genres h3 {
  font-size: 2rem;
}

#search-page .search-playlists .card-top-genres img:nth-child(2) {
  position: absolute;
  bottom: -1rem;
  right: -1.5rem;
  box-shadow: rgba(0, 0, 0, 0.123) 0px 6px 6px;
  transform: rotate(25deg);
}

.titlePlaylist {
  position: absolute;
  top: 1.5rem;
  font-size: 1.5rem;
  color: #fff;
}

/* Browse All Section  */

#search-page .search-playlists .card-browse-all {
  position: relative;
  width: 11rem;
  height: 11rem;
  margin-top: 5rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 0.8rem;
  background: #8d67ab;
  color: #fff;
  border-radius: 0.7rem;
  overflow: hidden;
  transition: all 0.2s;
  box-shadow: rgba(0, 0, 0, 0.123) 0px 6px 6px;
  cursor: pointer;
}

#search-page .search-playlists .card-browse-all:nth-child(1) {
  background: #27856a;
}

#search-page .search-playlists .card-browse-all:nth-child(2) {
  background: #1e3264;
}

#search-page .search-playlists .card-browse-all:nth-child(3) {
  background-color: #8d67ab;
}

#search-page .search-playlists .card-browse-all:nth-child(4) {
  background-color: #e8115b;
}

#search-page .search-playlists .card-browse-all:nth-child(5) {
  background-color: #8d67ab;
}

#search-page .search-playlists .card-browse-all:nth-child(6) {
  background-color: #1e3264;
}

#search-page .search-playlists .card-browse-all h3 {
  font-size: 1.5rem;
}

#search-page .search-playlists .card-browse-all img:nth-child(2) {
  position: absolute;
  bottom: -1rem;
  right: -1rem;
  box-shadow: rgba(0, 0, 0, 0.123) 0px 6px 6px;
  transform: rotate(25deg);
}

.titleBrowseAll {
  position: absolute;
  top: 1.5rem;
  font-size: 1rem;
  color: #fff;
}
</style>