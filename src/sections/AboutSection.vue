<script setup>
import SkillsLabel from '../components/SkillsLabel.vue';
import HeaderTitle from '../components/HeaderTitle.vue';

import profPic from '../assets/img/prof-pic.png';
</script>

<template>
  <!-- Start About Section -->
  <section class="about" id="aboutSection">
    <!-- Pattern Group -->
    <div class="pattern">
      <div class="ornament ornament__ellipse-1"></div>
    </div>

    <div class="container">
      <div class="left">
        <div class="left__text" v-motion-slide-visible-once-left>
          <HeaderTitle titleMsg="About Me" />
          <div class="img-tablet">
            <img :src="profPic" alt="" />
          </div>
          <p class="text-md">Junior front-end developer who have so much interest on website design and development. Also like learning a lot of new things, im currently learning a certain framework to work easier with web development.</p>
        </div>
        <a href="https://drive.google.com/file/d/1xUFNCAn7fC3WXRLXF3fTcQ3RbONHlmwe/view?usp=sharing" class="btn btn--primary btn--md left__btn" target="_blank" v-motion-slide-visible-once-bottom>Check My CV</a>
      </div>

      <div class="right">
        <img :src="profPic" alt="" v-motion-slide-visible-once-right />
      </div>
    </div>
  </section>
  <!-- End About Section -->
</template>

<style lang="scss" scoped>
@import '../assets/scss/styles.scss';
// Pattern Settings
.pattern {
  .ornament__ellipse-1 {
    width: 580px;
    height: 580px;
    left: -290px;
    top: 46px;
    background: #5d008a;
  }
}
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
      align-items: center;
      text-align: center;
    }

    &__text {
      display: flex;
      flex-direction: column;
      gap: toRem(16);

      @include media-breakpoint-down(md) {
        gap: toRem(56);
        align-items: center;
      }

      @include media-breakpoint-down(xs-2) {
        gap: toRem(32);
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

    &__btn {
      width: fit-content;

      @include media-breakpoint-down(xs-2) {
        width: 100%;
      }
    }
  }

  .right {
    width: 400px;
    height: 400px;
    overflow: hidden;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: auto;
      height: 400px;
    }

    @include media-breakpoint-down(md) {
      display: none;
    }
  }
}
</style>
