<template lang="pug">
  #help
    h1.title.text-center Aide
    article.text-justify
      p Un coup de main? (ou un clic de souris, peut-être...)

</template>

<script>
export default {
  name: 'Help',
  head() {
    return {
      title: 'Aide',
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
