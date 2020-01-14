<template lang="pug">
div
  Navbar
  nuxt.container
  Footer

</template>

<script>
// import pdf from 'vue-pdf';
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style></style>
