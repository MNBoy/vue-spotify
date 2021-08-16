function makeid(length) {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export default {
  async addPlayList(context) {
    const playlistsCount = await context.getters.getPlaylists.length;
    const playlist = {
      id: makeid(25),
      name: "My Playlist #" + (+playlistsCount + 1),
      profile: "",
      songs: [],
    };

    context.commit("addPlayList", {
      playlist,
    });

    return playlist;
  },
  async deletePlayList(context, payload) {
    const playlists = await context.getters.getPlaylists;
    const id = payload.id;
    const playlist = playlists.filter(playlist => playlist.id !== id);

    context.commit("setPlaylists", {
      playlists: playlist,
    });
  },
};
