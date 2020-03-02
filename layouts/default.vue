<template lang="pug">
div
  Navbar.top-0.fixed
  MoreInfo
  SignIn
  // Clock
  nuxt.container(class="md:my-20")
  Footer.mt-5.pt-5(class="lg:absolute lg:bottom-0")

</template>

<script>
// import pdf from 'vue-pdf';
import Navbar from '@/components/Navbar'
import SignIn from '@/components/SignIn'
import Clock from '@/components/Clock'
import Footer from '@/components/Footer'
import MoreInfo from '@/components/MoreInfo'
export default {
  components: {
    Navbar,
    SignIn,
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

<style lang="stylus">
.btn-purple
  @apply bg-purple-600;

h1
  @apply text-5xl;
  @apply font-bold;

h2
  @apply text-4xl;
  @apply font-bold;

h3
  @apply text-3xl;
  @apply font-bold;


body
	font-family sans-serif
	margin-top 0
	background white !important
p
	text-align justify
.indigo
	color indigo !important

.indigo:active
  @apply text-red-300;
  @apply py-2;

.indigo:hover
  @apply bg-purple-300;
  @apply opacity-75;
  @apply rounded-full;
  @apply w-full;

.nuxt-link-exact-active:not(.brand) button
  @apply bg-purple-300;
  @apply py-2 !important;
  @apply w-full;

/*
En cas de nouveaux styles
*/
</style>
