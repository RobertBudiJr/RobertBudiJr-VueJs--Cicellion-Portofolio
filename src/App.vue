<script>
import ScrollToTop from '@/components/ScrollToTop.vue';

export default {
  name: 'App',
  components: {
    ScrollToTop,
  },
};
</script>

<template>
  <div id="app">
    <router-view></router-view>
    <ScrollToTop />
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/styles.scss';

#app {
  background-color: $black;
  color: $white;

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    position: relative;
    z-index: 1;

    @include media-breakpoint-down(sm) {
      height: auto;
      padding: toRem(56) toRem(20);
    }
  }
}
</style>
