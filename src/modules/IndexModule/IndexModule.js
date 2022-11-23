import index from './store'

export default {
  install (Vue, options) {
    options.store.registerModule('index', index)
  }
}
