<template lang="pug">
button.btn(:class='color' @click='action')
  span(:class='icon')
  input()
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Action'
    },
    color: {
      type: String,
      default: 'btn-info'
    },
    icon: {
      type: String,
      default: 'fas fa-plus'
    },
    action: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.btn
  @apply text-white

.btn-info
  @apply bg-blue-500
  &:hover
    @apply bg-blue-700;

.btn-success
  @apply bg-green-400
  &:hover
    @apply bg-green-700

.btn-warning
  @apply bg-yellow-500;
  &:hover
    @apply bg-yellow-700;
</style>
