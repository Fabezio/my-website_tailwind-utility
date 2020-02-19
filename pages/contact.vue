<template lang="pug">
  .mx-auto.pa-3(class='md:w-4/12')
    h1.pb-6.text-center Contactez-moi

    //a(href='mailto:fabezio@outlook.fr')
      button.btn.btn-purple.text-white.mx-auto.block Envoyer un message

    form(v-model="valid" @submit.prevent)
      .flex.center-items
        select.input-icons.bg-white.h-10(class='w-3/12' v-model='gender' value='Etat civil' required)
          option(disabled='', value='') Titre
          option M.
          option Mme
          option Melle
        .input-icons.mx-3
          FormInputIcon(icon='fas fa-user' )
          FormInputField.w-full(label="Prénom" v-model='firstname' type='text')
        .input-icons.border.rounded
          FormInputIcon(icon='fas fa-users' )
          FormInputField.w-full(label="Nom" v-model='lastname' type='text')

      // p {{ gender }} {{ lastname }} {{ firstname }}

      //div.flex.my-4
      .input-icons.border.rounded
        FormInputIcon(icon='fas fa-user-tie' )
        FormInputField.w-full(label="Raison Sociale" v-model='society' type='text')
      .input-icons.border.rounded
        FormInputIcon(icon='fas fa-at' )
        FormInputField.w-full(label="Email" v-model='email' type='email' @blur='$v.email.$touch()' :class='{error: $v.email.$error}')
        div(v-if='$v.email.$error')
          p.errorMessage(v-if='!$v.email.email') Entrez un email vallde
          p.errorMessage(v-if='!$v.email.required') l'email est obligatoire
      .input-icons.border.rounded
        FormInputIcon(icon='fas fa-phone' )
        FormInputField.w-full(label="Téléphone" v-model='phone' type='number')

      .input-icons.border.rounded
        FormInputIcon(icon='fas fa-envelope' )
        FormInputField.w-full(label="Titre du message" v-model='message' type='text')

      textarea.outlined.border.rounded.p-3(class='w-9/12' placeholder='Votre message' prepend-icon='mdi-keyboard' type='text', :append-icon="message ? 'mdi-check' : ''", label='Message', rounded, rows='3', v-model='message' required)
        p(class='w-3/12') {{message}}
      .flex.my-4.items-center
        input.checkbox.mr-2(prepend-icon='mdi-account-outline' :append-icon="lastname ? 'mdi-check' : ''", rounded, type='checkbox', v-model='checkbox' )
        label(v-model="checkbox" label="") Je certifie que toutes les informations fournies ci-dessus sont exactes

      div#submit.flex
        input.btn.btn-blue.mr-2(type='submit' href='mailto:fabezio@outlook.fr' value='Envoyer')
        button.btn.btn-warning(color="info") Annuler

</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import FormInputIcon from '@/components/FormInputIcon.vue'
import FormInputField from '@/components/FormInputField.vue'
export default {
  components: {
    FormInputIcon,
    FormInputField
  },
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
  },
  validations: {
    email: { required, email }
  }
}
</script>

<style scoped>
.input-icons {
  border-bottom: 1px solid black;
  margin-bottom: 16px;
  height: 42px;
}
textarea {
  border-bottom: 1px solid black;
  width: 100%;
}
.checkbox {
  border: thin solid black;
  width: 1rem;
  height: 1rem;
}
</style>
