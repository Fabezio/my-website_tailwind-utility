<template lang="pug">
  v-container(color='white')
    v-row(md10 justify='center')
      v-col(cols='2')
        img.id-photo(width='150', height='150', src='@/assets/img/me.jpg')
      v-col(cols='8')
        v-card-text
          h1.mb-3 fabezio.com
          h2 Développeur Web FrontEnd spécialisé JS

    v-row(md10 justify='center')
      v-col(cols='10')
        h2 Bienvenue sur ce site!

        p Si vous êtes ici, c'est que vous avez besoin d'un développeur web, en freelance ou contrat interne. J'ai envie de vous dire que vous êtes au bon endroit; néanmoins vous émettez certainement des réserves et avez besoin de preuves de mes compétences. C'est pourquoi tout est décrit ici.
        p Je vous invite donc à prendre le temps de visiter ce site et consulter
          span &nbsp;
          a(href='https://github.com/Fabezio/fabezio_nuxt', target='_blank') ma page github
          | , afin de vous forger votre propre avis. N'hésitez pas à tester plus avant mes acquis, me faire un retour
          span &nbsp;
          a(href='mailto:fabezio@outlook.fr') par mail
          span &nbsp;
          | et/ou émettre des suggestions (c'est grâce aux erreurs qu'on apprend et progresse).
        p Sur ce, je vous souhaite une bonne visite!

</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  // layout: "home",
  components: {
    // Logo
  },
  data() {
    return {}
  },
  head() {
    return {
      title: 'Accueil',
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

<style>
.id-photo {
  border-radius: 3px;
  border: black solid 1px;
}
</style>
