<template>
  <div ref="content" class="content" :class="gotError && 'content--error'">
    <transition v-on:after-enter="afterEnter" name="preloader" :duration="{leave: 2700, enter: 700}" mode="out-in">
      <component :is="currentComponent" :class="currentComponent === 'Preloader' && 'content__preloader'"/>
    </transition>
    <transition appear name="popup">
      <Popup class="content__popup" v-if="popupState"/>
    </transition>
    <div @click.stop="closePopup" class="overlay" v-show="popupState"/>
  </div>
</template>

<script>
  import {mapActions, mapGetters, mapMutations} from 'vuex';
  import Popup from "@/components/Popup.vue";
  import Preloader from "@/components/Preloader.vue";
  import Error from "@/components/Content/Error.vue";
  import Information from "@/components/Content/Information.vue";

  export default {
    name: "Content",
    components: {
      Popup,
      Preloader,
      Error,
      Information
    },
    data() {
      return {
        gotScrollListener: false
      }
    },
    methods: {
      ...mapActions({
        init: 'init',
        loadNextPage: 'loadNextPage'
      }),
      ...mapMutations('popup', {
        resetPopup: 'resetDefaultState',
        setPopupState: 'setPopupState'
      }),
      closePopup() {
        this.setPopupState(false);
        this.resetPopup();
      },
      afterEnter() {
        if (!this.loadingStatus && !this.gotError && !this.gotScrollListener) {
          this.$nextTick(() => {
            const cardHeight = document.querySelector('.card').clientHeight;
            const scrollHandler = () => {
              if ((window.pageYOffset >= cardHeight * (3 + (this.allPages.length - 1) * 5)) && !this.loadingStatus) {
                this.loadNextPage();
              }
            };
            window.addEventListener('scroll', scrollHandler);
            this.gotScrollListener = true;
          })
        }
      }
    },
    computed: {
      ...mapGetters('search', {
        searchResult: 'getResult'
      }),
      ...mapGetters('popup', {
        popupState: 'getPopupState'
      }),
      ...mapGetters({
        allPages: 'getAllPages',
        loadingStatus: 'getLoadingStatus',
        gotError: 'getError'
      }),
      currentComponent() {
        if (this.loadingStatus && !this.gotScrollListener) {
          return 'Preloader'
        }
        if (this.gotError) {
          return 'Error'
        }

        return 'Information'
      }
    },
    mounted() {
      this.init();
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

.content {
  min-height: 250px;
  margin-top: 45px;
  transition: all .7s;
  transition-delay: 2s;

  @media(min-width: $desktop-width) {
    margin-top: 107px;
  }

  &--error {
    margin: 0;
    background-color: $black;
    flex-grow: 2;
  }

  .overlay {
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 500;
    background: rgba(128, 128, 128, 0.01);
    backdrop-filter: blur(30px);
    position: fixed;
  }

  .popup {
    transition: all 0.5s;
  }

  &__preloader {
    margin: 100px auto 0;
  }
}

.popup-enter, .popup-leave-to {
  opacity: 0;

  @media(min-width: $desktop-width) {
    transform: scale(0) translateX(-50%) translateY(-50%);
  }
}

.popup-enter-to {
  opacity: 1;

  @media(min-width: $desktop-width) {
    transform: scale(1) translateX(-50%) translateY(-50%);
  }
}
</style>
