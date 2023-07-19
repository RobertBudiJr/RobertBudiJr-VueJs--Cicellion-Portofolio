<template>
  <!-- Start 404 Page -->
  <kinesis-container tag="section" class="not-found" id="notFoundSection">
    <!-- Pattern Group -->
    <div class="pattern">
      <kinesis-element :strength="50" class="ornament ornament__ellipse-1"></kinesis-element>
      <kinesis-element :strength="-50" class="ornament ornament__ellipse-2"></kinesis-element>
    </div>

    <!-- Content -->
    <div class="container">
      <div class="text-wrap">
        <div class="big-text">
          <h1 class="text-gradient-primary text-not-found">404</h1>
        </div>
        <div class="sub-text">
          <h3>
            <span class="default-h3"> There's </span>
            <kinesis-element tag="span" :strength="2">N</kinesis-element>
            <kinesis-element tag="span" :strength="-2" type="rotate">O</kinesis-element>
            <kinesis-element tag="span" :strength="-5">T</kinesis-element>
            <kinesis-element tag="span" :strength="-1" type="scale">H</kinesis-element>
            <kinesis-element tag="span" :strength="4" type="rotate">I</kinesis-element>
            <kinesis-element tag="span" :strength="1" type="scale">N</kinesis-element>
            <kinesis-element tag="span" :strength="-2">G</kinesis-element>
            <span class="default-h3--left"> Here.. </span>
          </h3>
          <p class="text-md">Commander, I think we've lost.</p>
        </div>
      </div>
      <router-link to="/" class="btn btn--lg btn--primary">Back to Home</router-link>
    </div>
  </kinesis-container>
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
        h3 {
          display: flex;
          position: relative;
          .default-h3 {
            margin-right: toRem(8);

            &--left {
              margin-left: toRem(8);
            }
          }
        }
      }
    }
  }
}
</style>
