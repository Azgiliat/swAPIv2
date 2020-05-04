<template functional>
  <section class="header" :key="'header'">
    <h1 class="visually-hidden">Star wars character encyclopedia</h1>
    <div class="container">
      <div class="header__img-wrapper">
        <picture>
          <source srcset="~st/star_desk.png" media="(min-width: 768px)">
          <img alt="star word" src="~st/star.png"/>
        </picture>
      </div>
      <p class="header__text">CHARACTER Encyclopedia</p>
      <div class="header__img-wrapper">
        <picture>
          <source srcset="~st/wars_desk.png" media="(min-width: 768px)">
          <img alt="wars word" src="~st/wars.png"/>
        </picture>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.header {
  background-image: url("~st/top-back-small.jpg");
  min-height: 240px;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 57px 0;

  @media(min-width: $desktop-width) {
    padding: 0;
    height: 33vh;
    background-image: url("~st/top-back-big.jpg");
    display: flex;
    align-items: center;
  }

  &__text {
    text-transform: uppercase;
    color: $white;
    text-align: center;
    margin: 8px 0;

    @media(min-width: $desktop-width) {
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;
    }
  }

  &__img-wrapper {
    margin: 0 auto;
    width: 212px;

    @media (min-width: $desktop-width) {
      width: 27%;
      max-width: 406px;
    }

    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
