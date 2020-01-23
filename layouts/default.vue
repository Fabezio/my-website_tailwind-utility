<template lang="pug">
div
  .flex.justify-between
    VerticalBar.bg-purple-600
      Navbar.top-0.fixed
    nuxt.container.my-20
    VerticalBar
      Clock
      MoreInfo
  Footer.absolute.bottom-0.mt-5.pt-5.z-10

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

<style>
.btn {
  @apply font-bold;
  @apply py-2;
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
}
p:first-letter {
  font-size: 17px;
}
.indigo {
  color: indigo !important;
}
.indigo:active {
  @apply text-red-300;
}
.nuxt-link-exact-active:not(.brand) button {
  @apply bg-purple-300;
  @apply py-3;
}
/*
En cas de nouveaux styles
*/
</style>
