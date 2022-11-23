import ui from './store'
import { mapGetters } from 'vuex'

export default {
  install (Vue, options) {
    options.store.registerModule('ui', ui)
    Vue.mixin({
      computed: {
        ...mapGetters('ui', ['$lang'])
      }
    })
  }
}
