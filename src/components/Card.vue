<template>
  <div class="card" @click.stop="onCardClick">
    <div class="card__circle" :style="`background-color: ${makeColor};`">
      <span class="card__letter">
        {{info.name.substring(0, 1)}}
      </span>
    </div>
    <p class="card__name">
      {{info.name}}
    </p>
    <p class="card__specie">
      {{info.species.title}}
    </p>
  </div>
</template>

<script>
  import {mapMutations} from "vuex";
  export default {
    name: "Card",
    props: {
      info: {
        type: Object,
        require: true
      }
    },
    methods: {
      ...mapMutations('popup', {
        setCardInPopup: 'setCard',
        setNameColor: 'setNameColor',
        setPopupState: 'setPopupState'
      }),
      onCardClick() {
        this.setCardInPopup(this.info);
        this.setNameColor(this.makeColor);
        this.setPopupState(true);
      }
    },
    computed: {
      makeColor() {
        const hashCode = function (str) {
          let hash = 0;
          for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
          }
          return hash;
        };
        const intToARGB = function (i) {
          let hex = ((i>>24)&0xFF).toString(16) +
            ((i>>16)&0xFF).toString(16) +
            ((i>>8)&0xFF).toString(16) +
            (i&0xFF).toString(16);
          hex += '000000';
          return `#${hex.substring(0, 6)}`;
        };
        return intToARGB(hashCode((this.info.name)))
      }
    }
  }
</script>

<style lang="scss" scoped>
.card {
  transition: all 0.3s;
  background: #1A1A1A;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);

  padding: 35px 10%;

  @media(min-width: $desktop-width) {
    height: 100%;
    padding: 92px 10%;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 10px 40px rgba(37, 136, 167, 0.38);
  }

  &__circle {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    margin: 0 auto 10px auto;
    display: flex;
    align-items: center;
  }

  &__letter {
    display: block;
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    text-align: center;
    color: #fff;
    margin: 0 auto;
  }

  &__name {
    margin: 0 0 10px;
    text-align: center;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
  }

  &__specie {
    text-align: center;
    color: $grey;
    margin: 0 0 10px;
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;

    @media(min-width: $desktop-width) {
      margin-bottom: 0;
    }
  }
}
</style>
