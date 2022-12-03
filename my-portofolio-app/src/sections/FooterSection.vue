<template>
  <!-- Start Footer Section -->
  <section class="footer">
    <div class="container">
      <div class="row g-1 footer__content">
        <div class="col-lg-4 col-sm-6 item item--lg">
          <div class="text-wrap item">
            <h1>Cicellion.</h1>
            <p class="text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut id nisl tellus rhoncus, imperdiet</p>
          </div>
          <div class="socials">
            <a href="#" class="icon icon--github"></a>
            <a href="#" class="icon icon--instagram"></a>
            <a href="#" class="icon icon--linkedin"></a>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 item">
          <p class="text-lg text-lg-bold">Credits :</p>
          <a href="#" class="text-md">Vue JS</a>
          <a href="#" class="text-md">Vite JS</a>
          <a href="#" class="text-md">Email JS</a>
        </div>
        <div class="col-lg-4 col-sm-6 item">
          <p class="text-lg text-lg-bold">See My Other Portfolio as :</p>
          <a href="#" class="text-md">Digital Artist</a>
        </div>
      </div>
      <div class="footer__copyright">
        <p class="text-md">&copy; Copyright 2022, All Rights Reserved by Cicellion</p>
      </div>
    </div>
  </section>
  <!-- End Footer Section -->
</template>

<style lang="scss" scoped>
@import '../assets/scss/styles.scss';

.footer {
  background: $gradient-primary;

  .container {
    display: flex;
    flex-direction: column;
    gap: toRem(64);
    align-items: center;

    .footer__content {
      --bs-gutter-x: 16px;
      --bs-gutter-y: 32px;
      justify-content: center;

      .item {
        display: flex;
        flex-direction: column;
        gap: toRem(16);

        &--lg {
          gap: toRem(20);
        }

        .socials {
          display: flex;
          gap: toRem(20);
          justify-content: center;
          align-self: flex-start;

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
              background-color: $light-green;
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
            color: $light-green;
          }
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
