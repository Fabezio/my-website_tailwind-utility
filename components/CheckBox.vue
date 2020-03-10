<template lang="pug">
div.flex.center-items
  input#checkbox.mr-2(type='checkbox', v-model='checkbox' required)
  label.text-justify(v-model="checkbox" ) {{iSwear}}

</template>

<script>
export default {
  props: {
    iSwear: {
      type: String,
      default:
        'Je certifie que toutes les informations fournies ci-dessus sont exactes'
    }
  }
}
</script>

<style lang="stylus" scoped></style>
