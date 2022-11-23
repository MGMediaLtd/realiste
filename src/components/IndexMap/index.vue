<template>
  <div class="index-map">
    <yandex-map
        v-if="showMap"
        :settings="settings"
        :coords="coords"
        :zoom="4"
        :controls="controls"
        class="index-map__map"
    >
      <ymap-marker
          v-for="marker in polygons"
          :key="`marker_${marker.id}`"
          marker-type="Polygon"
          :coords="[marker.polygon]"
          :marker-id="marker.id"
          :hint-content="marker.name"
          :options="getMarkerOptions(marker)"
          @click="handleMarkerClick(marker)"
      />
    </yandex-map>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
export default {
  name: "IndexMap",
  components: {
    yandexMap,
    ymapMarker
  },
  props: {
    polygons: {
      type: Array,
      default: () => []
    },
    smoothPolygons: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      markers: [],
      showMap: true,
      settings: {
        apiKey: 'cd38a715-a2ba-4c42-9103-83b76b5dc0b0',
        lang: 'ru_RU',
        coordorder: 'latlong',
        enterprise: false,
        version: '2.1',
        center: { lat: 55.755864, lng: 37.617698 }
      },
      controls: ['zoomControl', 'fullscreenControl', 'rulerControl', 'geolocationControl'],
    }
  },
  computed: {
    coords: {
      get () {
        return this.markers?.length ? this.markers[0].coords : [55.755864, 37.617698]
      }
    },
  },
  methods: {
    handleMarkerClick () {
      //
    },
    drawPolygons () {
    },
    getMarkerOptions (marker) {
      return {
        fillColor: marker?.color?.fill,
        strokeColor: marker?.color?.stroke
      }
    }
  },
  watch: {
    polygons () {
      this.drawPolygons()
      console.log(this.polygons)
    }
  }
}
</script>

<style scoped lang="scss" src="./style.scss" />
