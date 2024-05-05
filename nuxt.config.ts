// https://nuxt.com/docs/api/configuration/nuxt-config
import modules from './modules'


export default ({
  ...modules,
  loading: { color: '#blue', height: '5px' },
  ssr: false,
  css: [
    "~/node_modules/bootstrap/dist/css/bootstrap.min.css",
    '~/static/assets/css/main.css'
  ],

  plugins: [
    { src: "~/plugins/bootstrap.js", mode: 'client'},
    '~/plugins/loadImages.js',
    '~/plugins/firebase.js',
  ],

  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Parisienne&display=swap' }
    ]
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  modules: ["@nuxt/image", "@nuxtjs/tailwindcss"]
});