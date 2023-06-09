<script setup>
import HeaderTitle from '@/components/HeaderTitle.vue';
import ContactForm from '@/components/ContactForm.vue';
</script>

<template>
  <!-- Start Form Section -->
  <section class="form" id="formSection">
    <!-- Pattern Group -->
    <div class="pattern">
      <div class="ornament ornament__ellipse-1"></div>
    </div>

    <div class="container">
      <div class="header">
        <HeaderTitle titleMsg="Contact Me" />
        <p class="text-lg" v-motion-pop-visible-once>I’d love to hear a message from you, reach out!</p>
      </div>
      <ContactForm />
    </div>
  </section>
  <!-- End Form Section -->
</template>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';

section.form#formSection {
  min-height: 800px;
  height: auto;

  // Pattern Settings
  .pattern {
    .ornament__ellipse-1 {
      width: 581px;
      height: 581px;
      left: 1068px;
      top: 348px;
      background: #5d008a;
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: toRem(64);
    align-items: center;

    @include media-breakpoint-down(md) {
      gap: toRem(56);
    }

    .header {
      display: flex;
      flex-direction: column;
      gap: toRem(20);
      text-align: center;
      align-items: center;
    }
  }
}
</style>
