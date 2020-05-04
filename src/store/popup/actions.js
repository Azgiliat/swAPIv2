import getUrl from "../actions";

export function loadData({state, commit}) {
  const loadings = [];
  const hw = state.card.homeworld;
  commit('setLoadingStatus', true);

  if (!(typeof hw === 'object' && !!hw.title)) {
    loadings.push(this.$axios.get(`${getUrl(hw)}`)
      .then(response => {
        commit('setHomeworld', response.data.name)
      }));
  }

  state.card.films.forEach((film, index) => {
    if (!(typeof film === 'object' && !!film.title)) {
      loadings.push(this.$axios.get(`${getUrl(film)}`)
        .then(response => {
          //throw new Error('test err'); //test error
          commit('setFilmTitle', {
            id: index,
            title: response.data.title
          });
        }))
    }
  });

  Promise.all(loadings)
    .then(() => {
      commit('setError', false);
    })
    .catch(err => {
      console.error(err);
      commit('setError', true);
    })
    .finally(() => {
      commit('setLoadingStatus', false);
    });
}
