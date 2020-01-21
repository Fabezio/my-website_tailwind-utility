<template lang="pug">
div
  Navbar.top-0.fixed
  MoreInfo
  // Clock
  nuxt.container.my-20
  Footer.mt-5.pt-5

</template>

<script>
// import pdf from 'vue-pdf';
import Navbar from '@/components/Navbar'
import Clock from '@/components/Clock'
import Footer from '@/components/Footer'
import MoreInfo from '@/components/MoreInfo'
export default {
  components: {
    Navbar,
    Clock,
    MoreInfo,
    Footer
  },
  data() {
    return {}
  },
  head() {
    return {
      titleTemplate: 'Fabezio - %s',
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

<style>
.btn {
  @apply font-bold;
  @apply py-2;
  @apply px-4;
  @apply rounded;
}
.btn-blue {
  @apply bg-blue-500;
  @apply text-white;
}
.btn-blue:hover {
  @apply bg-blue-700;
}
.btn-warning {
  @apply bg-yellow-500;
  @apply text-white;
}
.btn-warning:hover {
  @apply bg-yellow-700;
}
.btn-purple {
  @apply bg-purple-600;
}
h1 {
  @apply text-5xl;
  @apply font-bold;
}
h2 {
  @apply text-4xl;
  @apply font-bold;
}
h3 {
  @apply text-3xl;
  @apply font-bold;
}

body {
  font-family: sans-serif;
  margin-top: 0;
  background: white !important;
}

p {
  text-align: justify;
  text-indent: 1rem;
}
p:first-letter {
  font-size: 1.25rem;
}
.indigo {
  color: indigo !important;
}
.indigo:active {
  @apply text-red-300;
}
.nuxt-link-exact-active:not(.brand) button {
  @apply rounded-full;
  @apply bg-purple-300;
  @apply py-3;
}
/*
E cas de nouveaux styles
*/
</style>
