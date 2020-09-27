<template lang="pug">
  #services.px-20
    h1.text-center.mb-4.header-shadow Services
    .card-deck.my-4
      .card.silver-shadow(v-for='(service, i) in services', :key='i')
        h2.card-header {{service.title}}
        .card-body
          p.card-text.text-justify {{service.paragraph}}
    .row.my-5
      .col-md-10
        nuxt-link(to='/contact')
          button.btn.btn-info.text-white.mt-5.mx-auto Oui, je demande une création/amélioration de site web

</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: '',
  name: 'Services',
  data: () => {
    return {}
  },
  computed: {
    ...mapState({
      services: (state) => state.services.services,
    }),
  },
  head() {
    return {
      title: 'Services',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Développeur web JavaScript Frontend',
        },
      ],
    }
  },
  /*

    */
}
</script>

<style lang="stylus" scoped>
h2
  text-indent 1rem
  padding-bottom 1rem
.card-deck
  display flex
  grid-template-columns repeat(3, 1fr)
.card
  border 2px ridge rgba(0,0,0,0.15)
  border-radius 7px
  box-shadow 8px 8px 8px silver
  width 40%
  padding 1rem
  margin 1rem
.carousel-control-prev-icon,
.carousel-control-next-icon
	background rgba(0, 0, 0, 0.5)
	color white
.carousel-caption
	background rgba(0, 0, 0, 0.5)
	border-radius 5px 5px 0 0
.carousel-indicators
	width 1rem
	height 1rem
button
  position: relative
  left 1rem
  box-shadow 8px 8px 8px silver
  width 97%
</style>
