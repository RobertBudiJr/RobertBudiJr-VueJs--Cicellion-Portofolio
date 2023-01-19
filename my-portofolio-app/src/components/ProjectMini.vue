<script setup>
import { ref } from 'vue';

defineProps({
  project: String,
  project2: String,
});

const projectList = ref([
  {
    img: './src/assets/img/Project1.png',
    name: 'Kuliwisata.id',
    desc: 'Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas..',
  },
  {
    img: './src/assets/img/Project2.png',
    name: 'Ingfo.id',
    desc: 'Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas..',
  },
]);

const projectList2 = ref([
  {
    name: 'City Specialties App',
    desc: 'Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas..',
  },
  {
    name: 'Meme Generator',
    desc: 'Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas..',
  },
]);
</script>

<template>
  <div class="row g-1 project-list">
    <div class="col-md-12" v-for="project in projectList" v-bind:key="project.id">
      <div class="card card--big">
        <div class="left">
          <div class="left__text">
            <h3>{{ project.name }}</h3>
            <p class="text-md">{{ project.desc }}</p>
          </div>
          <div class="left__btn">
            <a :href="project.url" class="btn btn--sm btn--tertiary">
              <p>Source Code</p>
            </a>
          </div>
        </div>

        <div class="right">
          <img :src="project.img" alt="" class="right__img" />
        </div>
      </div>
    </div>
    <div class="col-md-6" v-for="project2 in projectList2" v-bind:key="project2.id">
      <div class="card card--small">
        <div class="text">
          <h3>{{ project2.name }}</h3>
          <p class="text-md">{{ project2.desc }}</p>
        </div>
        <div class="btn-wrap">
          <a :href="project2.url" class="btn btn--sm btn--tertiary">
            <p>Source Code</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/styles.scss';

.project-list {
  --bs-gutter-x: 20px;
  --bs-gutter-y: 20px;

  .card {
    background-color: transparent;
    background-image: $gradient-primary-thin;
    color: $white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: toRem(24);
    padding: toRem(24);

    &--big {
      justify-content: space-between;
      flex-direction: row;
      align-items: center;

      .left {
        width: 40%;
        display: flex;
        flex-direction: column;
        gap: toRem(24);
        padding: toRem(24);

        &__text {
          display: flex;
          flex-direction: column;
          gap: toRem(16);
        }

        &__btn {
          width: fit-content;
        }
      }
      .right {
        width: 60%;
        height: 308px;
        overflow: hidden;
        margin-top: -24px;
        margin-bottom: -24px;

        img {
          width: auto;
          height: 100%;
        }
      }
    }

    &--small {
      display: flex;
      flex-direction: column;
      gap: toRem(24);
      padding: toRem(24);

      .text {
        display: flex;
        flex-direction: column;
        gap: toRem(16);
      }
    }
  }

  :nth-child(2) {
    > * {
      flex-direction: row-reverse;
    }
  }
}
</style>
