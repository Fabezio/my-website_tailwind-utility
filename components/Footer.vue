<template lang="pug">
  footer.bg-orange-600.p-3.text-white.fixed.inset-x-0.bottom-0.border-t.border-yellow-700
    nav.flex.items-center.justify-center.flex-wrap.pb-3
      //.flex.items-center.flex-shrink-0.text-white.mr-6

      nuxt-link.route(v-for='(link, i) in footerLinks', :key='i' :to='link.route')
        v-btn.vnav(text rounded) {{link.name }}
        //div(icon)
          v-icon.mr-2(size='24px') {{link.icon}}
          div(text)


      a(href='https://github.com/Fabezio/my-website_tailwind-utility', target='_blank')
        v-btn(rounded)
          div(text)
          | mon code source
      div.mx-3 |
      a(v-for='(link, index) in socialNetworks' :key='index' :href='link.url' target='_blank')
        img.w-6.ml-2(:src='link.logo')






    v-col.footertext(cols='12')
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
