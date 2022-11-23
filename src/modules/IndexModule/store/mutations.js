import * as types from './types/mutations.type'
export default {
  [types.SET_PROGRESS] (state, value) {
    state.progress = value
  },
  [types.SET_REGION_INDEXES] (state, value) {
    state.regionIndexes = value
  },
  [types.SET_ERROR] (state, value) {
    state.error = value
  }
}
