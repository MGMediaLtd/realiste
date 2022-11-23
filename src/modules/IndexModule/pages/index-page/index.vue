<template>
  <simple-layout class="index-page">
    <loading-curtain v-if="getProgress" />
    <map-object
        :polygons="indexPolygons"
        :center="region.coords"
        :smooth-polygons="true"
        @initialized="handleMapInitialized"
    ></map-object>
    <avg-price-hint class="index-page__price-hint" />
  </simple-layout>
</template>

<script>
import MapObject from "@/components/MapObject"
import SimpleLayout from "@/layouts/simpleLayout"
import LoadingCurtain from '@/components/LoadingCurtain'
import { mapGetters } from 'vuex'
import ColorService from "@/modules/IndexModule/pages/index-page/services/color-service";
import locale from './localization.json'
import AvgPriceHint from "@/components/AvgPriceHint";

export default {
  name: "IndexPage",
  components: { AvgPriceHint, SimpleLayout, MapObject, LoadingCurtain },
  data () {
    return {
      // todo: where to get?
      region: {
        name: 'Dubai',
        coords: ['25.197172', '55.274274'],
        currency: 'AED'
      }
    }
  },
  computed: {
    ...mapGetters('index', ['getProgress', 'getRegionIndexes']),
    l10n: {
      get () {
        return locale[this.$lang]
      }
    },
    indexPolygons: {
      get () {
        return this.getRegionIndexes?.length ? this.getRegionIndexes.filter(x => x.exposition_stats).map(x => {
          return {
            id: x.id,
            name: x.name,
            polygon: x.polygon,
            color: x.exposition_stats ? ColorService.getColorByIndexExposition(x.exposition_stats.color_index_exposition) : null,
            markerText: x?.exposition_stats?.price_median + ' ' + this.region.currency
          }
        }) : []
      }
    }
  },
  methods: {
    handleMapInitialized () {
      this.$store.dispatch('index/fetchRegionIndexes',  { regionName: this.region.name })
    }
  }
}
</script>

<style scoped lang="scss" src="./style.scss" />
