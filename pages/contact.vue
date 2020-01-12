<template lang="pug">
  v-card.mx-auto.pa-3( width='450' )
    v-spacer
    v-card-title.center-text
      h1.pb-6.center-text Contactez-moi!
    v-card-text
      v-form(v-model="valid")
        v-autocomplete(label='Titre', :items='components', prepend-icon="mdi-gender-male-female", v-model="components")
        v-text-field#lastname(prepend-icon='mdi-account-outline' :append-icon="lastname ? 'mdi-check' : ''", rounded, type='text', label='Nom', v-model='lastname')
        v-text-field#firstname(prepend-icon='mdi-account', :append-icon="firstname ? 'mdi-check' : ''", rounded, type='text', label='Prénom', v-model='firstname')
        // v-text-field#society(prepend-icon='mdi-office-building' :append-icon="society ? 'mdi-check' : ''", type='text', rounded, label='Entreprise', v-model='society')
        v-text-field#email(prepend-icon='mdi-at' type='email', :append-icon="email ? 'mdi-check' : ''", label='Email', rounded, v-model='email')
        v-text-field#phone(prepend-icon='mdi-phone' type='phone', :append-icon="phone ? 'mdi-check' : ''", label='Tél.', rounded, v-model='phone')
        v-textarea#message(prepend-icon='mdi-keyboard' type='text', :append-icon="message ? 'mdi-check' : ''", label='Message', rounded, rows='2', v-model='message')
        v-checkbox(v-model="checkbox" label="Je certifie que toutes les informations fournies ci-dessus sont exactes")

    v-card-actions
      v-btn(color='success') Envoyer

      v-spacer

      v-btn(color="info") Annuler

</template>

<script>
export default {
  layout: '',
  data: () => ({
    valid: false,
    components: ['Monsieur', 'Madame', 'Mademoiselle'],
    gender: '',
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
    // newFirstname(firstname) {
    //   firstname = this.firstname
    // }
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
