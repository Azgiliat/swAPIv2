export default function getUrl(fullUrl) {
  return fullUrl.substring(21); //cut http://swapi.dev/api/
}

export function init({commit, dispatch}) {
  return dispatch('loadPage', 'people/');
}

export function loadNextPage({state, commit, dispatch}) {
  if (state.currentPage.next) {
    return dispatch('loadPage', getUrl(state.currentPage.next));
  }
}

export function loadPage({commit, state, dispatch}, payload) {
  commit('setLoadingStatus', true);
  return this.$axios.get(payload)
    .then(async response => {
      commit('setCurrentPage', response.data);
      commit('pushPageToAll', state.currentPage);
      await dispatch('loadSpecies');
      //throw new Error('test'); //test data loading errors
      commit('setLoadingStatus', false);
      commit('setError', false);
    })
    .catch(err => {
      console.error(err);
      commit('setError', true);
      commit('setLoadingStatus', false);
    })
}

export function loadSpecies({state, commit}) {
  const loadings = [];
  state.currentPage.results.forEach((item, index) => {
    if (item.species.length) {
      if (!(typeof item.species[0] === 'object' && !!item.species[0].title)) {
        loadings.push(this.$axios.get(getUrl(item.species[0]))
          .then(response => {
            commit('setSpecie', {
              index,
              title: response.data.name
            })
          }));
      }
    } else {
      commit('setSpecie', {
        index,
        title: 'No Specie'
      })
    }
  });

  return Promise.all(loadings);
}
