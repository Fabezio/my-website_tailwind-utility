<template lang="pug">
  .mx-auto.pa-3(class='md:w-4/12 text-center')
    h1.pb-6.text-center Contactez-moi

    //a(href='mailto:fabezio@outlook.fr')
      //ActionButton()
      ActionButton(color='btn-purple' text='Envoyer un message' icon='fas fa-envelope' action='')
      //button.btn.btn-purple.text-white.mx-auto.block Envoyer un message

    form(v-model="sendmail" @submit.prevent='sendmail')
      //IconInput(width='w-full' label='Nom: ' prependIcon='fas fa-users' appendIcon='' v-model='name' )
      //p() {{name}}
      //p.text-red-500(v-if='!lastname') veuillez entrer votre nom
      //IconInput(width='w-full' label='Prénom: ' prependIcon='fas fa-user' appendIcon='appendIcon' v-model='firstname' )
      //p() {{firsname}}
      IconInput(width='w-full' label='Email: ' type='email' prependIcon='fas fa-envelope' appendIcon='appendIcon' v-model='email' )
      p() {{email}}
      //IconInput(width='w-full' label='Téléphone: ' type='' prependIcon='fas fa-phone' appendIcon='appendIcon' v-model='phone' )
      //p() {{phone}}
      IconInput(width='w-full' label='Objet: ' type='' prependIcon='fas fa-user-tag' appendIcon='appendIcon' v-model='msgTitle' )
      p() {{msgTitle}}
      IconTextarea(v-model='message' label='Votre message: ' prependIcon='fas fa-comment')
      p() {{message}}
      //.flex.my-3.items-center.w-full
        span.text-gray-800.fas.fa-comment(class='w-1/12')
        textarea.border.rounded.m-3.p-3.w-full(placeholder='Votre message' label='Message', rows='2', v-model='message' required)

      CheckBox.my-4()
      //.flex.my-4.items-center
        //input#checkbox.mr-2(type='checkbox', v-model='checkbox' required)
        //label.text-justify(v-model="checkbox" ) Je certifie que toutes les informations fournies ci-dessus sont exactes

      div.text-red-700(v-if='errors.length != 0')
        ul
          div(v-for='(error, i) in errors' :key='i')
            li {{i}}. {{error}}

      //div(v-if='errors.length == 0') Merci pour votre confiance.

      .flex.items-center
        SubmitButton
        //IconInput.mr-2(color='btn-info' type='submit' href='mailto:fabezio@outlook.fr' value='ENVOYER' prependIcon='fas fa-paper-plane')
        ActionButton.h-12(color="btn-warning" text='annuler' icon='fas fa-times')

</template>

<script>
export default {
  layout: '',
  data: () => ({
    email: null,
    msgTitle: null,
    message: null,
    mailForm: [],
    errors: [],
    checked: false
    /*
    selected: null,
    gender: [],
    society: '',
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
    */
  }),
  methods: {
    checkForm(e) {
      if (this.email && this.msgTitle && this.message) return true
      this.errors = []
      if (!this.email) this.errors.push('Email Requis')
      if (!this.msgTitle) this.errors.push('Il faut un titre à votre message')
      if (!this.message)
        this.errors.push('Un message est nécessaire, quelques mots suffisent.')
      if (!this.checked)
        this.errors.push(
          "Vous devez cochez la case pour envoyer, cela confirmera l'authenticité de votre message"
        )
      e.preventDefault()
    }
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

<style lang="stylus" scoped>
.btn-info
  @apply bg-blue-400
</style>
