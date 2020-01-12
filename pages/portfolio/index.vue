<template lang="pug">
  div
    h1.text-center.mb-4.header-shadow Portfolio
    h2.text-center.mb-3 Sites créés en formation:
    v-row(justify='center' )
      v-col.text-center(cols='12' md='4' justify='center' v-for='(creation, i) in created', :key='i')
        a(:href='"https://"+creation.url' target='_blank')
          v-img.banner(aspect-ratio='1.6' data-toggle='modal', :data-target="'#' + creation.mod", :src='creation.banner', :alt='creation.alt', height='auto' width='')
        v-container
            v-row.ma-0(justify='center' )
              v-btn-toggle( v-model='noToggle' )
                a(:href='"https://"+creation.url')
                  v-btn.visit-button( color='info' dark  block ) visiter
                v-dialog(v-model='dialog' persistent='' )
                  template(v-slot:activator='{ on }')
                    v-btn(color="success" text @='on' block  ) test
                  v-card(:id='creation.mod')
                    v-card-title.headline Use Google's location service?
                    v-card-text
                      | Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
                    v-card-actions
                      v-spacer
                      v-btn(color='green darken-1', text='', @click='dialog = false') Disagree
                      v-btn(color='green darken-1', text='', @click='dialog = false') Agree

        // v-card-text
          h3.card-title.text-uppercase {{creation.name}}
          p.text-center.card-text.display-5 {{creation.desc}}
        //v-card





    // article

      v-row(justify="center")
        v-col(cols='4')
          .card.silver-shadow.text-center(v-for='(creation, i) in created', :key='i')
            v-img.card-img-top(data-toggle='modal', :data-target="'#' + creation.mod", :src='creation.img', :alt='creation.alt')

            v-card-text
              h3.card-title.text-uppercase {{creation.name}}
              p.card-text.display-5 {{creation.desc}}
            .card-footer.mb-0
              a.btn.btn-outline-link.display-5.text-uppercase(:href="'https://' + creation.url", target='_blank')
                i.fas.fa-sign-in-alt
                | Consulter
    //.modal.collapse.fade(v-for='creation in creations', :key='creation.mod', :id='creation.mod')
      .modal-dialog.modal-md
        .modal-content
          .modal-header
            h4 {{creation.name}}
            button.close(data-dismiss='modal') ×
          .modal-body
            img.w-100(:src='creation.img')
          .modal-footer
            .btn-group.btn-lg.btn-rounded
              button.btn.btn-dark(data-dismiss='modal')
                i.mr-1.far.fa-window-close.text-danger.text-light
                |  Annuler
              a.btn.btn-success(:href="'https://' + creation.url", target='_blank')
                i.mr-1.fas.fa-sign-in-alt
                |  Aller

</template>

<script>
import { mapState } from 'vuex'
// import portfolio from './portfolio'
export default {
  name: '',
  components: {
    // portfolio
  },
  data() {
    return {
      noToggle: null,
      dialog: false,
      path: '~/assets/img/portfolio'
    }
  },
  computed: {
    ...mapState({
      created: (state) => state.portfolio.created
    })
  },
  head() {
    return {
      title: 'Portfolio',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Développeur web JavaScript Frontend'
        }
      ]
    }
  }
  /*

    */
}
</script>

<style scoped>
.banner {
  filter: sepia(100%);
  opacity: 0.75;
  border-radius: 5px;
  border: grey outset 3px;
  cursor: pointer;
}
.banner:hover {
  filter: sepia(50%);
  opacity: 1;
  border: lightsalmon inset 3px;
}
.visit-button {
  /* position: relative; */
  /* bottom: 62px; */
  /* color: darkslategray; */
  text-decoration: underline #1e88e5;
}
.visit-button:hover {
  color: whitesmoke;
  text-decoration: underline whitesmoke 1px;
  /* color: black; */
}
.card-body {
  border-top: aquamarine 1.5px solid;
}
</style>
