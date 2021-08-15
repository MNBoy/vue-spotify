<template>
  <div class="player">
    <div class="music-details">
      <img
        src="../../assets/covers/cover.jpg"
        width="70"
        height="70"
        alt="cover"
        loading="lazy"
      />
      <div class="music-name">
        <p>Deep focus</p>
        <p>Benjamin Martins</p>
      </div>
      <svg role="img" height="16" width="16" viewBox="0 0 16 16">
        <path
          d="M13.764 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253A4.05 4.05 0 00.974 5.61c0 1.089.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195A4.052 4.052 0 0014.96 5.61a4.057 4.057 0 00-1.196-2.883zm-.722 5.098L8.58 13.048c-.307.36-.921.36-1.228 0L2.864 7.797a3.072 3.072 0 01-.905-2.187c0-.826.321-1.603.905-2.187a3.091 3.091 0 012.191-.913 3.05 3.05 0 011.957.709c.041.036.408.351.954.351.531 0 .906-.31.94-.34a3.075 3.075 0 014.161.192 3.1 3.1 0 01-.025 4.403z"
        ></path>
      </svg>
    </div>
    <div class="song">
      <div class="controll">
        <svg
          role="img"
          height="16"
          width="16"
          viewBox="0 0 16 16"
          class="Svg-sc-1bi12j5-0 fIDrcz"
        >
          <path
            d="M4.5 6.8l.7-.8C4.1 4.7 2.5 4 .9 4v1c1.3 0 2.6.6 3.5 1.6l.1.2zm7.5 4.7c-1.2 0-2.3-.5-3.2-1.3l-.6.8c1 1 2.4 1.5 3.8 1.5V14l3.5-2-3.5-2v1.5zm0-6V7l3.5-2L12 3v1.5c-1.6 0-3.2.7-4.2 2l-3.4 3.9c-.9 1-2.2 1.6-3.5 1.6v1c1.6 0 3.2-.7 4.2-2l3.4-3.9c.9-1 2.2-1.6 3.5-1.6z"
          ></path>
        </svg>
        <svg
          role="img"
          height="16"
          width="16"
          viewBox="0 0 16 16"
          class="Svg-sc-1bi12j5-0 fIDrcz"
        >
          <path d="M13 2.5L5 7.119V3H3v10h2V8.881l8 4.619z"></path>
        </svg>
        <button id="playBtn">
          <svg
            role="img"
            height="16"
            width="16"
            viewBox="0 0 16 16"
            class="Svg-sc-1bi12j5-0 fIDrcz"
          >
            <path d="M4.018 14L14.41 8 4.018 2z"></path>
          </svg>
        </button>
        <svg
          role="img"
          height="16"
          width="16"
          viewBox="0 0 16 16"
          class="Svg-sc-1bi12j5-0 fIDrcz"
        >
          <path d="M11 3v4.119L3 2.5v11l8-4.619V13h2V3z"></path>
        </svg>
        <svg
          role="img"
          height="16"
          width="16"
          viewBox="0 0 16 16"
          class="Svg-sc-1bi12j5-0 fIDrcz"
        >
          <path
            d="M5.5 5H10v1.5l3.5-2-3.5-2V4H5.5C3 4 1 6 1 8.5c0 .6.1 1.2.4 1.8l.9-.5C2.1 9.4 2 9 2 8.5 2 6.6 3.6 5 5.5 5zm9.1 1.7l-.9.5c.2.4.3.8.3 1.3 0 1.9-1.6 3.5-3.5 3.5H6v-1.5l-3.5 2 3.5 2V13h4.5C13 13 15 11 15 8.5c0-.6-.1-1.2-.4-1.8z"
          ></path>
        </svg>
      </div>
      <div class="progress-song">
        <span class="timeSong">{{ currentTimeSong(100) }}</span>
        <input
          type="range"
          min="0"
          :max="222"
          v-model="songProgress"
          id="progress-bar-song"
        />
        <span class="timeSong">{{ maxTimeSong(222) }}</span>
      </div>
    </div>
    <div class="music-controller">
      <div class="volume-bar" data-testid="volume-bar" dir="ltr">
        <button
          class="control-button"
          aria-label="Mute"
          aria-describedby="volume-icon"
          title="Mute"
        >
          <svg
            role="img"
            height="16"
            width="16"
            aria-label="Connect to a device"
            data-testid="default-icon"
            viewBox="0 0 16 16"
            class="Svg-sc-1bi12j5-0 fIDrcz"
          >
            <path
              d="M0 3v8c0 .55.45 1 1 1h5v-1H1V3h5V2H1c-.55 0-1 .45-1 1zm3 11.5c0 .275.225.5.5.5H6v-1H3.5c-.275 0-.5.225-.5.5zM15 2H9c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 12H9V3h6v11zm-3-8a.75.75 0 100-1.5.75.75 0 000 1.5zm0 6a2 2 0 100-4 2 2 0 000 4zm0-3c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1z"
            ></path>
          </svg>
          <svg
            role="presentation"
            height="16"
            width="16"
            aria-label="Volume off"
            id="volume-icon"
            viewBox="0 0 16 16"
            class="Svg-sc-1bi12j5-0 fIDrcz"
            v-if="volume < 1"
            @click="volumeOn"
          >
            <path
              d="M0 5v6h2.804L8 14V2L2.804 5H0zm7-1.268v8.536L3.072 10H1V6h2.072L7 3.732zm8.623 2.121l-.707-.707-2.147 2.147-2.146-2.147-.707.707L12.062 8l-2.146 2.146.707.707 2.146-2.147 2.147 2.147.707-.707L13.477 8l2.146-2.147z"
            ></path>
          </svg>
          <svg
            role="presentation"
            height="16"
            width="16"
            aria-label="Volume low"
            id="volume-icon"
            viewBox="0 0 16 16"
            class="Svg-sc-1bi12j5-0 fIDrcz"
            v-if="volume < 20 && volume > 0"
            @click="volumeOff"
          >
            <path
              d="M10.04 5.984l.658-.77q.548.548.858 1.278.31.73.31 1.54 0 .54-.144 1.055-.143.516-.4.957-.259.44-.624.805l-.658-.77q.825-.865.825-2.047 0-1.183-.825-2.048zM0 11.032v-6h2.802l5.198-3v12l-5.198-3H0zm7 1.27v-8.54l-3.929 2.27H1v4h2.071L7 12.302z"
            ></path>
          </svg>
          <svg
            role="presentation"
            height="16"
            width="16"
            aria-label="Volume medium"
            id="volume-icon"
            viewBox="0 0 16 16"
            class="Svg-sc-1bi12j5-0 fIDrcz"
            v-if="volume < 60 && volume >= 20"
            @click="volumeOff"
          >
            <path
              d="M0 11.032v-6h2.802l5.198-3v12l-5.198-3H0zm7 1.27v-8.54l-3.929 2.27H1v4h2.071L7 12.302zm4.464-2.314q.401-.925.401-1.956 0-1.032-.4-1.957-.402-.924-1.124-1.623L11 3.69q.873.834 1.369 1.957.496 1.123.496 2.385 0 1.262-.496 2.385-.496 1.123-1.369 1.956l-.659-.762q.722-.698 1.123-1.623z"
            ></path>
          </svg>
          <svg
            role="presentation"
            height="16"
            width="16"
            aria-label="Volume high"
            id="volume-icon"
            viewBox="0 0 16 16"
            v-if="volume >= 60"
            @click="volumeOff"
          >
            <path
              d="M12.945 1.379l-.652.763c1.577 1.462 2.57 3.544 2.57 5.858s-.994 4.396-2.57 5.858l.651.763a8.966 8.966 0 00.001-13.242zm-2.272 2.66l-.651.763a4.484 4.484 0 01-.001 6.397l.651.763c1.04-1 1.691-2.404 1.691-3.961s-.65-2.962-1.69-3.962zM0 5v6h2.804L8 14V2L2.804 5H0zm7-1.268v8.536L3.072 10H1V6h2.072L7 3.732z"
            ></path>
          </svg>
        </button>
        <div class="progress-volume">
          <input
            type="range"
            min="0"
            max="100"
            v-model="volume"
            id="progress-bar"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      volume: 10,
      songProgress: 100,
    };
  },
  methods: {
    volumeOff() {
      this.volume = 0;
    },
    volumeOn() {
      this.volume = 100;
    },
    currentTimeSong(time = 0) {
      if (time < 10) {
        return "0:0" + time;
      } else if (time < 60) {
        return "0:" + time;
      } else {
        const min = Math.floor(time / 60);
        const sec = time % 60;
        return min + ":" + (sec < 10 ? "0" + sec : sec);
      }
    },
    maxTimeSong(time = 0) {
      if (time < 10) {
        return "0:0" + time;
      } else if (time < 60) {
        return "0:" + time;
      } else {
        const min = Math.floor(time / 60);
        const sec = time % 60;
        return min + ":" + (sec < 10 ? "0" + sec : sec);
      }
    },
  },
};
</script>

<style scoped>
.player {
  width: 100%;
  height: 100px;
  background: #181818;
  position: fixed;
  bottom: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #313131;
}

.player .music-details {
  margin-left: 1rem;
  display: flex;
  align-items: center;
  color: #fff;
}

.player .music-details .music-name p {
  margin-left: 1rem;
  font-size: 0.9rem;
  cursor: pointer;
}

.player .music-details .music-name p:hover {
  text-decoration: underline;
}

.player .music-details .music-name p:last-child {
  font-size: 0.7rem;
}

.player .music-details svg {
  margin-left: 1rem;
  fill: #aca9a9;
  cursor: pointer;
}

.player .music-details svg:hover {
  fill: #fff;
}

.player .song {
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.player .song .controll button {
  margin-left: 1rem;
}

.player .song .controll svg {
  fill: #aca9a9;
  margin-left: 1rem;
  cursor: pointer;
}

.player .song .controll svg:hover {
  fill: #fff;
}

.player .song .controll #playBtn {
  background: #fff;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  display: inline-block;
  padding-top: 0.2rem;
}

.player .song .controll #playBtn svg {
  fill: #000;
  margin-left: 0;
}

.player .song .progress-song #progress-bar-song {
  margin-bottom: 1.2rem;
  width: 30rem;
  max-height: 4px;
}

.player .song .progress-song #progress-bar-song::-webkit-slider-thumb {
  cursor: pointer;
  max-width: 13px;
  max-height: 13px;
}

.player .song .progress-song .timeSong {
  color: #b3b3b3;
  margin: 0.5rem;
  font-size: 0.7rem;
}

.player .music-controller {
  width: 300px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.player .music-controller .volume-bar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.player .music-controller .volume-bar .control-button {
  background: none;
  border: none;
}

.player .music-controller .volume-bar .control-button svg {
  fill: #aca9a9;
  margin-right: 0.5rem;
  cursor: pointer;
}

.player .music-controller .volume-bar .control-button svg:hover {
  fill: #fff;
}

.player .music-controller .volume-bar .progress-volume #progress-bar {
  margin-bottom: 1.2rem;
  max-width: 100px;
  max-height: 4px;
}

.player
  .music-controller
  .volume-bar
  .progress-volume
  #progress-bar::-webkit-slider-thumb {
  cursor: pointer;
  max-width: 13px;
  max-height: 13px;
}
</style>