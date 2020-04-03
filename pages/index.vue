<template lang="pug">
div
  PageHome
  .container
    Home
    hr
    Services
    hr
    Skills
    hr
    Portfolio
    hr
    About
    hr
    Contact

</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  layout: 'home',
  components: {
    // Logo
  },
  data() {
    return {}
  },
  head() {
    return {
      title: 'Accueil',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Développeur web JavaScript Frontend'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
hr
  display block
  width 67%
  border 5px solid #777
  border-radius 2px
  margin 3rem auto
  background whitesmoke

#photoid
	width 200px
	height 200px
</style>
