export default {
  setPlaylists(state, payload) {
    state.playlists = payload.playlists;
  },
  addPlayList(state, payload) {
    state.playlists.push(payload.playlist);
  },
};
