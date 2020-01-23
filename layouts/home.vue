<template lang="pug">
div
  .flex.justify-between
    Navbar.top-0.fixed
    nuxt.container.my-20
    .flex.flex-col
      Clock
      MoreInfo
  Footer.fixed.bottom-0.mt-5.pt-5
  //div
    Navbar.fixed.top-0
    MoreInfo.fixed.top-1.w-screen
    nuxt.z-50.pt-3.mt-5.container.h-screen
    Footer.fixed.inset-x-0.bottom-0.mt-5.pt-3

</template>

<script>
// import pdf from 'vue-pdf';

export default {}
</script>

<style></style>
