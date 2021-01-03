import createPersistedState from 'vuex-persistedstate'

export default ({ store }: any) =>
  createPersistedState({
    key: 'hostile-colors',
    paths: ['palettes']
  })(store)
