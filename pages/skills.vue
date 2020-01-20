<template lang="pug">
  div
    h1.text-center.pb-5 Formations
    h2.text-center(v-for='(code, i) in codes', :key='i', :href='`#${code.title}`') {{code.title}}
      .flex
        div.border.rounded.m-4(class='' v-for='card in code.content', :key='card.name')
          figure.p-2.mb-5
            .bg-purple-200
              img(class='w-screen w-full' rounded :src='card.img', alt='', )
            hr
            figcaption.text-md.rounded-b.bg-purple-600.text-white {{card.name}}
    //div
      ul.flex
        li.mr-6(v-for='(code, i) in codes', :key='i', :href='`#${code.title}`')
          a.text-blue-500(class='hover:text-blue-800', href='code.title') {{code.title}}

        ul.flex
          li.mr-6(v-for='(code, i) in codes', :key='i', :href='`#${code.title}`')
            .container.flex-row(class='w-4/12' v-for='card in code.content', :key='card.name')
              figure.p-2.flex-col
                .bg-purple-200
                  img( rounded :src='card.img', alt='', )
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
  width: 250px;
  height: 250px;
}
</style>
