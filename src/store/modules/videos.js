import youtube from '../../api/youtube';

const thisState = {
  all: [],
};

const getters = {

};

const actions = {
  getAllVideos({ commit }) {
    youtube.fetchVideos((videos) => {
      commit('setVideos', videos);
    });
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

