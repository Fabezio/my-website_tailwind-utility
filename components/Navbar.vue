<template lang="pug">
div.sticky.inset-x-0
  nav.flex.items-center.justify-between.flex-wrap.bg-orange-500.p-3
    .flex.items-center.flex-shrink-0.text-white.mr-3
      nuxt-link.flex.btn.items-center(to='/')
        img(src='@/assets/favicon-32.png')
        h2.ml-2.font-semibold.text-xl.tracking-tight fabezio.com
    .block(class='lg:hidden')
      button.flex.items-center.px-3.py-2.border.rounded.text-teal-200.border-teal-400(class='hover:text-white hover:border-white')
        svg.fill-current.h-3.w-3(viewBox='0 0 20 20', xmlns='http://www.w3.org/2000/svg')
          title Menu
          path(d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z')
    .w-full.block.flex-grow(class='lg:flex lg:items-center lg:w-auto')
      div(v-for='(link, i) in navbarLinks', :key='i')
        nuxt-link(class='lg:flex-grow' :to='link.route')
          // div(icon) {{link.icon}}
          .btn.text-3xl.block.mt-4.text-teal-200(class='lg:inline-block lg:mt-0 hover:text-white') {{link.name }}
      //.text-sm(class='lg:flex-grow')
        a.block.mt-4.text-teal-200.mr-4(href='#responsive-header', class='lg:inline-block lg:mt-0 hover:text-white')
          | Docs
        a.block.mt-4.text-teal-200.mr-4(href='#responsive-header', class='lg:inline-block lg:mt-0 hover:text-white')
          | Examples
        a.block.mt-4.text-teal-200(href='#responsive-header', class='lg:inline-block lg:mt-0 hover:text-white')
          | Blog
      //div
        a.inline-block.text-sm.px-4.py-2.leading-none.border.rounded.text-white.border-white.mt-4(href='#', class='hover:border-transparent hover:text-teal-500 hover:bg-white lg:mt-0') Download



    v-spacer
    .navbar-end
      .navbar-item
        div(v-for='link in dropdownLinks', :key='link.route')
          nuxt-link.nav-link.buttons(:to='link.route')
            // iconstack(:faclass='link.icon')
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

<style>
.brand-icon {
  margin-right: 0;
}
</style>
