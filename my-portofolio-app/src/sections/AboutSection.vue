<script setup>
import SkillsLabel from '../components/SkillsLabel.vue';
</script>

<template>
  <!-- Start About Section -->
  <section class="about">
    <div class="container">
      <div class="left">
        <div class="left__text">
          <h2 class="text-underline">About Me</h2>
          <div class="img-tablet">
            <img src="../assets/img/prof-pic.png" alt="" />
          </div>
          <p class="text-lg">Junior front-end developer who have so much interest on website design and development. Also like learning a lot of new things, im currently learning a certain framework to work easier with web development.</p>
        </div>
        <div class="left__skill-label">
          <SkillsLabel />
        </div>
      </div>

      <div class="right">
        <img src="../assets/img/prof-pic.png" alt="" />
      </div>
    </div>
  </section>
  <!-- End About Section -->
</template>

<style lang="scss" scoped>
@import '../assets/scss/styles.scss';
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @include media-breakpoint-down(md) {
    flex-direction: column;
    gap: toRem(56);
  }

  img {
    border-radius: 10px;
  }

  .left {
    max-width: 396px;
    display: flex;
    flex-direction: column;
    gap: toRem(32);

    @include media-breakpoint-down(md) {
      max-width: 100%;
    }

    &__text {
      display: flex;
      flex-direction: column;
      gap: toRem(32);

      @include media-breakpoint-down(md) {
        gap: toRem(56);
        align-items: center;
      }

      .img-tablet {
        width: 100%;

        @include media-breakpoint-up(md) {
          display: none;
        }

        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }

  .right {
    @include media-breakpoint-down(md) {
      display: none;
    }
  }
}
</style>
