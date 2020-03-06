<template lang="pug">
  .mx-auto.pa-3(class='md:w-4/12 text-center')
    h1.pb-6.text-center Contactez-moi

    //a(href='mailto:fabezio@outlook.fr')
      //ActionButton()
      ActionButton(color='btn-purple' text='Envoyer un message' icon='fas fa-envelope' action='')
      //button.btn.btn-purple.text-white.mx-auto.block Envoyer un message

    form(v-model="valid" @submit.prevent='sendmail')
      IconInput(width='w-full' label='Nom: ' prependIcon='fas fa-users' appendIcon='' v-model='lastname' )
      IconInput(width='w-full' label='Prénom: ' prependIcon='fas fa-user' appendIcon='appendIcon' v-model='firstname' )
      IconInput(width='w-full' label='Email: ' type='email' prependIcon='fas fa-envelope' appendIcon='appendIcon' v-model='email' )
      IconInput(width='w-full' label='Téléphone: ' type='' prependIcon='fas fa-phone' appendIcon='appendIcon' v-model='phone' )
      IconInput(width='w-full' label='Objet: ' type='' prependIcon='fas fa-user-tag' appendIcon='appendIcon' v-model='msgTitle' )
      IconTextarea(v-model='message' label='Votre message: ' prependIcon='fas fa-comment')
      //.flex.my-3.items-center.w-full
        span.text-gray-800.fas.fa-comment(class='w-1/12')
        textarea.border.rounded.m-3.p-3.w-full(placeholder='Votre message' label='Message', rows='2', v-model='message' required)

      .flex.my-4.items-center
        input#checkbox.mr-2( prepend-icon='mdi-account-outline' :append-icon="lastname ? 'mdi-check' : ''", rounded, type='checkbox', v-model='checkbox' )
        label(v-model="checkbox" label="") Je certifie que toutes les informations fournies ci-dessus sont exactes

      .flex.items-center
        IconInput.btn.btn-blue.mr-2(type='submit' href='mailto:fabezio@outlook.fr' value='ENVOYER' prependIcon='fas fa-paper-plane')
        ActionButton.h-12( color="btn-warning" text='annuler' icon='fas fa-times')

</template>

<script>
export default {
  layout: 'portrait',
  data: () => ({
    selected: null,
    gender: [],
    lastname: '',
    firstname: '',
    society: '',
    phone: '',
    email: '',
    title: '',
    message: '',
    name: [],
    checkbox: false,
    nameRules: [
      (v) => !!v || 'Le nom est obligatoire',
      (v) => v.length <= 10 || `Le nom peut contenir jusqu'à 10 caractères`
    ],
    emailRules: [
      (v) => !!v || `L'email est obligatoire`,
      (v) => /.+@.+/.test(v) || `L'email doit contenir les symboles '@' et '.' `
    ]
  }),
  methods: {
    /*
    fullField() {
      this.formFields.model.push(this.formFields.model)
    } */
  },
  head() {
    return {
      title: 'Me contacter',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Développeur web JavaScript Frontend'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped></style>
