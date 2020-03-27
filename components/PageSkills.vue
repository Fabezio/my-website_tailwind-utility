<template lang="pug">
#skills
  h1.text-center.pb-5.uppercase Acquis
  SkillStack.skill-stack

    //template(v-slot:activator='{on}')
      div(v-for='(code) in codes', :key='code.title')
        ul.flex
          li.mr-6
            a.text-blue-500(class='hover:text-blue-800', v-on='on' :href='`#${code.title}`') {{code.title}}
          li.mr-6
            a.text-blue-500(class='hover:text-blue-800', href='#') Link
          li.mr-6
            a.text-blue-500(class='hover:text-blue-800', href='#') Link
          li.mr-6
            a.text-gray-400.cursor-not-allowed(href='#') Disabled

        div.border.rounded.m-3.flex.flex-col.flex-grow(:id='code.title' class=''  v-for='card in code.content', :key='card.name')
          .flex
            img(class='block' rounded :src='card.img', alt='', )
            .flex-col.w-full.mx-2
              h3.text-center {{card.name}}
              p.font-light.text-left {{card.desc}}
              p.font-light.text-gray-500.text-left version: {{card.version}}
        .shrink-0.justify-center


</template>

<script>
import SkillStack from '@/components/SkillStack'
export default {
  layout: '',
  name: '',
  components: {
    SkillStack
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

<style lang="stylus" scoped></style>
