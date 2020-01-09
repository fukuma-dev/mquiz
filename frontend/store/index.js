export const state = () => ({
  audio:{
    trackId: '',
    trackName: '',
    artistId: '',
    artistName: '',
    previewUrl: ''
  },
  playlist: []
})

export const mutations = {
  setAudio (state, { trackId, trackName, artistId, artistName, previewUrl }) {
    state.audio.trackId = trackId
    state.audio.trackName = trackName
    state.audio.artistId = artistId
    state.audio.artistName = artistName
    state.audio.previewUrl = previewUrl
  },
  pushAudio (state,  { trackId, trackName, artistId, artistName, previewUrl }) {
    state.playlist.push({
      trackId: trackId,
      trackName: trackName,
      artistId: artistId,
      artistName: artistName,
      previewUrl: previewUrl
    })
  },
  deleteAudio (state, i) {
    state.playlist.splice(i, 1)
  },
  deleteAllAudio (state) {
    state.playlist.length = 0
  },
  updateList (state, { oldIndex, newIndex }) {
    if (newIndex - oldIndex > 0) {
      state.playlist.splice(newIndex+1, 0, state.playlist[oldIndex])
      state.playlist.splice(oldIndex, 1)
    } else {
      state.playlist.splice(newIndex, 0, state.playlist[oldIndex])
      state.playlist.splice(oldIndex+1, 1)
    }
  }
}
