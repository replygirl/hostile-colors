import { ActionTree } from 'vuex'

const CURRENT_VERSION = '2'

export const state = () => ({})

export type RootState = ReturnType<typeof state>

export const actions: ActionTree<RootState, RootState> = {
  clear({ dispatch }) { dispatch('palettes/clear') },
  init({ dispatch }) {
    if (localStorage?.getItem('v') !== CURRENT_VERSION) dispatch('clear')

    dispatch('palettes/init')
  }
}
