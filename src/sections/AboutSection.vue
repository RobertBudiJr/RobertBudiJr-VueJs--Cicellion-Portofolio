<script setup>
import HeaderTitle from '@/components/HeaderTitle.vue';
import profPicUnload from '@/assets/img/prof-pic-unload.png';
import profPic from '@/assets/img/prof-pic.png';

import VLazyImage from 'v-lazy-image';
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
            <v-lazy-image :src="profPic" :src-placeholder="profPicUnload" alt="Profile Picture" />
          </div>
          <p class="text-md">
            Have so much interest at web developer field, especially as a Front-End Web Developer. With current skill related to front-end web like HTML, CSS, Sass, VueJs. Currently I'm learning and working with Webflow as website builder.
            Consistently doing work using gitlab, and then connect it to github for public repo. Able to work as a team and discuss a task as clearly as possible. Have experience in Back-End Development using PHP, Laravel, MySQL.
          </p>
        </div>
        <a href="https://drive.google.com/file/d/1e0vK2SDdXlHJGCqA0y9v0IplzePVuOXR/view?usp=sharing" class="btn btn--primary btn--md left__btn" target="_blank" v-motion-slide-visible-once-bottom>Check My CV</a>
      </div>

      <div class="right">
        <v-lazy-image :src="profPic" :src-placeholder="profPicUnload" alt="Profile Picture" v-motion-slide-visible-once-right />
      </div>
    </div>
  </section>
  <!-- End About Section -->
</template>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';

section.about#aboutSection {
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
        width: -moz-fit-content;
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
}
</style>
