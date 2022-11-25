<script setup>
import { ref } from 'vue';

defineProps({
  project: String,
});

const projectList = ref([
  {
    img: './src/assets/img/Pp.png',
    tag: 'React JS',
    name: 'Destination List App',
    desc: 'Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas..',
  },
  {
    img: './src/assets/img/PP2.png',
    tag: 'HTML CSS JS',
    name: 'City Specialties App',
    desc: 'Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas..',
  },
  {
    img: './src/assets/img/PP3.png',
    tag: 'HTML CSS JS',
    name: 'Vaccine Guide App',
    desc: 'Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas..',
  },
  {
    img: './src/assets/img/PP4.png',
    tag: 'React JS',
    name: 'Meme Generator',
    desc: 'Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas..',
  },
  {
    img: './src/assets/img/PP5.png',
    tag: 'HTML Sass JS',
    name: 'Tour App',
    desc: 'Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas..',
  },
  {
    img: './src/assets/img/PP6.png',
    tag: 'JS',
    name: 'Dice Game',
    desc: 'Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas..',
  },
]);
</script>

<template>
  <div class="row g-1 project-mini-list">
    <div class="col-md-4 col-sm-6" v-for="project in projectList" v-bind:key="project.id">
      <div class="card card--project">
        <div class="card__img">
          <img :src="project.img" alt="" />
        </div>
        <div class="card__text">
          <p class="project-label text-md text-md--md">{{ project.tag }}</p>
          <h4 class="text-gradient-primary">{{ project.name }}</h4>
          <p class="project-desc text-md">{{ project.desc }}</p>
          <div class="links">
            <a href="#" class="text-md text-md--bold text-gradient-primary">Read More</a>
            <div class="arrow"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/styles.scss';

.project-mini-list {
  --bs-gutter-x: 24px;
  --bs-gutter-y: 24px;

  .card--project {
    border: unset;
    border-radius: 10px;
    overflow: hidden;
    background: transparent;

    .card__img {
      max-height: 351px;
      overflow: hidden;
      width: 100%;

      img {
        width: 100%;
        height: auto;
      }
    }

    .card__text {
      padding: toRem(24);
      display: flex;
      flex-direction: column;
      gap: toRem(12);
    }
  }
}
</style>
