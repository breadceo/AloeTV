import { DeviceUUID } from 'device-uuid';
import request from 'superagent';

const cid = new DeviceUUID().get();
const tid = 'UA-131203377-1';
const v = 1;
const url = 'http://www.google-analytics.com/collect';

const thisState = {
  watched: [],
};

const getters = {
};

const actions = {
  async pageview(_, pageName) {
    await request.post(url)
      .query({ v, tid, cid, t: 'pageview', dp: `/${pageName}` });
  },
  async watched({ state, commit }, videoId) {
    if (state.watched.includes(videoId) === false) {
      commit('addWatched', videoId);
      await request.post(url)
        .query({ v, tid, cid, t: 'pageview', dp: `/listvideo/${videoId}` });
    }
  },
  async startPlayingByAuto(_, videoId) {
    await request.post(url)
      .query({ v, tid, cid, t: 'event', ec: 'video', ea: 'autoplay', el: videoId });
  },
  async startPlayingByManual(_, videoId) {
    await request.post(url)
      .query({ v, tid, cid, t: 'event', ec: 'video', ea: 'manualplay', el: videoId });
  },
  async stopPlayingByAuto(_, videoId) {
    await request.post(url)
      .query({ v, tid, cid, t: 'event', ec: 'video', ea: 'autostop', el: videoId });
  },
  async stopPlayingByManual(_, videoId) {
    await request.post(url)
      .query({ v, tid, cid, t: 'event', ec: 'video', ea: 'manualstop', el: videoId });
  },
};

const mutations = {
  addWatched(state, id) {
    state.watched.push(id);
  },
};

export default {
  namespaced: true,
  state: thisState,
  getters,
  actions,
  mutations,
};
