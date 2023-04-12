<script setup>
import SkillsLabel from '@/components/SkillsLabel.vue';
import HeaderTitle from '@/components/HeaderTitle.vue';
</script>

<template>
  <!-- Start Skills Section -->
  <section class="skills" id="skillsSection">
    <!-- Pattern Group -->
    <div class="pattern">
      <div class="ornament ornament__ellipse-1"></div>
    </div>

    <div class="container">
      <div class="header">
        <HeaderTitle titleMsg="Skills"></HeaderTitle>
        <p class="text-md" v-motion-slide-visible-once-top>I am proficient and open to several programming languages, these are some of the ones I use the most.</p>
      </div>
      <SkillsLabel />
    </div>
  </section>
  <!-- End Skills Section -->
</template>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';
section.skills#skillsSection {
  height: auto;

  // Pattern Settings
  .pattern {
    .ornament__ellipse-1 {
      width: 373px;
      height: 373px;
      left: 1239px;
      top: -135px;

      background: #0354e2;
    }
  }

  .container {
    padding: toRem(80) 0;
    display: flex;
    flex-direction: column;
    gap: toRem(32);

    @include media-breakpoint-down(sm) {
      padding: 0;
    }
  }
}
</style>
