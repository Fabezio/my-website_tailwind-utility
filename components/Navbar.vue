<template lang="pug">
div.sticky.inset-x-0
  nav.flex.items-center.justify-between.flex-wrap.bg-purple-600
    .flex.items-center.flex-shrink-0.text-white.mr-3
      nuxt-link.brand.flex.btn.items-center(to='/')
        img(src='@/assets/favicon-32.png')
        h2.ml-2.font-semibold.text-xl.tracking-tight.uppercase fabezio.com

    .w-full.block.flex.flex-row(class=' md:items-center md:w-auto')
      div(v-for='(link, i) in navbarLinks', :key='i')
        nuxt-link.justify-center(class='text-2xl' :to='link.route' :title='link.name')
          button.btn.block.mt-4.indigo(class='inline-block md:mt-0 hover:text-white')
            span(:class='link.icon')
            span.ml-2(class='invisible md:visible').uppercase {{link.name }}

    //.navbar-end
      .navbar-item
        div(v-for='link in logs', :key='link.route')
          nuxt-link.nav-link.buttons(:to='link.route')
            iconstack(:faclass='link.icon')
              span.route {{link.name}}

</template>

<script>
import { mapState } from 'vuex'
// import IconStack from '@/components/IconStack'
export default {
  name: 'Navbar',
  components: {
    // IconStack
  },
  data() {
    return {
      navCollapse: false,
      dropdown: false,
      // signUser: true,
      // logUser: false,
      dropdownLinks: []
    }
  },
  computed: {
    ...mapState({
      navbarLinks: (state) => state.links.navbarLinks
      // logs: (state) => state.user.logs
    })
  },
  methods: {
    navbarToggle() {
      this.navCollapse = !this.navCollapse
    },
    toggleSignUser() {
      this.signUser = !this.signUser
    },
    toggleLogUser() {
      this.logUser = !this.logUser
    },
    displayDropdown() {
      this.dropdown = !this.dropdown
    },

    userbtn() {},
    isActive() {
      this.links = 'active'
    },
    brandToHelp() {
      return this.$router.push('/help')
    }
  }
}
</script>

<style scoped>
.brand-icon {
  margin-right: 0;
}
</style>
