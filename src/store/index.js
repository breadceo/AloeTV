import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from '../../src/plugins/logger';
import videos from './modules/video';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    videos,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
