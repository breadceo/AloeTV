import youtube from '../../api/youtube';

const thisState = {
  all: [],
  playingId: '',
  playingByAuto: false,
};

const getters = {

};

const actions = {
  async getAllVideos({ commit }) {
    const videos = await youtube.fetchVideos();
    commit('setVideos', videos);
  },
  play({ commit }, data) {
    commit('setPlaying', data);
  },
};

const mutations = {
  setVideos(state, videos) {
    state.all = videos;
  },
  setPlaying(state, { id, auto }) {
    state.playingId = id;
    state.playingByAuto = auto;
  },
};

export default {
  namespaced: true,
  state: thisState,
  getters,
  actions,
  mutations,
};

