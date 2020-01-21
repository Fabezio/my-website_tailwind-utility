<template lang="pug">
div
  h1.text-center.mb-4 Portfolio
  h2.text-center.mb-3 Sites créés en formation:
  .flex.mb-4.flex-wrap.justify-center
    div.text-center(v-for='(creation, i) in portfolio', :key='i')
      nuxt-link(:to='{name: "portfolio-mod", params: {mod: creation.mod} }')
        div.thumbnail.flex.justify-start.bg-blue-200.m-2.py-3.px-2.rounded.shadow
          img.flex.z-0( :src='creation.banner', :alt='creation.alt')
      button.btn.btn-purple.text-white.mb-4
        a(:href='`https://${creation.url}`' target='_blank') Aller

</template>

<script>
// import portfolio from './portfolio'
export default {
  name: '',
  layout: 'skills',
  /*
  components: {
    // portfolio
  },
  data() {
    return {
      noToggle: null,
      dialog: false,
      path: '~/assets/img/portfolio'
    }
  },
*/
  computed: {
    portfolio() {
      return this.$store.state.portfolio.portfolio
    }
  },
  head() {
    return {
      title: 'Portfolio',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Développeur web JavaScript Frontend'
        }
      ]
    }
  }
  /*

    */
}
</script>

<style scoped>
.thumbnail {
  width: 320px;
  height: 240px;
  border: 1px solid skyblue;
}
img {
  filter: blur(1px);
  cursor: pointer;
}
img:hover {
  filter: blur(0px);
}
</style>
