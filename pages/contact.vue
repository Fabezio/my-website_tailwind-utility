<template lang="pug">
  .mx-auto.pa-3(class='md:w-4/12')
    h1.pb-6.text-center Contactez-moi

    a(href='mailto:fabezio@outlook.fr')
      button.btn.btn-purple.text-white.mx-auto.block Envoyer un message

    //form(v-model="valid" @submit.prepend)
      .flex.items-center
        select.border.bg-white.outlined.rounded.h-12(class='w-7/12' v-model='gender' value='Etat civil' required)
          option(disabled='', value='') Choisissez
          option Monsieur
          option Madame
          option Mademoiselle
        input#lastname.outlined.border.rounded.h-12.p-3.mx-3(class='w-full' placeholder='Nom de famille:' prepend-icon='mdi-account-outline' :append-icon="lastname ? 'mdi-check' : ''", rounded, type='text', label='Nom', v-model.trim='lastname ')
        input#firstname.outlined.border.rounded.h-12.p-3(class='w-full' placeholder='Prénom' prepend-icon='mdi-account', :append-icon="firstname ? 'mdi-check' : ''", rounded, type='text', label='Prénom', v-model.trim='firstname')

      p {{ gender }} {{ lastname }} {{ firstname }}

      div.flex.my-4

      div.flex.my-4
        input#society.outlined.border.rounded.h-12.p-3(class='w-9/12' placeholder='Raison sociale' prepend-icon='mdi-office-building' :append-icon="society ? 'mdi-check' : ''", type='text', rounded, label='Entreprise', v-model='society')
        p(class='w-3/12') {{society}}
      div.flex.my-4
        input#email.outlined.border.rounded.h-12.p-3(class='w-9/12' placeholder='Email' prepend-icon='mdi-at' type='email', :append-icon="email ? 'mdi-check' : ''", label='Email', rounded, v-model='email')
        p(class='w-3/12') {{email}}
      div.flex.my-4
        input#phone.outlined.border.rounded.h-12.p-3(class='w-9/12' placeholder='Téléphone' prepend-icon='mdi-phone' type='text', :append-icon="phone ? 'mdi-check' : ''", label='Tél.', rounded, v-model.trim.number='phone')
        p(class='w-3/12') {{phone}}

      div.flex.my-4
        input#title.outlined.border.rounded.h-12.p-3(class='w-9/12' placeholder='Titre du message' prepend-icon='mdi-phone' type='phone', :append-icon="phone ? 'mdi-check' : ''", label='Tél.', rounded, v-model='title')
        p(class='w-3/12') {{title}}
      div.flex.my-4
        textarea#message.outlined.border.rounded.p-3(class='w-9/12' placeholder='Votre message' prepend-icon='mdi-keyboard' type='text', :append-icon="message ? 'mdi-check' : ''", label='Message', rounded, rows='3', v-model='message' required)
        p(class='w-3/12') {{message}}
      div.flex.my-4.items-center
        input#checkbox.mr-2(prepend-icon='mdi-account-outline' :append-icon="lastname ? 'mdi-check' : ''", rounded, type='checkbox', v-model='checkbox' )
        label(v-model="checkbox" label="") Je certifie que toutes les informations fournies ci-dessus sont exactes
      div#submit.flex
        input.btn.btn-blue.mr-2(type='submit' href='mailto:fabezio@outlook.fr' value='Envoyer')
        button.btn.btn-warning(color="info") Annuler

</template>

<script>
export default {
  layout: 'landscape',
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
