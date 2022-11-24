<template>
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
      <div class="right"></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../assets/scss/styles.scss';

.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .left {
    display: flex;
    flex-direction: column;
    gap: toRem(20);
    align-items: flex-start;

    .btn-container {
      display: flex;
      flex-direction: row;
      gap: toRem(16);
    }
  }

  .right {
  }
}
</style>
