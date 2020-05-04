<template>
  <div class="search">
    <div class="container">
      <div class="search__content">
        <label for="search-label" class="search__label visually-hidden"></label>
        <input placeholder="Search by name" v-model="query" id="search-label"
               @keyup.enter="startSearch"
               ref="input"
               class="search__input" :class="!!query.length && 'search__input--focused'">
        <span @click="$refs.input.focus()"
              class="search__placeholder">Search by name</span>
        <svg @click="$refs.input.focus()"
             width="23" height="23" class="search__icon">
          <use xlink:href="#search"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapMutations} from 'vuex';

  export default {
    name: "Search",
    data() {
      return {
        query: '',
        debounceTimer: null
      }
    },
    methods: {
      ...mapMutations('search', {
        setSearchQuery: 'setSearchQuery'
      }),
      ...mapActions('search', {
        search: 'search'
      }),
      startSearch() {
        this.debounceTimer && clearTimeout(this.debounceTimer);
        this.setSearchQuery(this.query);
        this.search();
      }
    },
    watch: {
      query(newValue) {
        if (newValue.length) {
          this.debounceTimer && clearTimeout(this.debounceTimer);
          this.debounceTimer = setTimeout(async () => {
            this.setSearchQuery(this.query);
            this.search();
          }, 1500);
        } else {
          this.debounceTimer && clearTimeout(this.debounceTimer);
          this.setSearchQuery(this.query);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.search {
  &__content {
    border-bottom: solid 1px $grey;
    display: flex;
    justify-content: space-between;
    position: relative;

    @media(min-width: $desktop-width) {
      max-width: 800px;
      margin: 0 auto;
    }
  }

  &__icon {
    fill: $grey;
  }

  &__placeholder {
    display: block;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: $grey;

    position: absolute;
    top: 0;
    left: 0;

    transition: transform 0.7s;
  }

  &__input {
    border: none;
    background-color: $dark;
    color: $grey;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    outline: none;
    width: 100%;
    margin-bottom: 7px;
  }

  &__input:focus ~ &__placeholder, &__input--focused ~ &__placeholder {
    transform: translateY(-100%);
  }

  &__input::placeholder {
    opacity: 0;
  }
}
</style>
