<template lang="pug">
  .rg-swatch.flex.flex-col.justify-end.items-start.p-4.space-y-2(
    :style="{ backgroundColor: color }"
  )
    span(v-for="{ label, value } in [hex, rgba, hsla]" :key="value") {{ label }}
</template>

<script lang="ts">
import tinycolor from 'tinycolor2'
import Vue from 'vue'

export default Vue.extend({
  name: 'Swatch',
  props: ['color'],
  computed: {
    hex() {
      return {
        label: this.color,
        value: this.color
      }
    },
    hsla() {
      const value = tinycolor(this.color).setAlpha(1).toHslString()
      return { label: value.replace(/(hsla?\(|,| \d\.\d|\))/g, ''), value }
    },
    rgba() {
      const value = tinycolor(this.color).setAlpha(1).toRgbString()
      return { label: value.replace(/(rgba?\(|,| \d\.\d|\))/g, ''), value }
    }
  }
})
</script>
