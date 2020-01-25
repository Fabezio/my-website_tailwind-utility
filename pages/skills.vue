<template lang="pug">
  div
    h1.text-center.pb-5 Formations
    h2.text-center(v-for='(code, i) in codes', :key='i', :href='`#${code.title}`') {{code.title}}
      shrink-0.justify-center
        div.border.rounded.m-3.flex.flex-col.flex-grow(class='' v-for='card in code.content', :key='card.name')
          .flex



            img(class='' rounded :src='card.img', alt='', )
            .flex-col.w-full
              h3.text-center {{card.name}}
              p.light.text-left {{card.desc}}
              p.text-left version: {{card.version}}

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
  width: 100px;
  height: auto;
}
p {
  font-size: 20px;
}
</style>
