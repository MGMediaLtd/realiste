import axios from 'axios'
import * as types from './types/mutations.type'

export default {
  async fetchRegionIndexes ({ commit }, { regionName }) {
    try {
      commit(types.SET_ERROR, null)
      commit(types.SET_PROGRESS, true)
      const { data } = await axios.get(`/api/__pd?format=json&json_action=get_city_area_polygons&aglomeration_name=${regionName}`, {
      })
      commit(types.SET_REGION_INDEXES, data)
      return data
    } catch (e) {
      commit(types.SET_ERROR, e.message )
      return e
    } finally {
      commit(types.SET_PROGRESS, false)
    }
  }
}
