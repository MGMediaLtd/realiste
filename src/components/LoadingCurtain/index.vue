<template>
  <div class="loading-curtain">
    <div class="loading-curtain__blur"></div>
    <div class="loading-curtain__wrapper">
      <span>{{ l10n.loading }}...</span>
    </div>
  </div>
</template>

<script>
import locale from './localization.json'

export default {
  name: "LoadingCurtain",
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
