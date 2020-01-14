<template lang="pug">
  .mx-auto.pa-3(class='md:w-4/12')
    h1.pb-6.center-text Contactez-moi!
    form(v-model="valid" @submit.prepend)
      .flex.items-center
        p.mr-3 Titre civil:
        select.border.bg-white.outlined.rounded.h-8(v-model='selected' required)
          option(disabled='', value='') Choisissez
          option Monsieur
          option Madame
          option Mademoiselle
        p Sélectionné : {{ selected }}



      div.my-5(v-for='(field, index) of formFields', :key='index')
        input.outlined.border.rounded.h-10.p-3(class='w-full' :id='field.id', v-model.trim='field.id' :placeholder='field.placeholder' prepend-icon='mdi-account-outline' :append-icon="lastname ? 'mdi-check' : ''", :type='field.type' required)

      div.flex.my-4
        textarea#message.outlined.border.rounded.p-3(class='w-full' placeholder='Votre message' prepend-icon='mdi-keyboard' type='text', :append-icon="message ? 'mdi-check' : ''", label='Message', rounded, rows='3', v-model='message' required)
      div.flex.my-4.items-center
        input#checkbox.mr-2(prepend-icon='mdi-account-outline' :append-icon="lastname ? 'mdi-check' : ''", rounded, type='checkbox', v-model='checkbox' )
        label(v-model="checkbox" label="") Je certifie que toutes les informations fournies ci-dessus sont exactes
      div#submit.flex
        input.btn.btn-blue.mr-2(type='submit' value='Envoyer')
        button.btn.btn-warning(color="info") Annuler

</template>

<script>
export default {
  layout: '',
  data: () => ({
    selected: null,
    gender: [],
    formFields: [
      {
        id: 'lastname',
        placeholder: 'Nom de famille: ',
        type: 'text',
        model: ''
      },
      { id: 'firstname', placeholder: 'Prénom: ', type: 'text', model: '' },
      { id: 'company', placeholder: 'Société: ', type: 'text', model: '' },
      { id: 'email', placeholder: 'Email: ', type: 'email', model: '' },
      { id: 'phone', placeholder: 'Téléphone: ', type: 'number', model: '' },
      {
        id: 'title',
        placeholder: 'Titre du message: ',
        type: 'text',
        model: ''
      }
    ],
    valid: false,
    components: ['Monsieur', 'Madame', 'Mademoiselle'],
    firstname: '',
    lastname: '',
    name: [],
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+/.test(v) || 'E-mail must be valid'
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
