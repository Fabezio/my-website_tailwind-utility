<template lang="pug">
  div
    .w-screen.border(class='lg:max-w-full lg:flex')
      img.w-auto.rounded(class='hidden lg:block ' src='@/assets/img/me.jpg')
      .bg-white.rounded-b.p-4.flex.flex-col.justify-around.leading-normal(class='lg:border-l-0 lg:border-t lg:border-gray-400 lg:rounded-b-none lg:rounded-r')
        div.flex(class='flex-col' )
          h1.mb-3.text-left.text-center(class='lg:text-left') fabezio.org
          h2.text-center(class='lg:text-left') Développeur Web FrontEnd spécialisé JS

    div.my-auto
      h2.p-5.text-center Bienvenue sur ce site!
      main.mx-2(class="lg:mx-0")

        p Si vous êtes ici, c'est que vous avez besoin d'un développeur web, en freelance ou contrat interne. J'ai envie de vous dire que vous êtes au bon endroit; néanmoins vous émettez certainement des réserves et avez besoin de preuves de mes compétences. C'est pourquoi tout est décrit ici.
        p Je vous invite donc à prendre le temps de visiter ce site et consulter
          |
          |
          a.text-purple-600(href='https://github.com/Fabezio/fabezio_nuxt', target='_blank') ma page github
          | , afin de vous forger votre propre avis. N'hésitez pas à tester plus avant mes acquis, me faire un retour
          |
          a.text-purple-600(href='mailto:fabezio@outlook.fr') par mail
          |
          | et/ou émettre des suggestions (c'est grâce aux erreurs qu'on apprend et progresse).
        p Sur ce, je vous souhaite une bonne visite!

</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  layout: 'home',
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

<style scoped>
img {
  width: 200px;
  height: 200px;
}
.id-photo {
  border-radius: 3px;
  border: black solid 1px;
}
</style>
