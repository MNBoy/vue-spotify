<template>
  <div id="liked-songs">
    <section>
      <div id="header">
        <img
          aria-hidden="false"
          draggable="false"
          loading="eager"
          src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
          alt="Liked Songs"
          srcset="
            https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png 150w,
            https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png 300w
          "
          sizes="(min-width: 1280px) 232px, 192px"
        />
        <div id="caption">
          <p>Playlist</p>
          <h1>Liked Songs</h1>
          <p>MNBoy</p>
        </div>
      </div>
      <div id="find-songs">
        <div id="card">
          <svg
            width="80"
            height="80"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M47 18.538L48 16.806L31.478 7.26801V42.327C29.826 40.299 27.313 39 24.5 39C19.538 39 15.5 43.038 15.5 48C15.5 52.963 19.538 57 24.5 57C29.27 57 33.175 53.266 33.471 48.569L33.478 48.433C33.485 48.288 33.485 47.711 33.478 47.566V10.732L47 18.538ZM31.478 48.434C31.252 52.091 28.213 55 24.5 55C20.64 55 17.5 51.86 17.5 48C17.5 44.141 20.64 41 24.5 41C28.213 41 31.252 43.909 31.478 47.566V48.434Z"
              fill="currentColor"
            ></path>
          </svg>
          <div>
            <h1>Songs you like will appear here</h1>
            <h5>Save songs by tapping the heart icon.</h5>
            <router-link to="/search"
              ><button id="findSongs">FIND SONGS</button></router-link
            >
          </div>
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
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");

#liked-songs {
  position: relative;
}

#liked-songs section {
  width: 100%;
  padding: 5rem 3rem;
  height: 100vh;
  background: linear-gradient(to top, #131313 43%, #5b16fc9c 100%);
}

#liked-songs section #header {
  display: flex;
  align-items: flex-end;
}

#liked-songs section #find-songs {
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#liked-songs section #find-songs #card {
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

#liked-songs section #find-songs #card h1 {
  font-size: 2rem;
  font-weight: 600;
}

#liked-songs section #find-songs #card h5 {
  font-weight: 400;
}

#liked-songs section #find-songs #card #findSongs {
  width: 11rem;
  margin-top: 1rem;
  padding: 0.5rem;
  font-weight: 600;
  border: none;
  border-radius: 1.5rem;
  cursor: pointer;
  transition: all 0.2s;
}

#liked-songs section #find-songs #card #findSongs:hover {
  transform: scale(1.05);
  text-decoration: underline;
}


#liked-songs section #header #caption {
  margin-left: 1rem;
}

#liked-songs section #header #caption p {
  color: #fff;
  font-weight: 600;
  font-size: 0.9rem;
}

#liked-songs section #header #caption h1 {
  color: #fff;
  font-size: 5rem;
}
</style>
