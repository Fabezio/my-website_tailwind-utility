<template lang="pug">
  i.rounded-left.icon(:class='icon')

  //i(:class='endIcon')
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.input-icons i {
  position: absolute;
}
.icon {
  padding: 12px 12px;
  background: silver;
  color: #575757;
  min-width: 2rem;
  text-align: center;
  border-right: solid #777 1px;
}
</style>
