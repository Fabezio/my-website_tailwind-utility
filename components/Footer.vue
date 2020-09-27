<template lang="pug">
footer.bg-purple-600.px-1.py-2.text-white.inset-x-0.border-t.border-purple-700
  nav.flex.items-center.justify-evenly.flex-wrap.pb-3.px-3.pt-0
    //.flex.items-center.flex-shrink-0.text-white.mr-6

    //div(v-for='(link, i) in footerLinks', :key='i')
      nuxt-link.route(class='xl:hidden' :to='link.route')
        button.indigo.btn
          span.mr-2(:class='link.icon')
          span.uppercase {{link.name }}

    //a.indigo(href='https://github.com/Fabezio/my-website_tailwind-utility', target='_blank')
      button.btn
        span.mr-2.fab.fa-github-alt
        span.uppercase mon code source

    //div.mx-3 |


    h6.footertext.pb-2(cols='12')
      .center-text
        strong fabezio.com
        |
        | &copy; {{ new Date().getFullYear() }}
        |
        i - tous droits réservés

    div.flex
      a(v-for='(link, index) in socialNetworks' :key='index' :href='link.url' target='_blank')
        img.w-6.ml-2(:src='link.logo')
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
      socialNetworks: (state) => state.social.socialNetworks,
    }),
  },
}
</script>

<style lang="stylus" scoped>
.footertext
	text-align center
</style>
