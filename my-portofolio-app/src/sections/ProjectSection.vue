<script setup>
import HeaderTitle from '../components/HeaderTitle.vue';
import ProjectMini from '../components/ProjectMini.vue';
</script>

<template>
  <!-- Start Section Projects -->
  <section class="projects" id="projectSection">
    <!-- Pattern Group -->
    <div class="pattern">
      <div class="ornament ornament__ellipse-1"></div>
    </div>

    <div class="container">
      <div class="header">
        <HeaderTitle titleMsg="Projects" />
        <p class="text-md">These are some samples of the work I've done so far.</p>
      </div>
      <ProjectMini />
      <button class="btn btn--md btn--tertiary">
        <p>See More</p>
      </button>
    </div>
  </section>
  <!-- End Section Projects -->
</template>

<style lang="scss" scoped>
@import '../assets/scss/styles.scss';

section.projects#projectSection {
  height: 1338px;
  // Pattern Settings
  .pattern {
    .ornament__ellipse-1 {
      width: 291px;
      height: 291px;
      left: -121px;
      top: 1097px;
      background: #0354e2;
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: toRem(32);
    align-items: center;
  }
}
</style>
