<script setup>
import HeaderTitle from '@/components/HeaderTitle.vue';
import ProjectLists from '@/components/ProjectCards.vue';
</script>

<template>
  <!-- Start Full Projects Section -->
  <kinesis-container tag="section" class="full-projects" id="fullProjectsSection">
    <!-- Pattern Group -->
    <div class="pattern">
      <kinesis-element :strength="75" axis="x" class="ornament ornament__ellipse-1"></kinesis-element>
      <kinesis-element :strength="-50" axis="y" class="ornament ornament__ellipse-2"></kinesis-element>
      <kinesis-element :strength="-75" axis="y" class="ornament ornament__ellipse-3"></kinesis-element>
      <kinesis-element :strength="50" axis="x" class="ornament ornament__ellipse-4"></kinesis-element>
    </div>

    <!-- Content -->
    <div class="container">
      <div class="header">
        <router-link class="btn btn--back header__btn" to="/">
          <span class="arrow-left"></span>
        </router-link>
        <HeaderTitle titleMsg="Projects" />
      </div>
      <ProjectLists classProp="project-list" />
    </div>
  </kinesis-container>
  <!-- End Full Projects Section -->
</template>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';

section.full-projects#fullProjectsSection {
  height: auto;
  .pattern {
    .ornament__ellipse-1 {
      width: 400px;
      height: 400px;
      left: -286px;
      top: 0px;
      background: #0354e2;
    }

    .ornament__ellipse-2 {
      width: 300px;
      height: 300px;
      right: -100px;
      top: 637px;
      background: #5d008a;
    }

    .ornament__ellipse-3 {
      width: 200px;
      height: 200px;
      left: -186px;
      bottom: 600px;
      background: #0354e2;
    }

    .ornament__ellipse-4 {
      width: 500px;
      height: 500px;
      right: -350px;
      bottom: -100px;
      background: #0354e2;
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: toRem(32);
    align-items: center;

    @include media-breakpoint-up(sm) {
      padding: toRem(80) 0;
    }

    .header {
      display: flex;
      flex-direction: row;
      gap: toRem(32);
      align-items: center;
      justify-content: flex-start;
      width: 100%;
    }
  }
}
</style>
