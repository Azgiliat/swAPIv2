import getUrl from './../actions.js';

export function search({state, commit, dispatch}) {
  commit('setLoadingStatus', true);

  this.$axios.get(`people/?search=${state.searchQuery}`)
    .then(response => {
      commit('setResult', response.data);
      dispatch('loadSpecies')
        .then(() => {
          commit('setLoadingStatus', false);
        });
    })
    .catch(err => {
      console.error(err);
      commit('setError', true);
      commit('setLoadingStatus', false);
    })
}

export function loadSpecies({state}) {
  const loadings = [];
  state.result.results.forEach(item => {
    if (item.species.length) {
      loadings.push(this.$axios.get(getUrl(item.species[0]))
        .then(response => {
          item.species = response.data.name;
        }))
      // TODO catch errors
    } else {
      item.species = '';
    }
  });

  return Promise.all(loadings)
}
