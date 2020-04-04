<template lang="pug">
div
  .bg-white
    .container.pb-5
      Home
    //- hr
  .bg-gray-500
    .container.py-5
      Services
    //- hr
  .bg-white
    .container.py-5
      Skills
    //- hr
  .bg-gray-500
    .container.py-5
      Portfolio
    //- hr
  .bg-white
    .container.py-5
      About
    //- hr
  .bg-gray-500
    .container.py-5
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
