<template lang="pug">
div.sticky.inset-x-0.top-0
  nav.flex.items-center.justify-between.flex-wrap.py-1.pr-3.bg-purple-600
    .flex.items-center.flex-shrink-0.text-gray-500.mr-6
      nuxt-link.brand.flex.btn.items-center(to='/')
        img(src='@/assets/favicon-32.png')
        div.text-2xl.ml-1.font-semibold.tracking-tight.uppercase fabezio

    .block(class='lg:hidden')
      button.flex.items-center.px-3.py-2.border.rounded.text-teal-200.border-teal-400(@click="navbarToggle" aria-target='#links' class='hover:text-white hover:border-white')
        span.fas.fa-bars
        //svg.fill-current.h-3.w-3(viewBox='0 0 20 20', xmlns='http://www.w3.org/2000/svg')
          title Menu
          path(d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z')

    #links.flex-col.w-full.flex-grow.text-center.block( :class='navCollapse ? "block" : "hidden"' class='lg:flex-row lg:items-center lg:w-auto lg:flex lg:justify-start')
      div(v-for='(link, i) in navbarLinks', :key='i')
        nuxt-link( :to='link.route' :title='link.name' @click='!navbarToggle')
          button.btn.block.indigo(class='inline-block lg:mt-0 hover:text-white hover:indigo')
            span(:class='link.icon')
            span.text-base(
              class='ml-2').uppercase {{link.name }}

    .navbar-end(:class='navCollapse ? "block" : "hidden"' class='lg:flex-row lg:items-center lg:w-auto lg:flex lg:justify-start')
      .navbar-item.flex.flex-grow.justify-end
        div(v-for='(link, i) in logs', :key='i')
          //nuxt-link.nav-link.buttons(:to='link.route')
          button.block.btn.w-full(:class='link.color')
            span(:class='link.icon')
            //iconstack(:faclass='link.icon')
            //span.ml-1.uppercase.route {{link.title}}

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
      navbarLinks: (state) => state.links.navbarLinks,
      logs: (state) => state.user.logs
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

<style lang="stylus" scoped>
.btn
  @apply font-bold;
  @apply rounded;
.btn span
  @apply text-base !important

.btn-info
  @apply bg-blue-500 !important;
  @apply text-white;
  &:hover
    @apply bg-blue-700;

.btn-success
  @apply bg-green-400  !important;
  @apply text-white;
  &:hover
    @apply bg-green-700 !important;

.btn-warning
  @apply bg-yellow-500;
  @apply text-white;
  &:hover
    @apply bg-yellow-700;
.brand-icon
	margin-right 0
</style>
