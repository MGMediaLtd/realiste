import * as types from './types/mutations.type'
export default {
  [types.SET_LANG] (state, value) {
    state.$lang = value
  }
}
