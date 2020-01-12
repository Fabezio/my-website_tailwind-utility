<template lang="pug">
  v-footer.flex(padless justify='center' color='blue' dark)
    v-row(no-gutters flat)

      v-spacer
      //- div()
      nuxt-link.route(v-for='(link, i) in footerLinks', :key='i' :to='link.route')
        v-btn.vnav(text rounded) {{link.name }}
        //div(icon)
          v-icon.mr-2(size='24px') {{link.icon}}
          div(text)

      //a(href='https://github.com/Fabezio/my_website-vuetify-nuxt', target='_blank')
        v-btn(rounded)
          div(text)
          | mon code source
          v-btn.vnav(rounded)
          div(icon)
            v-icon.mr-2(size='24px') fab fa-github
      v-spacer

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
      footerLinks: (state) => state.links.footerLinks
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
