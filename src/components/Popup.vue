<template>
  <div class="popup" :class="gotError && 'popup--error'">
    <button @click.stop="closePopup" type="button" class="popup__button"/>
    <transition name="preloader" :duration="{leave: 2700, enter: 700}" mode="out-in">
      <Preloader v-if="loadingStatus" class="popup__preloader"/>
      <div v-else-if="gotError" class="popup__error error">
        <p class="error__text">
          Got some errors, try again later. And may the Force be with you!
        </p>
      </div>
      <div v-else class="container popup__container">
        <div class="popup__name-block">
          <div :style="`background-color: ${nameColor};`" class="popup__circle">
            <span class="popup__letter">{{info.name.substring(0, 1)}}</span>
          </div>
          <p class="popup__name">
            {{info.name}}
          </p>
        </div>
        <div class="popup__separator"/>
        <div v-for="title in fields" :key="title.name" class="popup__title" :class="`popup__title--${title.name}`">
          <div class="popup__icon-wrapper">
            <svg width="20" height="20" class="popup__icon">
              <use :xlink:href="`#${title.name}`"/>
            </svg>
          </div>
          <p class="popup__title-text">
            {{title.titleText}}
          </p>
        </div>
        <div v-for="title in fields" :key="title.titleText" class="popup__info" :class="`popup__info--${title.name}`">
          <p class="popup__text">
            {{info[title.infoFieldName].title || info[title.infoFieldName]}}
          </p>
        </div>
        <div class="popup__title popup__title--films">
          <div class="popup__icon-wrapper">
            <svg width="20" height="20" class="popup__icon">
              <use :xlink:href="`#films`"/>
            </svg>
          </div>
          <p class="popup__title-text">
            Films
          </p>
        </div>
        <div class="popup__info popup__info--films">
          <ul class="popup__films">
            <li v-for="film in info.films" :key="film.title" class="popup__film">
              <p class="popup__text">
                {{film.title}}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex';
  import Preloader from "./Preloader.vue";

  export default {
    name: "Popup",
    components: {
      Preloader
    },
    data() {
      return {
        fields: [
          {
            name: 'by',
            infoFieldName: 'birth_year',
            titleText: 'Birth year'
          },
          {
            name: 'spec',
            infoFieldName: 'species',
            titleText: 'Species'
          },
          {
            name: 'gender',
            infoFieldName: 'gender',
            titleText: 'Gender'
          },
          {
            name: 'hw',
            infoFieldName: 'homeworld',
            titleText: 'Homeworld'
          }
        ]
      }
    },
    methods: {
      ...mapActions('popup', {
        loadData: 'loadData'
      }),
      ...mapMutations('popup', {
        setPopupState: 'setPopupState',
        resetPopup: 'resetDefaultState'
      }),
      closePopup() {
        this.setPopupState(false);
        this.resetPopup();
      }
    },
    computed: {
      ...mapGetters('popup', {
        info: 'getCard',
        loadingStatus: 'getLoadingStatus',
        nameColor: 'getNameColor',
        gotError: 'getError'
      })
    },
    mounted() {
      this.loadData();
    }
  }
</script>

<style lang="scss" scoped>
.preloader-leave-to, .preloader-enter {
  opacity: 0;
}

.preloader-enter-to {
  opacity: 1;
}

.preloader-enter-active {
  transition: all 0.7s;
}

.preloader-leave-active {
  transition: all 0.7s;
  transition-delay: 2s;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;

  z-index: 1000;
  background-color: #1A1A1A;
  padding-top: 50px;

  @media(min-width: $desktop-width) {
    width: 80%;
    max-width: 800px;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 8px;
    padding-top: 80px;
    padding-bottom: 75px;
    min-height: 400px;
  }

  &__preloader {
    margin: 100px auto 0;
  }

  &--error {
    background-color: $black;
    @media(min-width: $desktop-width) {
      padding: 0;
    }
  }

  .error {
    width: 100%;
    min-height: 400px;
    height: 100%;
    padding: 20px;
    background-image: url("~st/popup_error.jpg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center 30%;

    @media(min-width: $desktop-width) {
      background-size: cover;
      background-position: center;
    }

    &__text {
      color: $white;
      font-size: 16px;
      line-height: 20px;
      font-weight: 500;
    }
  }

  &__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 20px;
    grid-template-areas: "name name" "separator separator" "byTitle by" "specTitle spec" "genderTitle gender" "hwTitle hw" "filmsTitle films";

    @media(min-width: $desktop-width) {
      width: 80%;
      grid-template-rows: auto auto auto minmax(20px, min-content) auto;
      grid-template-columns: 18% 0.6fr 24% 1.2fr;
      grid-template-areas: "name name name name" "separator separator separator separator" "byTitle by hwTitle hw" "specTitle spec filmsTitle films" "genderTitle gender filmsTitle films";
    }
  }

  &__button {
    position: absolute;
    top: 7.5%;
    right: 7.5%;
    outline: none;
    width: 14px;
    height: 14px;
    background-color: transparent;
    border: none;

    &:hover {
      cursor: pointer;
    }

    &::before, &::after {
      content: '';
      position: absolute;
      height: 2px;
      width: 100%;
      background-color: $white;
      top: 6px;
      left: 0;
    }

    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
  }

  &__circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
  }

  &__name {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 22px;
    line-height: 26px;
    margin: 0 0 0 15px;
    color: $white;
  }

  &__letter {
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    color: $white;
  }

  &__separator {
    margin: 25px 0;

    @media(min-width: $desktop-width) {
      margin: 60px 0 50px 0;
    }
  }

  &__name-block {
    grid-area: name;
    display: flex;
  }

  &__separator {
    grid-area: separator;
    background-color: $grey;
    height: 2px;

  }

  &__films {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__film {
    margin-bottom: 10px;
  }

  &__title-text {
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: $grey;
    margin: 0;
  }

  &__icon-wrapper {
    margin-right: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__icon {
    fill: $grey;
  }


  &__title {
    display: flex;
    align-items: flex-start;

    &--by {
      grid-area: byTitle;
    }

    &--spec {
      grid-area: specTitle;
    }

    &--gender {
      grid-area: genderTitle;
    }

    &--hw {
      grid-area: hwTitle;
    }

    &--films {
      grid-area: filmsTitle;
    }
  }

  &__text {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: $white;
    margin: 0;
  }

  &__info {
    &--by {
      grid-area: by;
    }

    &--spec {
      grid-area: spec;
    }

    &--gender {
      grid-area: gender;
    }

    &--hw {
      grid-area: hw;
    }

    &--films {
      grid-area: films;
    }
  }
}
</style>
