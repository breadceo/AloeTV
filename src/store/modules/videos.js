import youtube from '../../api/youtube';

const thisState = {
  all: [],
};

const getters = {

};

const actions = {
  async getAllVideos({ commit }) {
    const videos = await youtube.fetchVideos();
    commit('setVideos', videos);
  },
};

const mutations = {
  setVideos(state, videos) {
    state.all = videos;
  },
};

export default {
  namespaced: true,
  state: thisState,
  getters,
  actions,
  mutations,
};

