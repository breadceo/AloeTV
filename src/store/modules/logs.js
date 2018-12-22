import { DeviceUUID } from 'device-uuid';
import request from 'superagent';

const cid = new DeviceUUID().get();

const thisState = {
};

const getters = {
};

const actions = {
  async pageview(_, pageName) {
    await request
      .post('http://www.google-analytics.com/collect')
      .query({ v: 1, tid: 'UA-131203377-1', cid, t: 'pageview', dp: `/${pageName}` });
  },
};

const mutations = {
};

export default {
  namespaced: true,
  state: thisState,
  getters,
  actions,
  mutations,
};
