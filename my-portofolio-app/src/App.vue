<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HeroSection from './sections/HeroSection.vue';
import AboutSection from './sections/AboutSection.vue';
import SkillsSection from './sections/SkillsSection.vue';
import ProjectSection from './sections/ProjectSection.vue';
import FormSection from './sections/FormSection.vue';
import FooterSection from './sections/FooterSection.vue';
</script>

<template>
  <HeroSection />
  <AboutSection />
  <SkillsSection />
  <ProjectSection />
  <FormSection />
  <FooterSection />
</template>

<style lang="scss">
@import './assets/scss/styles.scss';

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
