<script>
export default {
  methods: {
    async scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);

      if (element) {
        // Scroll to the section with an offset after the content is loaded
        const scrollWithOffset = () => {
          const yOffset = 0; // Adjust this value to set the desired offset
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        };

        if (document.readyState === 'complete') {
          // If the document is already fully loaded, scroll immediately
          scrollWithOffset();
        } else {
          // If the document is still loading, wait for the 'load' event
          await new Promise((resolve) => {
            window.addEventListener('load', resolve);
          });

          // Scroll after the document is fully loaded
          scrollWithOffset();
        }
      }
    },
  },
};
</script>
<template>
  <!-- Start Hero Section -->
  <kinesis-container tag="section" class="hero" id="heroSection">
    <!-- Pattern Group -->
    <div class="pattern">
      <kinesis-element :strength="75" axis="x" class="ornament ornament__ellipse-1"></kinesis-element>
      <kinesis-element :strength="50" axis="y" class="ornament ornament__ellipse-2"></kinesis-element>
    </div>

    <div class="container">
      <div class="left" v-motion-slide-left>
        <div class="text">
          <kinesis-element tag="h1" :strength="-3">Hello! I am <span class="text-gradient-primary">Cicellion</span></kinesis-element>
          <p class="text-lg">Front End Developer</p>
        </div>
        <div class="btn-container">
          <button class="btn btn--primary btn--md" @click="scrollToSection('aboutSection')">See What I Do</button>
          <button class="btn btn--tertiary btn--md" @click="scrollToSection('formSection')">
            <p>Contact</p>
          </button>
        </div>
      </div>
      <div class="right" v-motion-slide-right>
        <kinesis-element tag="a" :strength="5" type="rotate" href="https://github.com/RobertBudiJr/RobertBudiJr" class="icon icon--github" target="_blank"></kinesis-element>
        <kinesis-element :strength="-2" class="line-v-separator"></kinesis-element>
        <kinesis-element tag="a" :strength="-5" type="rotate" href="https://www.instagram.com/cicellion_/" class="icon icon--instagram" target="_blank"></kinesis-element>
        <kinesis-element :strength="2" class="line-v-separator"></kinesis-element>
        <kinesis-element tag="a" :strength="7" type="rotate" href="https://www.linkedin.com/in/valenta-abram-nugraha-putra-440216238/" class="icon icon--linkedin" target="_blank"></kinesis-element>
      </div>
    </div>
  </kinesis-container>
  <!-- End Hero Section -->
</template>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';

section.hero#heroSection {
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
}
</style>
