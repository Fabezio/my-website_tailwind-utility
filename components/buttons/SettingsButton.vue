<template lang="pug">
ActionButton(color='btn-error' text='Modifier' icon='fas fa-wrench' action='')
</template>

<script>
export default {
  data() {
    return {
      root: false
    }
  },
  methods: {
    isRoot() {
      this.root = !this.root
    }
  }
}
</script>

<style lang="stylus" scoped>
.btn-error {
@apply bg-white
border 1px medium red
color red
}
</style>
