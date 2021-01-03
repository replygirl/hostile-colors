export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Hostile Colors',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'description',
        content: 'Color palettes for able users'
      },
      {
        name: 'og:title',
        content: 'Hostile Colors'
      },
      {
        name: 'og:site_name',
        content: 'Hostile Colors'
      },
      {
        name: 'og:type',
        content: 'website'
      },
      {
        name: 'og:locale',
        content: 'en_US'
      },
      {
        name: 'og:url',
        content: 'https://hostilecolors.com'
      },
      {
        name: 'og:image',
        content: 'https://hostilecolors.com/og-image.png'
      },
      {
        name: 'og:image:type',
        content: 'image/png'
      },
      {
        name: 'og:image:width',
        content: '2400'
      },
      {
        name: 'og:image:height',
        content: '1260'
      },
      {
        name: 'og:image:alt',
        content: 'You can\'t tell what\'s in this image'
      },
      {
        name: 'twitter:card',
        content: 'sumary'
      },
      {
        name: 'twitter:site',
        content: '@replygirI'
      },
      {
        name: 'twitter:title',
        content: 'Hostile Colors'
      },
      {
        name: 'twitter:description',
        content: 'Color palettes for able users'
      },
      {
        name: 'twitter:image',
        content: 'https://hostilecolors.com/twitter-image.png'
      },
      {
        name: 'msapplication-TileColor',
        content: '#d1666f'
      },
      {
        name: 'theme-color',
        content: '#d1666f'
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://hostilecolors.com'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest'
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#d1666f'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'destyle.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/persisted-state.client.ts' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
