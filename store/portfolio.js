import PortfolioService from '@/services/PortfolioService.js'

export const state = () => ({
  portfolio: [
    {
      id: '1',
      url: 'voyages.fabezio.com',
      img: 'https://cv.fabezio.com/img/voyage.png',
      banner: 'https://voyages.fabezio.com/Images/main.jpg',
      mod: 'voyage',
      alt: 'photo du site',
      name: 'Travel Agency',
      desc: 'Premier site en HTML / CSS'
    },
    {
      id: '2',
      url: 'snake.fabezio.com',
      img: 'http://cv.fabezio.com/img/snake-maj.png',
      banner: 'http://cv.fabezio.com/img/snake-maj.png',
      mod: 'snake',
      alt: 'photo du site',
      name: 'Snakey',
      desc: 'Version JS de Snake'
    },
    {
      id: '3',
      url: 'actrices.fabezio.com',
      img: 'http://cv.fabezio.com/img/actrices.png',
      banner: 'http://actrices.fabezio.com/img/color-image.jpg',
      alt: 'photo du site',
      mod: 'actrices',
      name: 'Top 5 Actrices',
      desc: 'Site en jQuery'
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
