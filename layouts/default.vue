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

export default {
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
.btn
  @apply rounded
  @apply p-1 !important
  @apply mx-1 !important
  @apply font-bold !important;
.btn span
  @apply text-base !important

.btn-info
.btn-warning
.btn-success
  @apply text-white;

.btn-info
  @apply bg-blue-500 !important;
  &:hover
    @apply bg-blue-700;

.btn-success
  @apply bg-green-400  !important;
  &:hover
    @apply bg-green-700 !important;

.btn-warning
  @apply bg-yellow-500;
  &:hover
    @apply bg-yellow-700;
.btn-purple
  @apply bg-purple-600;
  &hover
    @apply bg-purple-300

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
	@apply text-red-700
  @apply rounded-full

.indigo:active
  @apply text-red-300;
  @apply py-2;

.indigo:hover
  @apply rounded-full
  @apply bg-purple-300;
  @apply opacity-75;
  @apply w-full;

.nuxt-link-exact-active:not(.brand) button
  @apply rounded-full !important
  @apply bg-purple-300;
  @apply py-1 !important;
  @apply w-full;

/*
En cas de nouveaux styles
*/
</style>
