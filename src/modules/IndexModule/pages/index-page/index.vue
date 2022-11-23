<template>
  <simple-layout class="index-page">
    <loading-curtain v-if="getProgress" />
    <index-map :polygons="indexPolygons"></index-map>
  </simple-layout>
</template>

<script>
import IndexMap from "@/components/IndexMap"
import SimpleLayout from "@/layouts/simpleLayout"
import LoadingCurtain from '@/components/LoadingCurtain'
import { mapGetters } from 'vuex'
import ColorService from "@/modules/IndexModule/pages/index-page/services/color-service";

export default {
  name: "IndexPage",
  components: { SimpleLayout, IndexMap, LoadingCurtain },
  data () {
    return {
      region: 'Dubai'
    }
  },
  computed: {
    ...mapGetters('index', ['getProgress', 'getRegionIndexes']),
    indexPolygons: {
      get () {
        return this.getRegionIndexes?.length ? this.getRegionIndexes.filter(x => x.exposition_stats).map(x => {
          return {
            id: x.id,
            name: x.name,
            polygon: x.polygon,
            color: x.exposition_stats ? ColorService.getColorByIndexExposition(x.exposition_stats.color_index_exposition) : null,
            markerText: x.price_median
          }
        }) : []
      }
    }
  },
  mounted () {
    this.$store.dispatch('index/fetchRegionIndexes',  { region: this.region })
  }
}
</script>

<style scoped lang="scss" src="./style.scss" />
