<template>
  <div class="content__error">
    <p class="content__error-text">
      Oops, here is some problems with data loading. Try again later, please. May the Force be with you!
    </p>
    <img src="~st/main_error.jpg" alt="error image">
  </div>
</template>

<script>
  export default {
    name: "Error"
  }
</script>

<style lang="scss" scoped>
.content {
  &__error {
    width: 100%;
    position: relative;

    img {
      width: 100%;
      height: auto;
    }
  }

  &__error-text {
    position: absolute;
    top: 35%;
    left: 12%;

    color: #fff;
    font-size: 16px;
    line-height: 20px;
    margin: 0;
    width: 200px;

    @media(min-width: $desktop-width) {
      width: 400px;
      font-size: 25px;
      line-height: 30px;
    }
  }
}
</style>
