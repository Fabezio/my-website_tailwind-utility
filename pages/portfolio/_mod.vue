<template lang="pug">
div
  h1.text-center.mb-4 {{portfolio.name}}
  .flex.items-center.mx-auto
    div
      img(:src="portfolio.img" :alt="portfolio.alt" aspect-ratio='1.7')
    .mx-auto
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
