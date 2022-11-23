export default class ColorService {
  static getColorByIndexExposition(index) {
    if (index >= 0 && index < 3) {
      return {
        fill: 'rgba(0, 172, 255, 0.5)',
        stroke: 'rgba(0, 77, 255, 1)'
      }
    }
    if (index >= 3 && index < 6) {
      return {
        fill: 'rgba(155, 53, 197, 0.5)',
        stroke: 'rgba(146, 22, 197, 1)'
      }
    }
    if (index >= 6) {
      return {
        fill: 'rgba(252, 84, 31, 0.5)',
        stroke: 'rgba(252, 84, 31, 1)'
      }
    }
    return null
  }
}
