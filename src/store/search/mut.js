export function setSearchQuery (state, payload) {
  state.searchQuery = payload;
}

export function setResult (state, payload) {
  state.result = payload;
}

export function setLoadingStatus (state, payload) {
  state.loadingStatus = payload;
}

export function setError (state, payload) {
  state.error = payload;
}
