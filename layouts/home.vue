<template lang="pug">
div
  Navbar.fixed.top-0
  MoreInfo.fixed.top-1.w-screen
  nuxt.pt-3.mt-5.container.h-screen
  Footer.fixed.inset-x-0.bottom-0.mt-5.pt-5

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
