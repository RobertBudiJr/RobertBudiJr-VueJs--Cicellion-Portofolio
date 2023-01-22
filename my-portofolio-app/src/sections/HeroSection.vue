<template>
  <!-- Start Hero Section -->
  <section class="hero" id="heroSection">
    <!-- Pattern Group -->
    <div class="pattern">
      <div class="ornament ornament__ellipse-1"></div>
      <div class="ornament ornament__ellipse-2"></div>
    </div>

    <div class="container">
      <div class="left" v-motion-slide-left>
        <div class="text">
          <h1>Hello! I am <span class="text-gradient-primary">Cicellion</span></h1>
          <p class="text-lg">Front End Developer</p>
        </div>
        <div class="btn-container">
          <a href="#aboutSection" class="btn btn--primary btn--md">See What I Do</a>
          <a href="#formSection" class="btn btn--tertiary btn--md">
            <p>Contact</p>
          </a>
        </div>
      </div>
      <div class="right" v-motion-slide-right>
        <a href="https://github.com/RobertBudiJr/RobertBudiJr" class="icon icon--github" target="_blank"></a>
        <div class="line-v-separator"></div>
        <a href="https://www.instagram.com/cicellion_/" class="icon icon--instagram" target="_blank"></a>
        <div class="line-v-separator"></div>
        <a href="https://www.linkedin.com/in/valenta-abram-nugraha-putra-440216238/" class="icon icon--linkedin" target="_blank"></a>
      </div>
    </div>
  </section>
  <!-- End Hero Section -->
</template>

<style lang="scss" scoped>
@import '../assets/scss/styles.scss';

// Pattern Settings
.pattern {
  .ornament__ellipse-1 {
    width: 497px;
    height: 497px;
    left: -242px;
    top: -248px;
    background: #5d008a;
  }

  .ornament__ellipse-2 {
    width: 784px;
    height: 784px;
    left: 1048px;
    top: calc(50% - 784px / 2);
    background: #0354e2;
  }
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @include media-breakpoint-down(md) {
    flex-direction: column;
    justify-content: center;
    gap: toRem(56);
    text-align: center;
  }

  @include media-breakpoint-down(sm) {
    margin-top: toRem(80);
  }

  .left {
    display: flex;
    flex-direction: column;
    gap: toRem(32);
    align-items: flex-start;

    @include media-breakpoint-down(md) {
      align-items: center;
    }

    .text {
      display: flex;
      flex-direction: column;
      gap: toRem(8);
    }

    .btn-container {
      display: flex;
      flex-direction: row;
      gap: toRem(16);

      @include media-breakpoint-down(md) {
        flex-direction: column;
        width: 100%;
      }

      & > * {
        @include media-breakpoint-down(md) {
          width: 100%;
        }
      }
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    gap: toRem(8);
    align-items: center;

    @include media-breakpoint-down(md) {
      flex-direction: row;
    }
    .line-v-separator {
      width: 1px;
      height: 32px;
      background-color: $white;

      @include media-breakpoint-down(md) {
        height: 1px;
        width: 32px;
      }
    }

    .icon {
      width: 32px;
      height: 32px;
      background-color: $grey;
      -webkit-mask-size: contain;
      mask-size: contain;
      -webkit-mask-position: center;
      mask-position: center;
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      transition: all 0.2s;
      border-radius: 50%;
      cursor: pointer;

      &:hover {
        background-color: $white;
        transform: scale(1.1);
      }

      &--github {
        mask-image: url('../assets/img/icons/logo-github.svg');
        -webkit-mask-image: url('../assets/img/icons/logo-github.svg');
      }

      &--instagram {
        mask-image: url('../assets/img/icons/logo-instagram.svg');
        -webkit-mask-image: url('../assets/img/icons/logo-instagram.svg');
      }

      &--linkedin {
        mask-image: url('../assets/img/icons/logo-linkedin.svg');
        -webkit-mask-image: url('../assets/img/icons/logo-linkedin.svg');
      }
    }
  }
}
</style>
