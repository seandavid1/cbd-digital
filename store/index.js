import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      pages: [],
      about: [],
      pagesACF: [],
      blog: null,
      choiceOne: null,
      choiceTwo: null,
      count: 0
    }),
    mutations: {
      updatePages(state, pages) {
        state.pages = pages
      },
      aboutPage(state, about) {
        state.about = about
      },
      pagesACF(state, pagesACF) {
        state.pagesACF = pagesACF
      },
      blogList(state, blog) {
        var convert = require('xml-js')
        var xml = blog
        var result1 = convert.xml2json(xml, { compact: true, object: true })
        var resultObject = JSON.parse(result1)
        state.blog = resultObject
      },
      updateUserChoiceOne(state, choice) {
        state.choiceOne = choice
      },
      updateUserChoiceTwo(state, choice) {
        state.choiceTwo = choice
      },
      increment(state) {
        // mutate state
        state.count++
      }
    },
    actions: {
      getPages({ commit }) {
        axios
          .get('http://www.cbddigitalgroup.com/wp/wp-json/wp/v2/pages')
          .then(result => commit('updatePages', result.data))
          .catch(console.error)
      },
      getAboutUs({ commit }) {
        axios
          .get('http://www.cbddigitalgroup.com/wp/wp-json/wp/v2/pages/5?_embed')
          .then(result => commit('aboutPage', result.data))
          .catch(console.error)
      },
      getPagesACF({ commit }) {
        axios
          .get('http://cbddigitalgroup.com/wp//wp-json/acf/v3/pages')
          .then(result => commit('pagesACF', result.data))
          .catch(console.error)
      },
      getBlogs({ commit }) {
        axios
          .get('https://market.grantmarketing.com/blog/rss.xml')
          .then(result => commit('blogList', result.data))
          .catch(console.error)
      }
    }
  })
}

export default createStore
