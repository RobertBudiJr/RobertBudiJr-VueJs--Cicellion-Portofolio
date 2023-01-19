<script setup>
import SkillsLabel from '../components/SkillsLabel.vue';
import HeaderTitle from '../components/HeaderTitle.vue';
</script>

<template>
  <!-- Start Skills Section -->
  <section class="skills" id="skillsSection">
    <div class="container">
      <div class="text">
        <HeaderTitle titleMsg="Skills"></HeaderTitle>
        <p class="text-lg">I am proficient and open to several programming languages, these are some of the ones I use the most.</p>
      </div>
      <SkillsLabel />
    </div>
  </section>
  <!-- End Skills Section -->
</template>

<style lang="scss" scoped>
@import '../assets/scss/styles.scss';
section.skills#skillsSection {
  height: auto;

  .container {
    padding: toRem(80) 0;
    display: flex;
    flex-direction: column;
    gap: toRem(32);

    .text {
      display: flex;
      flex-direction: column;
      gap: toRem(16);
      text-align: center;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
