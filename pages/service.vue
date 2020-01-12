<template lang="pug">
  #services
    h1.text-center.mb-4.header-shadow Services
    .card-deck.my-4
      .card.silver-shadow(v-for='(service, i) in services', :key='i')
        h2.card-header {{service.title}}
        .card-body
          p.card-text.text-justify {{service.paragraph}}
    .row.my-5
      .col-md-12
        a.btn.btn-lg.btn-block.btn-primary.text-light.btn-shadow(href='#') Oui, je demande une création/amélioration de site web

</template>

<script>
import { mapState } from 'vuex'
export default {
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

<style scoped>
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background: rgba(0, 0, 0, 0.5);
  color: white;
}

.carousel-caption {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px 5px 0 0;
  /*
  */
}
.carousel-indicators {
  width: 1rem;
  height: 1rem;
}
</style>
