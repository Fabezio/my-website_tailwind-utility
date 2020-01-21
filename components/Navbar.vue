<template lang="pug">
div.sticky.inset-x-0.top-0.z-0
  nav.flex.items-center.justify-between.flex-wrap.p-3.bg-purple-600(class='flex-wrap')
    .flex.items-center.flex-shrink-0.text-white(class='xl:flex-row xl:flex-wrap')
      nuxt-link.brand.flex.btn.items-center(to='/')
        img(src='@/assets/favicon-32.png')
        .text-3xl.ml-1.font-semibold.tracking-tight.uppercase fabezio.org

    .flex.flex-row.justify-around.text-center.w-full( class='flex-row xl:items-center xl:w-auto xl:inline xl:flex-wrap')
      div(v-for='(link, i) in navbarLinks', :key='i')
        nuxt-link(class='' :to='link.route' :title='link.name')
          button.btn.block.indigo(class='inline-block xl:mt-0 hover:text-white')
            span(:class='link.icon')
            span(
              class='ml-2 hidden xl:block').uppercase {{ link.name }}

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
