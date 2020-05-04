export function getResult (state) {
  return state.result;
}

export function isSearching (state) {
  return (typeof state.searchQuery !== 'undefined') && (!!state.searchQuery.length);
}
