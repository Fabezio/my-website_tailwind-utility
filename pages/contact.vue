<template lang="pug">
  .mx-auto.pa-3(class='md:w-4/12')
    h1.pb-6.center-text Contactez-moi!
    form(v-model="valid" @submit.prepend)
      .flex.items-center
        p.mr-3 Titre civil
        div.mr-3
          input#mister.mr-1(value='M.', type='radio' :items='components', prepend-icon="mdi-gender-male-female", v-model="gender")
          label(for='mister') M.
        div.mr-3
          input#madam.mr-1(value='Mme', type='radio' :items='components', prepend-icon="mdi-gender-male-female", v-model="gender")
          label(for='mister') Mme
        div.mr-3
          input#miss.mr-1(value='Melle', type='radio' :items='components', prepend-icon="mdi-gender-male-female", v-model="gender")
          label(for='mister') Melle

      div.flex.my-4
        input#lastname.outlined.border.rounded.h-5.p-3(class='w-full' placeholder='Nom de famille:' prepend-icon='mdi-account-outline' :append-icon="lastname ? 'mdi-check' : ''", rounded, type='text', label='Nom', v-model='lastname')
        input#firstname.outlined.border.rounded.h-5.p-3(class='w-full' placeholder='Prénom' prepend-icon='mdi-account', :append-icon="firstname ? 'mdi-check' : ''", rounded, type='text', label='Prénom', v-model='firstname')

      div.flex.my-4
        input#society.outlined.border.rounded.h-5.p-3(class='w-full' placeholder='Société' prepend-icon='mdi-office-building' :append-icon="society ? 'mdi-check' : ''", type='text', rounded, label='Entreprise', v-model='society')
      div.flex.my-4
        input#email.outlined.border.rounded.h-5.p-3(class='w-full' placeholder='Email' prepend-icon='mdi-at' type='email', :append-icon="email ? 'mdi-check' : ''", label='Email', rounded, v-model='email')
      div.flex.my-4
        input#phone.outlined.border.rounded.h-5.p-3(class='w-full' placeholder='Téléphone' prepend-icon='mdi-phone' type='phone', :append-icon="phone ? 'mdi-check' : ''", label='Tél.', rounded, v-model='phone')
      div.flex.my-4
        textarea#message.outlined.border.rounded.h-5.p-3(class='w-full' placeholder='Votre message' prepend-icon='mdi-keyboard' type='text', :append-icon="message ? 'mdi-check' : ''", label='Message', rounded, rows='3', v-model='message')
      div.flex.my-4.items-center
        input#checkbox(prepend-icon='mdi-account-outline' :append-icon="lastname ? 'mdi-check' : ''", rounded, type='checkbox', v-model='checkbox')
        label(v-model="checkbox" label="") Je certifie que toutes les informations fournies ci-dessus sont exactes
      div#submit.flex
        input.btn.btn-blue.mr-2(type='submit' value='Envoyer')
        button.btn.btn-warning(color="info") Annuler

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
