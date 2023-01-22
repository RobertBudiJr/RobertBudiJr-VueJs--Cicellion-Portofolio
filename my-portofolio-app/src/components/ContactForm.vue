<script>
import emailjs from 'emailjs-com';

export default {
  methods: {
    sendEmail() {
      emailjs.sendForm('service_4i2wnlc', 'template_82dl7le', this.$refs.form, 'OrOcJYNT8Miqn1CDS').then(
        (result) => {
          let inputs = document.querySelectorAll('#nameInput, #emailInput, #msgInput');

          alert('Message sent successfully!', result.text);
          event.preventDefault();
          inputs.forEach((el) => {
            el.value = '';
          });
        },
        (error) => {
          alert('Message failed to sent.', error.text);
        }
      );
    },
  },
};
</script>

<template>
  <form autocomplete="off" ref="form" @submit.prevent="sendEmail">
    <div class="input-group">
      <div class="form-group" v-motion-fade-visible-once>
        <label for="nameInput" class="form-label text-md">Full Name</label>
        <input type="text" class="form-control" name="user_name" id="nameInput" placeholder="John Doe" required />
      </div>
      <div class="form-group" v-motion-fade-visible-once>
        <label for="emailInput" class="form-label text-md">Email</label>
        <input type="text" name="email" class="form-control" id="emailInput" placeholder="JohnDoe@mail.com" required />
      </div>
      <div class="form-group" v-motion-fade-visible-once>
        <label for="msgInput" class="form-label text-md">Message</label>
        <textarea type="text" name="message" class="form-control" id="msgInput" rows="3" required></textarea>
      </div>
    </div>
    <input type="submit" class="btn btn--primary btn--md" value="Send Message" v-motion-slide-visible-once-bottom />
  </form>
</template>

<style lang="scss" scoped>
@import '../assets/scss/styles.scss';

form {
  max-width: 480px;
  width: 100%;
  padding: toRem(40);
  display: flex;
  flex-direction: column;
  gap: toRem(40);

  // Background Settings
  background: linear-gradient(151.84deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%);
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(20px);
  border-radius: 20px;

  @include media-breakpoint-down(sm) {
    padding: toRem(32) toRem(16);
    gap: toRem(20);
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: toRem(20);

    .form-group {
      display: flex;
      flex-direction: column;
      gap: toRem(20);

      .text-md {
        margin-bottom: 0;
      }

      .form-control {
        padding: toRem(16) toRem(24);
        background: rgba($blue, $alpha: 0.1);
        border-radius: 10px;
        border: 1px solid transparent;
        color: $white;
        transition: all 0.2s;

        &:focus {
          box-shadow: unset;
          border: 1px solid $blue;
        }
      }
    }
  }
}
</style>
