import PortfolioService from '@/services/PortfolioService.js'

export const state = () => ({
  portfolio: [
    {
      id: '1',
      url: 'travelagencyfabezio.netlify.com',
      img: 'https://travelagencyfabezio.netlify.com/Images/view.png',
      banner: 'https://travelagencyfabezio.netlify.com/Images/view.png',
      mod: 'voyage',
      alt: 'travel agency',
      name: 'Travel Agency',
      desc: 'Premier site en HTML / CSS'
    },
    {
      id: '2',
      url: 'snakeey.netlify.com',
      img: 'https://snakeey.netlify.com/img/view.png',
      banner: 'https://snakeey.netlify.com/img/view.png',
      mod: 'snakeey',
      alt: 'snakeey',
      name: 'Snakeey',
      desc: 'Version JS de Snake'
    },
    {
      id: '3',
      url: 'topactrices.netlify.com',
      img: 'https://topactrices.netlify.com/img/color-image.jpg',
      banner: 'https://topactrices.netlify.com/img/color-image.jpg',
      alt: 'top 5 actrices',
      mod: 'actrices',
      name: 'Top 5 Actrices',
      desc: 'Site en jQuery'
    },
    {
      id: '4',
      url: 'do-pe.netlify.com',
      img: 'https://do-pe.netlify.com/img/banner.jpg',
      banner: 'https://do-pe.netlify.com/img/banner.jpg',
      alt: 'do-pe',
      mod: 'dope',
      name: 'Do-Pe',
      desc: 'Site en VueJS 2'
    }
  ]
})

export const mutations = {
  SET_PORTFOLIO(state, portfolio) {
    state.portfolio = portfolio
  },
  SET_FOLIO(state, folio) {
    state.folio = folio
  }
}

export const actions = {
  fetchPortfolio({ commit }) {
    return PortfolioService.getPortfolio().then((response) =>
      commit('SET_PORTFOLIO', response.data)
    )
  },
  fetchFolio({ commit }, id) {
    return PortfolioService.getFolio(id).then((response) =>
      commit('SET_FOLIO', response.data)
    )
  }
}
