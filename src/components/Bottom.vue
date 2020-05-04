<template functional>
  <div class="footer" :key="'footer'">
    <div class="container">
      <p class="footer__text">
        STAR WARS CHARACTER Encyclopedia, 2019
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  background-color: #000;
  padding: 36px 0;
  margin-top: auto;

  &__text {
    width: 70%;
    margin: 0 auto;
    text-transform: uppercase;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
  }
}
</style>
