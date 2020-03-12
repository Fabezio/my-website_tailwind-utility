<template lang="pug">
  #services
    h1.text-center.mb-4.header-shadow Services
    .card-deck.my-4
      .card.silver-shadow(v-for='(service, i) in services', :key='i')
        h2.text-center.card-header {{service.title}}
        .card-body
          p.card-text.text-justify {{service.paragraph}}
    .row.my-5
      .col-md-12
        nuxt-link(to='/contact')
          button.btn.btn-info.w-full.text-white.mt-5 Oui, je demande une création/amélioration de site web

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
      services: (state) => state.services.services
    })
  },
  head() {
    return {
      title: 'Services',
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

<style lang="stylus" scoped>
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
</style>
