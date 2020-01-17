<template lang="pug">
  div
    h1.text-center.mb-4.header-shadow Portfolio
    h2.text-center.mb-3 Sites créés en formation:
    .flex.mb-4.h-full
      div(v-for='(creation, i) in created', :key='i')
        .text-center(cols='12' md='4' justify='center' )
          a(:href='"https://"+creation.url' target='_blank')
            div.thumbnail.flex.items-center.bg-blue-200.m-2.py-3.px-2.rounded
              img.banner(aspect-ratio='1.6' data-toggle='modal', :data-target="'#' + creation.mod", :src='creation.banner', :alt='creation.alt')

        //v-container
            v-row.ma-0(justify='center' )
              v-btn-toggle( v-model='noToggle' )
                a(:href='"https://"+creation.url')
                  v-btn.visit-button( color='info' dark  block ) visiter
                v-dialog(v-model='dialog' persistent='' )
                  template(v-slot:activator='{ on }')
                    v-btn(color="success" text @='on' block  ) test
        // v-card-text
          h3.card-title.text-uppercase {{creation.name}}
          p.text-center.card-text.display-5 {{creation.desc}}
        //  v-card

    //article

      .flex.mb-4.w-full(justify="center")
        v-col(cols='4')
          .card.silver-shadow.text-center(v-for='(creation, i) in created', :key='i')
            img.card-img-top(data-toggle='modal', :data-target="'#' + creation.mod", :src='creation.img', :alt='creation.alt')

            v-card-text
              h3.card-title.text-uppercase {{creation.name}}
              p.card-text.display-5 {{creation.desc}}
            .card-footer.mb-0
              a.btn.btn-outline-link.display-5.text-uppercase(:href="'https://' + creation.url", target='_blank')
                i.fas.fa-sign-in-alt
                | Consulter
            .modal.collapse.fade(v-for='creation in creations', :key='creation.mod', :id='creation.mod')
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
.thumbnail {
  width: 320px;
  height: 240px;
  border: 1px solid skyblue;
}
.banner {
  filter: grayscale(100%);
  opacity: 0.75;

  cursor: pointer;
}
.banner:hover {
  filter: grayscale(0%);
  opacity: 1;
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
