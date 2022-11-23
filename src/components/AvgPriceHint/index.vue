<template>
  <div class="avg-price-hint">
    <span class="avg-price-hint__title">{{ l10n.avg_price }}</span>
    <div class="avg-price-hint__content">
      <div class="avg-price-hint__scale"></div>
      <div class="avg-price-hint__scale-text">
        <span class="avg-price-hint__scale-text--high">{{ l10n.high }}</span>
        <span class="avg-price-hint__scale-text--medium">{{ l10n.medium }}</span>
        <span class="avg-price-hint__scale-text--low">{{ l10n.low }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import locale from './localization'
export default {
  name: "AvgPriceHint",
  computed: {
    l10n: {
      get () {
        return locale[this.$lang]
      }
    }
  }
}
</script>

<style scoped lang="scss" src="./style.scss" />
