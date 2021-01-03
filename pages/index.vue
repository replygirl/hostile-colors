<template lang="pug">
  .rg-palette-generator.flex.flex-col.p-px.space-y-px
    .rg-palette.flex-grow.flex.flex-col.md--flex-row(v-if="palette")
      .rg-palette-sample.flex-1.flex.flex-col.justify-center.p-16
        .m-y-auto.p-4.space-y-8(:style="{ backgroundColor: palette.background, color: palette.primary }")
          span.text-lg Palette sample
          p.normal-case Kaboodle edmodo loopt udemy dogster, kiko cuil. Chumby ngmoco zappos chumby nuvvo, zooomr palantir. Chegg zoho loopt kno quora jabber eskobo tivo, zimbra orkut oooooc waze jajah zinch. Bebo edmodo yammer insala vimeo, voki eduvant twones. Mzinga grockit odeo woopra trulia lanyrd, diigo gsnap oooooc chartly. Groupon lala blekko shopify, orkut octopart.
          .flex.flex-row.justify-end
            .p-2(:style="{ color: palette.primary, backgroundColor: palette.accent }") Test
      .rg-palette-colors.flex-1.flex.flex-row.md--flex-col.what
        Swatch.flex-grow(
          :style="{ 'color': palette.background }"
          :color="palette.primary"
        )
        .rg-palette-colors-secondary.flex-grow.flex.flex-row.md--flex-col
          Swatch.flex-grow(
            v-for="(color, i) in [palette.accent, palette.background]"
            :key="color"
            :style="{ color: palette.primary }"
            v-bind="{ color }"
          )
    .rg-palette-tools.flex.flex-row.justify-between.bg-white.p-4(:style="{ color: palette.dark, backgroundColor: palette.light }")
      button(
        :style="{ opacity: canUndo ? 1 : 0.25 }"
        :disabled="!canUndo"
        @click="canUndo ? undo() : null"
      ) Undo
      button(@click="generate") Generate
      button(
        :style="{ opacity: canRedo ? 1 : 0.25 }"
        :disabled="!canRedo"
        @click="canRedo ? redo() : null"
      ) Redo
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapGetters('palettes', ['canRedo', 'canUndo']),
    ...mapGetters('palettes', { palette: 'current' })
  },
  asyncData({ store: { dispatch }}) { dispatch('init') },
  mounted() {
    window.addEventListener('keyup', this.onWindowKeyUp)
    this.$useHeap(this.$config.heapAppId)
  },
  beforeDestroy() { window.removeEventListener('keyup', this.onWindowKeyUp) },
  methods: {
    ...mapActions('palettes', ['generate', 'redo', 'undo']),
    onWindowKeyUp({ key }: KeyboardEvent) {
      switch (key) {
        case ' ':
          this.generate()
          break
        case 'ArrowLeft':
          if (this.canUndo) this.undo()
          break
        case 'ArrowRight':
          if (this.canRedo) this.redo()
          else this.generate()
      }
    }
  }
})
</script>
