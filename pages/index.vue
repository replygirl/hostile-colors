<template lang="pug">
  .rg-palette-generator.flex.flex-col.p-px.space-y-px.overflow-y-auto
    template(v-if="palette")
      .rg-palette.flex-grow.flex.flex-col.md--flex-row.space-y-px.md--space-y-0.md--space-x-px
        .rg-palette-sample.flex-shrink-0.md--flex-1.flex.flex-col.justify-center.p-4.sm--p-16.md--p-24.lg--p-32.xl--p-40.2xl--p-48.3xl--p-56.4xl--p-64.5xl--p-72.6xl--p-80
          .m-y-auto.p-4.space-y-2.md--space-y-4(:style="{ backgroundColor: palette.background, color: palette.primary }")
            span.text-lg Palette sample
            p.normal-case Kaboodle edmodo loopt udemy dogster, kiko cuil. Chumby ngmoco zappos chumby nuvvo, zooomr palantir. Chegg zoho loopt kno quora jabber eskobo tivo, zimbra orkut oooooc waze jajah zinch. Bebo edmodo yammer insala vimeo, voki eduvant twones. Mzinga grockit odeo woopra trulia lanyrd, diigo gsnap oooooc chartly. Groupon lala blekko shopify, orkut octopart.
            .flex.flex-row.justify-end
              .p-2(:style="{ color: palette.primary, backgroundColor: palette.accent }") Test
        .rg-palette-colors.flex-1.flex-shrink-0.flex.flex-row.md--flex-col.space-x-px.md--space-x-0.md--space-y-px.overflow-x-auto
          Swatch.flex-grow.flex-shrink-0(
            :style="{ 'color': palette.background }"
            :color="palette.primary"
          )
          .rg-palette-colors-secondary.flex-grow.flex-shrink-0.flex.flex-row.md--flex-col.space-x-px.md--space-x-0.md--space-y-px
            Swatch.flex-grow(
              v-for="(color, i) in [palette.accent, palette.background]"
              :key="color"
              :style="{ color: palette.primary }"
              v-bind="{ color }"
            )
      .rg-palette-tools.flex-shrink-0.flex.flex-row.justify-between.bg-white.p-4(:style="{ color: palette.dark, backgroundColor: palette.light }")
        button(
          :style="{ opacity: canUndo ? 1 : 0.25 }"
          :disabled="!canUndo"
          @click="canUndo ? undo() : null"
        ) Undo{{ $ua.isFromPc() ? ' (<-)' : '' }}
        button(@click="generate") Generate{{ $ua.isFromPc() ? ' (space)' : '' }}
        button(
          :style="{ opacity: canRedo ? 1 : 0.25 }"
          :disabled="!canRedo"
          @click="canRedo ? redo() : null"
        ) Redo{{ $ua.isFromPc() ? ' (->)' : '' }}
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapGetters('palettes', ['canRedo', 'canUndo']),
    ...mapGetters('palettes', { palette: 'current' })
  },
  mounted() {
    window.addEventListener('keyup', this.onWindowKeyUp)
    this.$useHeap(this.$config.heapAppId)
    this.init()
  },
  beforeDestroy() { window.removeEventListener('keyup', this.onWindowKeyUp) },
  methods: {
    ...mapActions(['init']),
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
