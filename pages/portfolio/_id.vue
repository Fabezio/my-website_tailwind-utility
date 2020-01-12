<template lang="pug">
v-container
  h1 Fiche de {{this.$route.params.id}}
  v-row
    v-col
      v-img(src="https://picsum.photos/510/300?random" aspect-ratio='1.7')
    v-col
      h2 description
      p ceci est un site de démonstration

</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      portfolio: (state) => state.portfolio.created
    }),
    id() {
      return this.$route.params.id
    }
  }
}
</script>

<style scoped></style>
