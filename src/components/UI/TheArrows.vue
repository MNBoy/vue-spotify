<template>
  <div id="top-arrows">
    <div id="base-arrrows">
      <div id="left" @click="back">
        <img
          src="../../assets/icons/left-arrow.png"
          width="15"
          alt="leftArrow"
          draggable="false"
        />
        <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
      </div>
      <div id="right" @click="forward">
        <img
          src="../../assets/icons/right-arrow.png"
          width="15"
          alt="RightArrow"
          draggable="false"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      window.history.back();
    },
    forward() {
      window.history.forward();
    },
  },
};
</script>

<style scoped>
#top-arrows {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 16rem;
  top: 1rem;
  z-index: 10;
}

@media only screen and (max-width: 1400px) {
  #top-arrows {
    display: none;
  }
}

#top-arrows #base-arrrows {
  display: flex;
  justify-content: space-between;
}

#top-arrows #base-arrrows #left {
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 100%;
  cursor: pointer;
}

#top-arrows #base-arrrows #right {
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 100%;
  margin-left: 1rem;
  cursor: pointer;
}
</style>