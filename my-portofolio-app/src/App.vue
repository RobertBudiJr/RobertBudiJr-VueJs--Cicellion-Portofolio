<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HeroSection from './sections/HeroSection.vue';
import AboutSection from './sections/AboutSection.vue';
import ProjectSection from './sections/ProjectSection.vue';
import FormSection from './sections/FormSection.vue';
</script>

<template>
  <HeroSection />
  <AboutSection />
  <ProjectSection />
  <FormSection />
</template>

<style lang="scss">
@import './assets/scss/styles.scss';

#app {
  background-color: $black;
  color: $white;
  padding-top: toRem(80);

  @include media-breakpoint-down(md) {
    padding-top: toRem(64);
  }
}
</style>
