<template lang="pug">
  div#author(class='px-20')
    h1.title.text-center Qui je suis
    article.text-justified.mx-2(class="lg:mx-0")
      p Je suis Fabezio, développeur Web orienté Javascript, plus exactement un codeur Javascript orienté web, spécialisé vueJS / nuxtJS.
      h2.subtitle.text-center.mt-4 Un peu d'histoire
      p J'ai débuté dans la vie active comme technicien en télécommunications dans le privé. Le secteur étant rapidement bouché, j'ai dû m'orienter vers une branche sans rapport avec ma formation initiale, mais où le travail ne manquait pas. J'officiais de nuit dans la sécurité, en statu quo durant de longues années, me demandant si j'étais encore apte à un travail constructif et plaisant.
      p Mes vacations nocturnes me permirent de m'enrichir intellectuellement.
      p Puis, en cherchant un moyen d'automatiser les tâches les plus courantes, je redécouvris l'informatique grâce à GNU/Linux, bash, le codage python...
      p En réalisant la puissance du codage, je ne fus pas long à décider de suivre une longue et fastidieuse (mais Ô combien passionnante) formation de développement web, option FrontEnd, avant de m'essayer au Backend. Déçu par PHP (notamment à cause de certaines faiblesses), je m'orientai vers le
        |
        |
        b
          i tout JavaScript
        | . NodeJS est prévu pour plus tard.
      p Convaincu par la supériorité de Linux, je testai des distributions de diverses familles: Ubuntu, Mint, Manjaro, Fedora et enfin Debian, cette dernière étant réputée pour sa stabilité.
      p J'adoptai également Mac, fin 2019, pour pouvoir tirer parti de sa puissance et sa fluidité.
      p Depuis, plus je code, plus je cherche, plus je prends de plaisir. J'utilise
        |
        |
        b Visual Studio Code
        |
        | et
        |
        b Git
        |
        | quotidiennement et découvre des fonctionnalités chaque semaine.

</template>

<script>
export default {
  name: 'About',
  layout: '',
  head() {
    return {
      title: 'A propos',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Développeur web JavaScript Frontend',
        },
      ],
    }
  },
}
</script>
<style lang="stylus" scoped>
.far
	margin-left -8px !important
	margin-right 8px
</style>
