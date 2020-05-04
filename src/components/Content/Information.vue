<template>
  <div v-else class="content__content">
    <Search class="content__search"/>
    <CardsList ref="list" class="content__cards" :cardsForDisplay="cardsForDisplay"/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Search from "../Search.vue";
  import CardsList from "../CardsList.vue";

  export default {
    name: "Information",
    components: {
      Search,
      CardsList
    },
    computed: {
      ...mapGetters({
        allPages: 'getAllPages',
      }),
      ...mapGetters('search', {
        isSearching: 'isSearching',
      }),
      cardsForDisplay() {
        let cards = [];
        if (this.isSearching) {
          cards = [];
          return this.searchResult.results;
        }
        this.allPages.map(page => page).reverse()
          .map(page => page.results).forEach(result => result.forEach(card => cards.push(card)));
        //reverse because use unshift in Vuex
        return cards;
      }
    }
  }
</script>

<style lang="scss" scoped>
.content {
  &__search {
    margin: 0 0 45px;

    @media(min-width: $desktop-width) {
      margin-bottom: 80px;
    }
  }
}
</style>
