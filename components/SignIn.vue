<template lang="pug">
.color.h-full
  form(@submit.prevent='')
    .flex.justify-center.py-2
      input.outlined.border.rounded(class='w-3/12' type='text' placeholder='Identifiant' model='username')
      input.outlined.border.rounded.mx-2(class='w-3/12' type='password' placeholder='Mot de passe' model='password')
      input.btn.bg-red-300(type='submit' value='Envoyer')

</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="stylus" scoped>
.color
  background rgba(255,0,255,0.65)
</style>
