<script setup>
import HeaderTitle from '@/components/HeaderTitle.vue';
import ProjectLists from '@/components/ProjectCards.vue';
</script>

<template>
  <!-- Start Full Projects Section -->
  <section class="full-projects" id="fullProjectsSection">
    <!-- Pattern Group -->
    <div class="pattern">
      <div class="ornament ornament__ellipse-1"></div>
    </div>

    <!-- Content -->
    <div class="container">
      <div class="header">
        <a href="#" class="btn btn--back header__btn">
          <span class="arrow-left"></span>
          <!-- <p>Back</p> -->
        </a>
        <HeaderTitle titleMsg="Projects" />
      </div>
      <ProjectLists classProp="project-list" />
    </div>
  </section>
  <!-- End Full Projects Section -->
</template>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';

section.full-projects#fullProjectsSection {
  height: auto;

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
      //   position: relative;

      //   &__btn {
      //     align-self: flex-start;
      //     float: left;
      //   }
    }
  }
}
</style>
