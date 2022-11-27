<template>
  <!-- Start Hero Section -->
  <section class="hero">
    <div class="container">
      <div class="left">
        <h1>Hello! I am <span class="text-gradient-primary">Cicellion</span></h1>
        <p class="text-lg">Front End Developer</p>
        <div class="btn-container">
          <button class="btn btn--primary btn--md">See What I Do</button>
          <button class="btn btn--tertiary btn--md">
            <p>Say Hello</p>
          </button>
        </div>
      </div>
      <div class="right">
        <a href="#" class="icon icon--github"></a>
        <div class="line-v-separator"></div>
        <a href="#" class="icon icon--instagram"></a>
        <div class="line-v-separator"></div>
        <a href="#" class="icon icon--linkedin"></a>
      </div>
    </div>
  </section>
  <!-- End Hero Section -->
</template>

<style lang="scss" scoped>
@import '../assets/scss/styles.scss';
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

  .left {
    display: flex;
    flex-direction: column;
    gap: toRem(20);
    align-items: flex-start;

    @include media-breakpoint-down(md) {
      align-items: center;
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
