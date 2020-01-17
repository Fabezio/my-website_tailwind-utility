<template lang="pug">
  div
    h1.text-center.pb-5 Formations
    h2.text-center.pb-5(v-for='(code, i) in codes', :key='i', :href='`#${code.title}`') {{code.title}}
      .flex
        div.border.rounded.m-4(v-for='card in code.content', :key='card.name')
          figure.p-2
            .bg-green-100
              img.min-w-full.w-screen(rounded :src='card.img', alt='', )
            hr
            figcaption.text-md.rounded-b.bg-purple-600.text-white {{card.name}}



</template>

<script>
import { mapState } from 'vuex'
export default {
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

<style scoped></style>
