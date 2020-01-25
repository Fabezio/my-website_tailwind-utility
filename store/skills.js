export const state = () => ({
  codes: [
    {
      title: 'Classique',
      content: [
        {
          name: 'HTML',
          version: 5.2,
          img:
            'https://juststickers.in/wp-content/uploads/2014/05/HTML5-Mark-Shape-Cut.png',
          desc: 'Langage de balisage dédié au contenu du site'
        },
        {
          name: 'CSS',
          version: 3,
          img:
            'https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png',
          desc: 'Feuilles de style pour la mise en forme des pages'
        },
        {
          name: 'JavaScript',
          img:
            'https://addons-media.operacdn.com/media/CACHE/images/extensions/65/203065/1.2.4.1-rev2/images/0cded3a3276425911d55a2552bf361bf/7852aa99f857cd72012843b4cce5090f.jpg',

          version: '1.8, norme ES-9',
          desc: "Langage de programmation, dynamise l'application"
        }

        // {

        //   name: "Node-JS",
        //   img:
        //     "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png",
        //   version: '12.13 (LTS)**',
        //   desc: "Librairie JavaScript appliquée aux serveurs"
        // }
      ]
    },
    {
      title: 'Style',
      content: [
        {
          name: 'Bootstrap',
          version: 4.3,
          img:
            'http://www.dxpdance.com.au/wp-content/uploads/2016/03/bootstrap-logo.jpg',
          desc: 'Framework CSS facilitant la mise en forme, bibliothèque Sass'
        },
        {
          name: 'Bulma',
          version: '0.8',
          img: 'https://jgthms.com/web-design-in-4-minutes/bulma.png',
          desc: 'Framework semblable à BootStrap, bibliothèque Sass'
        },
        {
          name: 'Vuetify',
          version: '2.0',
          img:
            'https://external-preview.redd.it/AOJtwr7lW8E4k5rsua3rPoky1ySO_34UkAVmm6PuVpM.jpg?auto=webp&s=2645657b4d14ff6f7321db22bcb96f4652876af8',
          desc: 'Framework semblable à BootStrap, bibliothèque Sass'
        },
        {
          name: 'Tailwind',
          version: '1.x',
          img:
            'https://pic.vsixhub.com/42/e2/6226e0be-5975-4616-948c-545d562adc1d-logo.png',
          description: 'librairie utilitaire css'
        }
      ]
    },
    {
      title: 'Rendu',
      content: [
        /*
        {
          name: 'React',
          version: '16.11',
          img:
            'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
            desc: 'Framework JS facilitant la création des sites web'
          },
          */
        {
          name: 'Vue JS',
          version: '2.6',
          img: 'http://assets.stickpng.com/thumbs/58482acecef1014c0b5e4a1e.png',
          desc: 'Semblable à React, en plus simple et complet'
        },
        {
          name: 'Nuxt',
          version: '2.11',
          img:
            'https://cosmic-s3.imgix.net/9af92d20-31d0-11e8-b24f-2f60c3c01c65-nuxtjs-cosmicjs.png',
          desc: 'Framework utilisant VueJS pour des applis universelles '
        }
      ]
    },
    {
      title: 'Préprocesseurs',
      content: [
        {
          name: 'Sass',
          version: '1.22',
          img:
            'http://www.freelogovectors.net/wp-content/uploads/2019/02/sass-logo.png',
          desc: 'Préprocesseur CSS'
        },
        {
          name: 'Pug',
          version: '2.0',
          img:
            'https://cdn.rawgit.com/pugjs/pug-logo/eec436cee8fd9d1726d7839cbe99d1f694692c0c/SVG/pug-final-logo-_-colour-128.svg',
          desc: 'Préprocesseur HTML - anciennement Jade ',
          otherLogo:
            '<img src="https://s3.amazonaws.com/oodles-technologies1/blog-images/d73085c7-ff2c-4edb-9a72-8e1333dac14e.png" width="24px" alt="">'
        }
      ]
    },
    {
      title: 'Autres',
      content: [
        {
          name: 'Git',
          img:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/768px-Git_icon.svg.png',
          version: 2.23,
          desc: 'Application servant à versionner ses codes'
        },
        {
          name: 'GitHub',
          img: 'http://pngimg.com/uploads/github/github_PNG40.png',
          version: 2.23,
          desc: 'Le cloud des codeurs, basé sur git'
        },
        {
          name: 'Python',
          version: 3.7,
          img:
            'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png',
          desc:
            'Langage de programmation, plébiscité en Big Data et Machine Learning'
        }
      ]
    }
  ]
})
