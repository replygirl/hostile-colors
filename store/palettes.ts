import convert from 'color-convert'
import hello from 'hello-color'
import tinycolor from 'tinycolor2'
import { ActionTree, GetterTree, MutationTree } from 'vuex'

import { RootState } from '.'

export const state = () => ({ i: 0, v: [] })

export interface PalettesState {
  i: number
  v: any[]
}

export const getters: GetterTree<PalettesState, RootState> = {
  canRedo: (_, { next }) => !!next.length,
  canUndo: (_, { previous }) => !!previous.length,
  current: ({ i, v }) => v[i],
  next: ({ i, v }) => v.slice(0, i),
  previous: ({ i, v }) => v.slice(i + 1)
}

export const mutations: MutationTree<PalettesState> = {
  addPalette(s, x) {
    s.v = [x, ...s.v.slice(s.i)]
    s.i = 0
  },
  clearPalettes(s) {
    s.v = []
    s.i = 0
  },
  redo(s) { s.i = Math.max(s.i - 1, 0) },
  undo(s) { s.i = Math.min(s.i + 1, s.v.length - 1) }
}

const r = (a: any, b: any) =>
  tinycolor.isReadable(a, b, { level: 'AA', size: 'large' })

const isHostile = ({ base: a, color: b, contrast, hues: [c] }: any) =>
  (contrast < 1.01) && ![[a, b], [b, c], [c, a]].some(([x, y]) => r(x, y))

const createPalette = (): any => {
  const p = hello(tinycolor.random().toHexString(), { contrast: 0 })
  return isHostile(p)
    ? {
      ...p,
      primary: p.base,
      accent: (p as any).color,
      background: p.hues[0],
      dark: tinycolor(p.hues[1]).desaturate(50).darken(20).toHexString(),
      light: tinycolor(p.hues[2]).desaturate(50).lighten(20).toHexString(),
    } : createPalette()
}

export const actions: ActionTree<PalettesState, RootState> = {
  clear({ commit }) { commit('clearPalettes') },
  generate({ commit }) {
    const p = createPalette()
    commit('addPalette', p)
    window.heap.track('Generate', p)
  },
  init({ dispatch, state: { v: [x] } }) { if (!x) dispatch('generate') },
  redo({ commit }) { commit('redo') },
  undo({ commit }) { commit('undo') }
}
