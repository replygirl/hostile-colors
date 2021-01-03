import { ActionTree } from 'vuex'

export const state = () => ({})

export type RootState = ReturnType<typeof state>

export const actions: ActionTree<RootState, RootState> = {
  init({ dispatch }) { dispatch('palettes/init') }
}
