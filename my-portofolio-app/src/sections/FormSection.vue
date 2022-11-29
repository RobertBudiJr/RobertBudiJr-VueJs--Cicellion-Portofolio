<script setup>
import HeaderTitle from '../components/HeaderTitle.vue';
import ContactForm from '../components/ContactForm.vue';
</script>

<template>
  <!-- Start Form Section -->
  <section class="form">
    <div class="container">
      <div class="header">
        <HeaderTitle titleMsg="Contact Me" />
        <p class="text-lg">I’d love to hear a message from you, reach out!</p>
      </div>
      <ContactForm />
    </div>
  </section>
  <!-- End Form Section -->
</template>

<style lang="scss" scoped>
@import '../assets/scss/styles.scss';
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
</style>
