<template lang="pug">
  div#author
    h1.title.text-center Qui je suis
    article.text-justified
      p Je suis Fabezio, développeur Web orienté Javascript, plus exactement un codeur Javascript orienté web
        i.far.fa-smile-wink
        | doublé d'une casquette de contributeur web à Fedora Linux
      h2.subtitle.text-center.mt-4 Un peu d'histoire
      p J'ai débuté dans la vie active comme technicien en télécommunications dans le privé. Le secteur étant rapidement bouché, j'ai dû m'orienter vers une branche sans rapport avec ma formation initiale, mais où le travail ne manquait pas. J'officiais de nuit dans la sécurité, en statu quo durant de longues années, me demandant si j'étais encore apte à un travail constructif et plaisant.
      p Mes vacations nocturnes me permirent de m'enrichir intellectuellement, de redécouvrir l'informatique, d'explorer l'envers du décor; j'adoptai rapidement Linux, l'OS la plus populaire des geeks, testant au passage ubuntu, mint, manjaro, pour finir avec Fedora. J'adoptai également fin 2019 Mac pour pouvoir tirer parti de sa puissance et sa fluidité.
      p En réalisant la puissance du codage, je ne fus pas long à décider de suivre une longue et fastidieuse (mais Ô combien passionnante) formation de développement web, option FrontEnd. Depuis, plus je code, plus je cherche, plus je prends de plaisir.

</template>

<script>
export default {
  name: 'About',
  head() {
    return {
      title: 'A propos',
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
.far {
  margin-left: -8px !important;
  margin-right: 8px;
}
</style>
