<template>
  <div class="">
    main
    <img src="./../static/webpack.svg" />
  </div>
</template>

<script>
  export default {
    name: "main",
    computed: {
      pic() {
        return require('#/webpack.svg');
      }
    }
  }
</script>

<style scoped>

</style>
