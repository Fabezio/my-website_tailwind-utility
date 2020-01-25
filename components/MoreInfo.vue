<template lang="pug">
div.relative.z-10.inset-x-0.top-1.w-screen(class="hidden lg:hidden")
  p.italic.text-center.text-sm.bg-yellow-500(class='md:text-lg') Pour de plus amples informations, vous pouvez à tout moment consulter
    |
    |
    a.indigo(href='https://github.com/Fabezio/my-website_tailwind-utility', target='_blank') le code source
    |
    | ou
    |
    nuxt-link.indigo.mr-0(to='/progress') la page de progression du site
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
.indigo {
  color: indigo;
}
</style>
