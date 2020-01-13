<template lang="pug">
div
  Navbar
  nuxt.container.my-20
  Footer

</template>

<script>
// import pdf from 'vue-pdf';
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {}
  },
  head() {
    return {
      titleTemplate: 'Fabezio - %s',
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

<style>
body {
  font-family: sans-serif;
  margin-top: 0;
  background: white !important;
}
h1 {
  @apply text-5xl font-bold;
}
h2 {
  @apply text-4xl font-bold;
}
h3 {
  @apply text-3xl font-bold;
}

p {
  text-align: justify;
  text-indent: 1rem;
}
p:first-letter {
  font-size: 1.25rem;
}
.far,
.fab,
.fas {
  padding-right: 4px;
  color: grey !important;
  font-size: 18px !important;
}
.vnav {
  margin: 8px !important;
}

/*

.rounded-lg {
    border-radius: 1rem !important;
}

.circle {
  color: #008080;
}
/*
.nuxt-link-exact-active {
  .circle {
    color: white !important;
  }

  &:not(.home) {
    color: darkslategrey !important;
  }
}

.media-img {
  height: 128px;
}
.loremipsum {
  padding: 1rem 0;
  margin: 1rem 0;
}

/*


  a {
    color: #00a86b;
    &:hover {
      text-decoration: underline #008080;
    }
  }
}

.logo {
  height: 32px;
  width: 32px;
}

nav {
  height: 2rem;
  padding: 0.5rem;
  margin-top: 0;
}
.navbar-brand {
  text-shadow: 2px 2px 2px grey;
}
/* .route {
  color: darkslategray;
  text-shadow: 1px 1px 1px grey;
  &:hover{
    background: $primary !important;

    .icons {
      color: whitesmoke !important;
    }

  }
} */
/*
.card {
  border: 1px solid aquamarine;
  .media-img {
  width: 128px;
  height: 128px;
  }
*/
/*
  &:hover {
    transform: scale(1.01);
    transition: all 0.25s ease-in-out !important;
    cursor: pointer;
  }
}


.card-img-top {
background: whitesmoke;
padding: 7px;
}

/* @import "@/node_modules/bulma/bulma.sass"; */
</style>
