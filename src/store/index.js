import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from '../../src/plugins/logger'
import videos from './module/videos'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        videos
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})

if (module.hot) {
    // accept actions and mutations as hot modules
    module.hot.accept(['./modules/video'], () => {
        // require the updated modules
        // have to add .default here due to babel 6 module output
        const newVideo = require('./modules/video').default
        // swap in the new modules and mutations
        store.hotUpdate({
            modules: {
                videos: newVideo
            }
        })
    })
}