export default {
  addPlayList(state, payload) {
      state.playlists.push(payload.playlist);
  },
};
