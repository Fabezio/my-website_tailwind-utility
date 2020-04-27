<template lang="pug">
button.btn.btn-info.h-12()
  span(class='fas fa-paper-plane')
  input.btn-info.uppercase.font-bold(type='submit' :value='text')
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Envoyer',
    },
    color: {
      type: String,
      default: 'btn-info',
    },
    icon: {
      type: String,
      default: 'fas fa-plus',
    },
    action: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="stylus" scoped>
.btn
  @apply text-white
.btn-info
  @apply bg-blue-400
  &:hover
  &:hover input
    @apply bg-blue-700;
</style>
