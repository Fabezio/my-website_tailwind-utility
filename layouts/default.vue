<template lang="pug">
div
  Navbar
  MoreInfo
  nuxt.min-h-full.container.my-20
  Footer

</template>

<script>
// import pdf from 'vue-pdf';
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MoreInfo from '@/components/MoreInfo'
export default {
  components: {
    Navbar,
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
  @apply font-bold py-2 px-4 rounded;
}
.btn-blue {
  @apply bg-blue-500 text-white;
}
.btn-blue:hover {
  @apply bg-blue-700;
}
.btn-warning {
  @apply bg-yellow-500 text-white;
}
.btn-warning:hover {
  @apply bg-yellow-700;
}
.btn-purple {
  @apply bg-purple-600;
}

body {
  font-family: sans-serif;
  margin-top: 0;
  background: white !important;
}
h1 {
  @apply text-5xl font-bold;
}
h2 {
  @apply text-4xl font-bold;
}
h3 {
  @apply text-3xl font-bold;
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
/*
E cas de nouveaux styles
*/
</style>
