<template lang="pug">
.my-4.flex.items-center
  span.text-gray-800(class='w-1/12' :class='prependIcon')
  input.outlined.border.rounded.h-12.p-3.mx-3(:class='width' :placeholder='label' :type='type' required)
  span(:class="appendIcon")
</template>
<script>
export default {
  props: {
    width: {
      type: String,
      default: 'w-full'
    },
    label: {
      type: String,
      default: 'name'
    },
    type: {
      type: String,
      default: 'text'
    },
    prependIcon: {
      type: String,
      default: 'far fa-user'
    },
    appendIcon: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus" scoped></style>
