<template lang="pug">
div.min-h-screen
  Navbar.fixed.top-0
  MoreInfo.top-1.
  nuxt.z-50.container
  Footer.inset-x-0.mt-5.pt-3(class="md:absolute md:bottom-0")

</template>

<script>
// import pdf from 'vue-pdf';
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MoreInfo from '@/components/MoreInfo.vue'
export default {
  components: {
    Navbar,
    MoreInfo,
    Footer
  }
}
</script>

<style></style>
