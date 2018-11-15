import youtube from '../../api/youtube';

const thisState = {
  all: [],
  playingId: '',
};

const getters = {

};

const actions = {
  async getAllVideos({ commit }) {
    const videos = await youtube.fetchVideos();
    commit('setVideos', videos);
  },
  play({ commit }, id) {
    commit('setPlayingId', id);
  },
};

const mutations = {
  setVideos(state, videos) {
    state.all = videos;
  },
  setPlayingId(state, id) {
    state.playingId = id;
  },
};

export default {
  namespaced: true,
  state: thisState,
  getters,
  actions,
  mutations,
};

