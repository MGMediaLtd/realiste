<template>
  <div class="map-object">
    <yandex-map
        :settings="settings"
        :coords="center"
        :zoom="zoom"
        :controls="controls"
        class="map-object__map"
        @map-was-initialized="handleMapInitialized"
    >
      <ymap-marker
          v-for="marker in polygons"
          :key="`polygon_${marker.id}`"
          marker-type="Polygon"
          :coords="[getSmoothed(marker.polygon)]"
          :marker-id="marker.id"
          :hint-content="marker.name"
          :options="getPolygonOptions(marker)"
          @click="handlePolygonClick(marker)"
      />
      <ymap-marker
          v-for="marker in markers"
          :key="`marker_${marker.id}`"
          marker-type="Placemark"
          :coords="marker.coords"
          :marker-id="`m${marker.id}`"
          :hint-content="marker.name"
          :options="getMarkerOptions(marker)"
          :icon="marker.icon"
          @click="handleMarkerClick(marker)"
      >
      </ymap-marker>
    </yandex-map>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
import MapService from '@/services/map-service'
import smooth from 'smooth-polyline'
export default {
  name: "MapObject",
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
    },
    center: {
      type: Array,
      // todo: replace with current location
      default: () => [55.755864, 37.617698]
    },
    zoom: {
      type: Number,
      default: 12
    }
  },
  data () {
    return {
      // controls: ['zoomControl', 'rulerControl', 'geolocationControl'],
      controls: []
    }
  },
  computed: {
    settings: {
      get () {
        return {
          apiKey: 'cd38a715-a2ba-4c42-9103-83b76b5dc0b0',
          lang: this.$lang,
          coordorder: 'latlong',
          enterprise: false,
          version: '2.1'
        }
      }
    },
    markers: {
      get () {
        return this.polygons?.length ? this.polygons.map(x => {
          return {
            id: x.id,
            name: x.name,
            coords: MapService.getPolygonCenter(x.polygon),
            icon: {
              layout: 'default#imageWithContent',
              imageHref: '',
              contentLayout: `<div class="map-object__marker" style="background: ${x?.color?.marker?.background};"><span>${x.markerText}</span></div>`
            }
          }
        }) : []
      }
    }
  },
  methods: {
    handleMarkerClick () {},
    handlePolygonClick () {},
    getSmoothed (polygon) {
      return this.smoothPolygons ? smooth(smooth(polygon)) : polygon
    },
    getPolygonOptions (marker) {
      return {
        fillColor: marker?.color?.fill,
        strokeColor: marker?.color?.stroke
      }
    },
    getMarkerOptions () {
      return {}
    },
    handleMapInitialized () {
      this.$nextTick(() => {
        this.$emit('initialized')
      })
    }
  }
}
</script>

<style lang="scss" src="./style.scss" />
