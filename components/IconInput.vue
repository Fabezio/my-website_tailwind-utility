<template lang="pug">
.my-4.flex.items-center.border.rounded()
  span.text-gray-800.mx-3(:class='prependIcon')
  input.outlined.h-12.p-3(:class='width' :placeholder='label' :type='type' required)
  span(:class="appendIcon")
</template>
<script>
export default {
  props: {
    width: {
      type: String,
      default: 'w-full',
    },
    label: {
      type: String,
      default: 'name',
    },
    type: {
      type: String,
      default: 'text',
    },
    prependIcon: {
      type: String,
      default: 'far fa-user',
    },
    appendIcon: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="stylus" scoped></style>
