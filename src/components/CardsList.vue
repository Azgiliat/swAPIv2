<template>
  <div class="container">
    <transition-group appear tag="ul" class="cards" name="cards">
      <li class="cards__card" v-for="(card, index) in cardsForDisplay" :key="card.name + index">
        <Card :info="card"/>
      </li>
    </transition-group>
  </div>
</template>

<script>
  import Card from "./Card.vue";

  export default {
    name: "CardsList",
    props: {
      cardsForDisplay: {
        type: Array,
        require: true
      }
    },
    components: {
      Card
    }
  }
</script>

<style lang="scss" scoped>
.cards {
  padding: 0;
  margin: 0;
  list-style: none;

  @media (min-width: $desktop-width) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 32px;
    row-gap: 32px;
  }

  &__card {
    margin-bottom: 24px;
    transition: all 0.5s;

    @media(min-width: $desktop-width) {
      margin-bottom: 0;
    }
  }
}

.card-leave-active {
  position: absolute;
}

.cards-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.cards-enter {
  transform: translateY(20px);
  opacity: 0;
}

.cards-enter-to {
  transform: translateY(0);
  opacity: 1;
}
</style>
