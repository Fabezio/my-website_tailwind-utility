<template lang="pug">
input.input-field.h-10.p-3.mx-3(
  required
  :placeholder='label'
  @input='updateValue'
)
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.input-field {
  padding-left: 36px;
  border: 0;
  text-align: left;
}
</style>
