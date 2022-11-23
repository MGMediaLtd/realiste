export default class MapService {
  static getPolygonCenter (polygon) {
    const minLat = Math.min(...polygon.map(x => x[0]))
    const maxLat = Math.max(...polygon.map(x => x[0]))
    const minLng = Math.min(...polygon.map(x => x[1]))
    const maxLng = Math.max(...polygon.map(x => x[1]))
    return [(minLat + maxLat) / 2, (minLng + maxLng) / 2]
  }
}
