<template lang="pug">
v-container
  h1.text-center Fiche de {{portfolio.name}}
  .flex
    div
      img(:src="portfolio.img" :alt="portfolio.alt" aspect-ratio='1.7')
    .items-center.text-center
      h3 {{portfolio.desc}}


</template>

<script>
// import { mapState } from 'vuex'
export default {
  data() {
    return {
      mod: this.$route.params.mod
    }
  },
  computed: {
    portfolio() {
      return this.$store.state.portfolio.portfolio.find(
        (portfolio) => portfolio.mod === this.mod
      )
    }
  }
}
</script>

<style scoped></style>
