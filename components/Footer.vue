<template lang="pug">
  footer.bg-purple-600.p-1.text-white.inset-x-0.border-t.border-purple-700
    nav.flex.items-center.justify-center.flex-wrap.pb-3
      //.flex.items-center.flex-shrink-0.text-white.mr-6

      div(v-for='(link, i) in footerLinks', :key='i')
        nuxt-link.route(class='xl:hidden' :to='link.route')
          button.indigo.btn
            span.mr-2(:class='link.icon')
            span.uppercase {{link.name }}

      a.indigo(href='https://github.com/Fabezio/my-website_tailwind-utility', target='_blank')
        button.btn
          span.mr-2.fab.fa-github-alt
          span.uppercase mon code source

      div.mx-3 |
      a(v-for='(link, index) in socialNetworks' :key='index' :href='link.url' target='_blank')
        img.w-6.ml-2(:src='link.logo')

    div.footertext(cols='12')
      div.center-text {{ new Date().getFullYear() }}
        strong  &copy; fabezio.com

</template>

<script>
import { mapState } from 'vuex'
// import IconStack from '@/components/IconStack'
export default {
  name: 'Footer',
  components: {
    // IconStack
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      footerLinks: (state) => state.links.footerLinks,
      socialNetworks: (state) => state.social.socialNetworks
    })
  }
}
</script>

<style scoped>
.footertext {
  text-align: center;
}
/*
  v-footer {
    margin: 0;
    padding: 0;
  }
*/
</style>
