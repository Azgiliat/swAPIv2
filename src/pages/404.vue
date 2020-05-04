<template functional>
  <div class="err-404">
    <p class="err-404__text">404</p>
    <div class="err-404__img">
      <img src="~st/404.jpg" alt="404 img">
    </div>
  </div>
</template>

<script>
  export default {
    name: "404"
  }
</script>

<style lang="scss" scoped>
.err-404 {
  width: 100%;
  position: relative;
  flex-grow: 1;
  background-color: #000;
  display: flex;
  align-items: center;

  @media (min-width: $desktop-width) {
    overflow: hidden;
  }

  &__img {

  }

  &__text {
    color: #fff;
    margin: 0;
    font-size: 50px;
    line-height: 50px;

    position: absolute;
    top: 10%;
    left: 10%;

    @media(min-width: $desktop-width) {
      font-size: 100px;
      line-height: 100px;
    }
  }

  img {
    width: 100%;
    height: auto;
  }
}
</style>
