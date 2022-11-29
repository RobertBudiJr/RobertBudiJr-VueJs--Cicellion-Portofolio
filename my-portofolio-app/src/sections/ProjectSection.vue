<script setup>
import ProjectMini from '../components/ProjectMini.vue';
import HeaderTitle from '../components/HeaderTitle.vue';
</script>

<template>
  <!-- Start Section Projects -->
  <section class="projects-mini">
    <div class="container">
      <HeaderTitle titleMsg="Projects" />
      <ProjectMini />
      <button class="btn btn--md btn--tertiary">See More</button>
    </div>
  </section>
  <!-- End Section Projects -->
</template>

<style lang="scss" scoped>
@import '../assets/scss/styles.scss';

.container {
  display: flex;
  flex-direction: column;
  gap: toRem(64);
  align-items: center;

  @include media-breakpoint-down(md) {
    gap: toRem(56);
  }
}
</style>
