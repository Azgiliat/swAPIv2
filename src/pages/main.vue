<template>
  <div class="">
    main
    <img src="./../static/webpack.svg" />
  </div>
</template>

<script>
  import {mapActions} from 'vuex';
  export default {
    name: "main",
    methods: {
      ...mapActions({
        tmp: 'tmp'
      })
    },
    mounted() {
      this.tmp()
    }
  }
</script>

<style scoped>

</style>
