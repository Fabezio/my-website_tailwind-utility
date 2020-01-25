<template lang="pug">
div
  h1.text-center.mb-4 Portfolio
  h2.text-center.mb-3 Sites créés en formation:
  .flex.mb-4.flex-wrap.justify-center
    div.text-center(v-for='(creation, i) in portfolio', :key='i')
      nuxt-link( :to='{name: "portfolio-mod", params: {mod: creation.mod} }')
        div.flex.justify-start.bg-blue-200.m-2.p-2.rounded.shadow(class='hover:bg-blue-300')
          img.thumbnail.w-full(class='' :src='creation.banner', :alt='creation.alt')
      button.btn.btn-purple.text-white.mb-4(class="hover:bg-purple-400")
        a(:href='`https://${creation.url}`' target='_blank' ) Aller

</template>

<script>
// import portfolio from './portfolio'
export default {
  name: '',
  layout: '',
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
}
</style>
