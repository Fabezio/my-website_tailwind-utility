<template lang="pug">
  v-app(light='')
    v-container
      h1
        v-alert(type='error')
          span(v-if='error.statusCode === 404') {{ pageNotFound }}
          span(v-else='') {{ otherError }}
      nuxtlink(to='/') Home page
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: '404 - Page non trouvée',
      otherError: 'Oops! erreur de chargement, désolé!'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>
