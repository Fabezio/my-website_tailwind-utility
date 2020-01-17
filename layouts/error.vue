<template lang="pug">
div
  .bg-red-100.border-l-4.border-red-500.text-orange-700.p-4(role='alert' v-if='error.statusCode === 404')
    span() {{ pageNotFound }}
  .bg-orange-100.border-l-4.border-orange-500.text-orange-700.p-4(role='alert' v-else='')
    span() {{ otherError }}

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
