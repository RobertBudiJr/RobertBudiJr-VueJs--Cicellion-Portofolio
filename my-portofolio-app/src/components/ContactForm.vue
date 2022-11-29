<script setup></script>
<template>
  <form autocomplete="off">
    <div class="input-group">
      <div class="form-group">
        <label for="nameInput" class="form-label text-md">Full Name</label>
        <input type="text" class="form-control" name="fromName" v-model="fromName" id="nameInput" placeholder="John Doe" />
      </div>
      <div class="form-group">
        <label for="emailInput" class="form-label text-md">Email</label>
        <input type="text" name="fromEmail" v-model="fromEmail" class="form-control" id="emailInput" placeholder="JohnDoe@mail.com" />
      </div>
      <div class="form-group">
        <label for="msgInput" class="form-label text-md">Message</label>
        <textarea type="text" name="contentMessage" v-html="contentMessage" class="form-control" id="msgInput" rows="3"></textarea>
      </div>
    </div>
    <input type="submit" class="btn btn--primary btn--md" value="Send Message" />
  </form>
</template>

<style lang="scss" scoped>
@import '../assets/scss/styles.scss';

form {
  max-width: 480px;
  width: 100%;
  padding: toRem(64) toRem(40);
  display: flex;
  flex-direction: column;
  gap: toRem(40);

  // Background Settings
  background: linear-gradient(151.84deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%);
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(20px);
  border-radius: 20px;

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
        background: linear-gradient($black 0 0) padding-box, $gradient-primary border-box;
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
