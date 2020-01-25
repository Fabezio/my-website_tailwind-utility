<template lang="pug">
div.sticky.inset-x-0.top-0
  nav.flex.items-center.justify-between.flex-wrap.p-2.bg-purple-600
    .flex.items-center.flex-shrink-0.text-gray-500.mr-6
      nuxt-link.brand.flex.btn.items-center(to='/')
        img(src='@/assets/favicon-32.png')
        div.text-2xl.ml-1.font-semibold.tracking-tight.uppercase fabezio

    .block(class='lg:hidden')
      button.flex.items-center.px-3.py-2.border.rounded.text-teal-200.border-teal-400(@click="navbarToggle" aria-target='#links' class='hover:text-white hover:border-white')
        svg.fill-current.h-3.w-3(viewBox='0 0 20 20', xmlns='http://www.w3.org/2000/svg')
          title Menu
          path(d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z')

    #links.flex-col.w-full.flex-grow.text-center.block( :class='navCollapse ? "block" : "hidden"' class='lg:flex-row lg:items-center lg:w-auto lg:flex lg:justify-start')
      div(v-for='(link, i) in navbarLinks', :key='i')
        nuxt-link( :to='link.route' :title='link.name' @click='!navbarToggle')
          button.btn.block.indigo(class='inline-block lg:mt-0 hover:text-white hover:indigo')
            span(:class='link.icon')
            span(
              class='ml-2').uppercase {{link.name }}

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
      visible: false,
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
