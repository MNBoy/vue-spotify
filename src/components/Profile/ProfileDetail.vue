<template>
  <div id="profile-detail" @click="toggleDetail">
    <img src="../../assets/icons/user.png" width="19" alt="user" />
    <p>MNBoy</p>
    <img
      v-if="!isDetail"
      class="logotest"
      src="../../assets/icons/down-arrow.png"
      width="10"
      height="6"
      alt="user"
    />
    <img
      v-else
      class="logotest"
      src="../../assets/icons/up-arrow.png"
      width="10"
      height="6"
      alt="user"
    />
    <div id="detail" v-if="isDetail">
      <div class="item">Profile</div>
      <div class="item">Logout</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDetail: false,
    };
  },
  methods: {
    toggleDetail() {
      this.isDetail = !this.isDetail;
    },
  },
};
</script>

<style scoped>
#profile-detail {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 1rem;
  top: 1rem;
  background: #000;
  color: #fff;
  padding: 0.2rem 0.6rem;
  border-radius: 2rem;
  transition: all 0.1s;
  cursor: pointer;
  z-index: 10;
}

#profile-detail:hover {
  background: #3f3f3f80;
}

#profile-detail img:nth-child(1) {
  margin-right: 0.5rem;
  margin-bottom: 0.1rem;
}

#profile-detail img:nth-child(3) {
  margin-left: 0.5rem;
  margin-top: 0.1rem;
}

@media only screen and (max-width: 656px) {
  #profile-detail {
    display: none;
  }
}

#detail {
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  position: fixed;
  right: 1.3rem;
  top: 3.3rem;
  background: #0e0e0e;
  color: #fff;
  padding: 0.5rem 0.5rem;
  border-radius: 0.4rem;
  transition: all 0.1s;
}

#detail .item {
  width: 100%;
  padding: 0.3rem;
  border-radius: 0.2rem;
}

#detail .item:hover {
  background: #3f3f3f80;
}
</style>