<template lang="pug">
  div
    h1.text-center.pb-5 Formations
    h2.text-center(v-for='(code, i) in codes', :key='i', :href='`#${code.title}`') {{code.title}}
      .flex.flex-wrap.shrink-0.justify-center
        div.border.rounded.m-3(class='' v-for='card in code.content', :key='card.name')
          figure.p-2.mb-5
            .bg-purple-200
              img(class='w-screen' rounded :src='card.img', alt='', )
            hr
            figcaption.text-md.rounded-b.bg-purple-600.text-white {{card.name}}

</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'skills',
  name: '',
  data: () => {
    return {}
  },
  computed: {
    ...mapState({
      codes: (state) => state.skills.codes
    })
  },

  head() {
    return {
      title: 'Compétences',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Développeur web JavaScript Frontend'
        }
      ]
    }
  }
}
</script>

<style scoped>
img {
  width: 200px;
  height: 200px;
}
</style>
