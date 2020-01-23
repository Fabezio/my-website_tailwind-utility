<template lang="pug">
div
  p.italic.text-center.text-sm.bg-yellow-500(class='md:text-lg') Pour de plus amples informations, vous pouvez à tout moment consulter&nbsp;
    a.indigo(href='https://github.com/Fabezio/my-website_tailwind-utility', target='_blank') le code source
    span &nbsp;ou
    span &nbsp;
    nuxt-link.indigo.mr-0(to='/progress') la page de progression du site
</template>

<script>
export default {
  data() {
    return {
      space: '&nbsp;'
    }
  }
}
</script>

<style scoped>
.indigo {
  color: indigo;
}
</style>
