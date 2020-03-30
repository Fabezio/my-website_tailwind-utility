<template lang="pug">
div.min-h-screen
  Navbar.fixed.top-0
  MoreInfo.top-1
  //SignIn
  nuxt
  Footer.mt-10(class="relative md:bottom-0")

</template>

<script>
// import pdf from 'vue-pdf';
export default {}
</script>

<style lang="stylus">
h1
  @apply uppercase
  @apply mt-10
  letter-spacing 2px
h2
  @apply mt-10
  @apply capitalize
  letter-spacing 1px
</style>
