<template lang="pug">
  div
    h1.title.text-center Plan du site
    h2.subtitle
    i Pour garder le nord
    div(v-for="(link,i) in navbarLinks" :key="i")
      nuxt-link(:to="link.route") {{link.name}}
    div(v-for="(link,i) in footerLinks" :key="i")
      nuxt-link(:to="link.route") {{link.name}}

</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      navbarLinks: (state) => state.links.navbarLinks,
      footerLinks: (state) => state.links.footerLinks
    })
  },
  head() {
    return {
      title: 'Plan du site',
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
// console.log(navbarLinks)
</script>
script
