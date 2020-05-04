import defaultState from './state';

export function setCard (state, payload) {
  state.card = payload;
}

export function setHomeworld (state, payload) {
  state.card.homeworld = {
    title: payload,
    url: state.card.homeworld
  };
}

export function setPopupState (state, payload) {
  state.isPopupOpen = payload;
}

export function setLoadingStatus (state, payload) {
  state.loadingStatus = payload;
}

export function setFilmTitle (state, payload) {
  state.card.films[payload.id] = {
    title: payload.title, // при необходимости можно записывать весь ответ, но посокльку нужно пока что только название фильма
    url: state.card.films[payload.id] //на нём и остановимся
  };
}

export function setNameColor (state, payload) {
  state.nameColor = payload;
}

export function resetDefaultState (state) {
  Object.assign(state, defaultState());
}

export function setError (state, payload) {
  state.error = payload;
}
