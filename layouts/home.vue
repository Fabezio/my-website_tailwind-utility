<template lang="pug">
  v-app
    Navbar
    v-content
      v-content.my-6
        nuxt
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
