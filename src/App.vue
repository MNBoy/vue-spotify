<template>
  <teleport to="body">
    <profile-detail></profile-detail>
    <the-arrows></the-arrows>
  </teleport>
  <div id="page">
    <side-bar></side-bar>
    <section id="main">
      <router-view v-slot="{ Component }">
        <transition name="router" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </section>
  </div>
  <teleport to="body">
    <the-player></the-player>
  </teleport>
</template>

<script>
import ProfileDetail from "./components/Profile/ProfileDetail.vue";
import SideBar from "./components/Sidebar/SideBar.vue";
import TheArrows from "./components/UI/TheArrows.vue";
import ThePlayer from './components/UI/ThePlayer.vue';
export default {
  components: {
    SideBar,
    ProfileDetail,
    TheArrows,
    ThePlayer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  background: linear-gradient(to top, #1b1b1b 83%, #2c2c2c 100%);
}

#page {
  width: 100%;
  display: flex;
}

/* Main Section  */

#main {
  width: 100%;
}

/* Router Transition  */

.router-enter-from,
.router-leave-to {
  opacity: 0;
}

.router-enter-active {
  transition: all 0.3s ease-out;
}

.router-leave-active {
  transition: all 0.3s ease-in;
}

.router-enter-to,
.router-leave-from {
  opacity: 1;
}
</style>
