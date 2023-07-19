<template>
  <!-- Start Footer Section -->
  <kinesis-container tag="section" class="footer" id="footerSection">
    <div class="container">
      <div class="row g-1 footer__content">
        <div class="col-lg-4 col-sm-6 item item--lg">
          <div class="text-wrap item" v-motion-fade-visible-once>
            <h1>Cicellion.</h1>
            <p class="text-md">This website is still not perfect, sorry for the inconvenience while experiencing this website.</p>
          </div>
          <div class="socials">
            <kinesis-element tag="a" :strength="10" type="rotate" href="https://github.com/RobertBudiJr/RobertBudiJr" class="icon icon--github" target="_blank"></kinesis-element>
            <kinesis-element tag="a" :strength="-9" type="rotate" href="https://www.instagram.com/cicellion_/" class="icon icon--instagram" target="_blank"></kinesis-element>
            <kinesis-element tag="a" :strength="7" type="rotate" href="https://www.linkedin.com/in/valenta-abram-nugraha-putra-440216238/" class="icon icon--linkedin" target="_blank"></kinesis-element>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 item" v-motion-fade-visible-once>
          <p class="text-lg text-lg-bold">This website was made by :</p>
          <a href="https://vuejs.org" class="text-md" target="_blank">Vue JS</a>
          <a href="https://vitejs.dev" class="text-md" target="_blank">Vite JS</a>
          <a href="https://dashboard.emailjs.com/" class="text-md" target="_blank">Email JS</a>
        </div>
        <div class="col-lg-4 col-sm-6 item" v-motion-fade-visible-once>
          <p class="text-lg text-lg-bold">See my other portofolio as :</p>
          <a href="https://www.pixiv.net/en/users/90740726" target="_blank" class="text-md">Digital Artist</a>
        </div>
      </div>
      <div class="footer__copyright" v-motion-pop-visible>
        <p class="text-md">&copy; Copyright 2022, All Rights Reserved by Cicellion</p>
      </div>
    </div>
  </kinesis-container>
  <!-- End Footer Section -->
</template>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';

section.footer#footerSection {
  height: auto;
  background: $gradient-primary;

  .container {
    display: flex;
    flex-direction: column;
    gap: toRem(64);
    align-items: center;
    padding: toRem(80) 0;

    @include media-breakpoint-down(sm) {
      padding: 0;
    }

    .footer__content {
      --bs-gutter-x: 16px;
      --bs-gutter-y: 32px;
      justify-content: center;

      .item {
        display: flex;
        flex-direction: column;
        gap: toRem(16);

        @include media-breakpoint-down(sm) {
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        &--lg {
          gap: toRem(20);
        }

        .socials {
          display: flex;
          gap: toRem(20);
          justify-content: center;
          align-self: flex-start;

          @include media-breakpoint-down(sm) {
            align-self: center;
          }

          .icon {
            width: 32px;
            height: 32px;
            background-color: $white;
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
              background-color: $blue;
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

        a.text-md {
          color: $white;

          &:hover {
            color: $blue;
          }
        }

        p {
          color: $white;
        }
      }
    }

    .footer__copyright {
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: toRem(20);

      @include media-breakpoint-down(sm) {
        text-align: center;
      }

      &:before {
        display: block;
        content: '';
        height: 1px;
        width: 100%;
        background: $white;
        opacity: 0.3;
      }
    }
  }
}
</style>
