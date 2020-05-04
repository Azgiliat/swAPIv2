<template>
  <div class="app">
    <Top class="app__header" />
    <router-view class="app__content"/>
    <Bottom class="app__footer" />
  </div>
</template>
<script>
  import Top from '@/components/Top.vue';
  import Bottom from "@/components/Bottom.vue";
  export default {
    name: 'App',
    components: {
      Top,
      Bottom
    }
  }
</script>

<style lang="scss">
*,
*::after,
*::before {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
}

body {
  font-family: $main-font;
  background-color: #333333;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &__content {
    margin-bottom: 120px;

    @media(min-width: $desktop-width) {
      margin-bottom: 150px;
    }
  }
}
</style>
