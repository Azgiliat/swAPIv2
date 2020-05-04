export function setLoadingStatus(state, payload) {
  state.loadingStatus = payload;
}

export function setCurrentPage(state, payload) {
  state.currentPage = payload;
}

export function setError (state, payload) {
  state.error = payload;
}

export function pushPageToAll (state, payload) {
  state.allPages.unshift(payload);
}

export function setSpecie (state, payload) {
  state.currentPage.results[payload.index].species = {
    title: payload.title,
    url: state.currentPage.results[payload.index].species[0] || ''
  }
}
