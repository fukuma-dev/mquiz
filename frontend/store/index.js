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
  }
}
