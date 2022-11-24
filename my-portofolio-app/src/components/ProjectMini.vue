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
]);
</script>

<template>
  <div class="row g-1 project-mini-list">
    <!-- I want this element below to be multiplied -->
    <div class="col-md-4">
      <div class="card card--project">
        <img class="card__img" v-for="project in projectList" v-bind:key="project.img" :src="project.img" alt="" />
        <div class="card__text">
          <p class="project-label text-md text-md--md" v-for="project in projectList" v-bind:key="project.tag">{{ project.tag }}</p>
          <h4 class="text-gradient-primary" v-for="project in projectList" v-bind:key="project.name">{{ project.name }}</h4>
          <p class="project-desc text-md" v-for="project in projectList" v-bind:key="project.desc">{{ project.desc }}</p>
          <a href="#" class="links">Read More</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/styles.scss';

.card--project {
  border: unset;
  border-radius: 10px;
  overflow: hidden;
  background: transparent;

  .card__text {
    padding: toRem(24);
    display: flex;
    flex-direction: column;
    gap: toRem(12);
  }
}
</style>
