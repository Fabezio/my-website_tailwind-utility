<template v-slot:activator="{ on }" lang="pug">
div.mx-auto(class="lg:w-2/3")
  //ul.flex
    li.mr-6(v-for='(code, i) in codes', :key='i')
      a.text-blue-500(class='hover:text-blue-800', v-on='on' :href='`#${code.title}`') {{code.title}}

  h2.font-light(v-for='(code,i) in codes', :key='i' ) {{code.title}}
    .main.border.rounded.m-3.flex.flex-col.flex-grow(:id='code.title' :class='card.name === !code.title.name  ? "hidden" : "block"' v-for='card in code.content', :key='card.name')
      .flex()
        img(class='block' rounded :src='card.img', alt='', )
        .flex-col.w-full.mx-2
          h3 {{card.name}}
          p.font-light.text-left {{card.desc}}
          p.version.font-light.text-gray-500.text-left version: {{card.version}}

</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: '',
  name: '',
  data: () => {
    return {}
  },
  computed: {
    ...mapState({
      codes: (state) => state.skills.codes
    })
  }
}
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
}
p {
  font-size: 20px;
}
</style>
