<template lang="pug">
  div
    h1.text-center.my-12 Formations
    v-tabs.elevation-2(v-model='tab', :dark='dark', :light='light', :centered='centered', :grow='grow', :vertical='vertical', :right='right', :prev-icon="prevIcon ? 'mdi-arrow-left-bold-box-outline' : undefined", :next-icon="nextIcon ? 'mdi-arrow-right-bold-box-outline' : undefined", :icons-and-text='icons')
      v-tabs-slider
      v-tab(v-for='(code, i) in codes', :key='i', :href='`#${code.title}`') {{code.title}}
      v-tab-item(v-for='(code, i) in codes', :key='i', :value='`${code.title}`')
        v-card.d-inline-flex( background-color='deep-purple accent-4', :dark='dark', :light='light')
          v-row()
            v-col(:cols='12/code.content.length', v-for='card in code.content', :key='card.name')
              div()
                v-img.white--text.black--background.align-end(rounded :src='card.img', alt='', :width='dim', :height="dim" )
                v-card-title.text-center {{card.name}}


</template>

<script>
import { mapState } from 'vuex'
export default {
  name: '',
  data: () => {
    return {
      dim: '350',
      tab: null,
      icons: false,
      centered: false,
      grow: true,
      vertical: false,
      prevIcon: false,
      nextIcon: false,
      right: false,
      dark: false,
      light: true,
      tabs: 3
    }
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
