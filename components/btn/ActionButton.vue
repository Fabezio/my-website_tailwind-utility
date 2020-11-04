<template lang="pug">
button.btn(:class='color' @click='action')
  span(:class='icon')
  span.uppercase {{text}}
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Action',
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
</style>
