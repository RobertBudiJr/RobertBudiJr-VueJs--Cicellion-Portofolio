<template>
  <!-- Start 404 Page -->
  <section class="not-found" id="notFoundSection">
    <!-- Pattern Group -->
    <div class="pattern">
      <div class="ornament ornament__ellipse-1"></div>
      <div class="ornament ornament__ellipse-2"></div>
    </div>

    <!-- Content -->
    <div class="container">
      <div class="text-wrap">
        <div class="big-text">
          <h1 class="text-gradient-primary text-not-found">404</h1>
        </div>
        <div class="sub-text">
          <h3>There's NOTHING Here..</h3>
          <p class="text-md">Commander, I think we've lost.</p>
        </div>
      </div>
      <router-link to="/" class="btn btn--lg btn--primary">Back to Home</router-link>
    </div>
  </section>
  <!-- End 404 Page -->
</template>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';

section.not-found#notFoundSection {
  .pattern {
    .ornament__ellipse-1 {
      width: 291px;
      height: 291px;
      left: 0px;
      top: 0px;
      background: #0354e2;
    }

    .ornament__ellipse-2 {
      width: 300px;
      height: 300px;
      right: -100px;
      top: 224px;
      background: #5d008a;
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: toRem(32);

    .text-wrap {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: toRem(24);

      .big-text {
        h1 {
          font-size: toRem(224);

          @include media-breakpoint-down(sm) {
            font-size: toRem(160);
          }
        }
      }

      .sub-text {
        p {
          color: $grey;
        }
      }
    }
  }
}
</style>
