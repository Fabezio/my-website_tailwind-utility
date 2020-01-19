<template lang="pug">
  div
    h1.text-center.mb-4.header-shadow Portfolio
    h2.text-center.mb-3 Sites créés en formation:
    .flex.mb-4.flex-wrap
      div(v-for='(creation, i) in portfolio', :key='i')
        .text-center()
          nuxt-link(
            :to='{name: "portfolio-mod", params: {mod: creation.mod} }')
            div.thumbnail.flex.items-center.bg-blue-200.m-2.py-3.px-2.rounded
              img.banner(aspect-ratio='1.6' data-toggle='modal', :data-target="`#${ creation.mod}`", :src='creation.banner', :alt='creation.alt')
          button.btn.btn-purple.text-white.mb-4
            a(:href='`https://${creation.url}`' target='_blank') Aller

</template>

<script>
// import portfolio from './portfolio'
export default {
  name: '',
  components: {
    // portfolio
  },
  data() {
    return {
      noToggle: null,
      dialog: false,
      path: '~/assets/img/portfolio'
    }
  },
  computed: {
    portfolio() {
      return this.$store.state.portfolio.portfolio
    }
  },
  head() {
    return {
      title: 'Portfolio',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Développeur web JavaScript Frontend'
        }
      ]
    }
  }
  /*

    */
}
</script>

<style scoped>
.thumbnail {
  width: 320px;
  height: 240px;
  border: 1px solid skyblue;
}
.banner {
  filter: grayscale(100%);
  opacity: 0.75;

  cursor: pointer;
}
.banner:hover {
  filter: grayscale(0%);
  opacity: 1;
}
.visit-button {
  /* position: relative; */
  /* bottom: 62px; */
  /* color: darkslategray; */
  text-decoration: underline #1e88e5;
}
.visit-button:hover {
  color: whitesmoke;
  text-decoration: underline whitesmoke 1px;
  /* color: black; */
}
.card-body {
  border-top: aquamarine 1.5px solid;
}
</style>
