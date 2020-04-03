<template lang="pug">
#home
  img.banner.w-full.h-auto(src='/img/bannière_métal_luisant.png')
  .border.rounded-b-lg(class='lg:max-w-full md:w-11/12 md:mx-auto lg:flex')
    img#photoid.w-auto.rounded-b-lg(class='hidden lg:block ' src='img/face_co.png')
    .bg-white.rounded-b.p-4.flex.flex-col.justify-around.leading-normal(class='lg:border-l-0 lg:border-t lg:border-gray-400 lg:rounded-b-none lg:rounded-r')
      .flex(class='flex-col' )
        h1.my-0.text-left.text-center(class='lg:text-left') fabezio.org
        h2.my-0.text-center(class='lg:text-left') Développeur Web FrontEnd spécialisé JS
        p.mt-2.text-xl Je code pour vous

  div.my-auto.container
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
  layout: '',
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

<style lang="stylus" scoped>
#photoid
	width 200px
	height 200px
</style>
