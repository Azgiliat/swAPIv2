<template>
    <div class="falcon">
      <svg width="60" height="65">
        <use xlink:href="#falcon" />
      </svg>
    </div>
</template>
<script>
  export default {
    name: 'Preloader',
    props: {
      isExist: {
        type: Boolean,
        require: true
      }
    }
  }
</script>
<style lang="scss">
.falcon {
  width: 60px;
  height: 65px;
  animation-name: fly;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  transition: all 0.7s;
}

.rect-1 {
  animation-name: puls-1;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}

.rect-2 {
  animation-name: puls-2;
  animation-duration: 1s;
  animation-delay: 0.1s;
  animation-iteration-count: infinite;
}

.rect-3 {
  animation-name: puls-3;
  animation-duration: 1s;
  animation-delay: 0.2s;
  animation-iteration-count: infinite;
}


@keyframes puls-1 {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes puls-2 {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes puls-3 {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes fly {
  0% {
    transform: rotate(0deg)
    translate(-100%)
    rotate(0);
  }
  100% {
    transform: rotate(360deg)
    translate(-100%)
    rotate(0);
  }
}
</style>
