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
    desc: 'Kuliwisata.id is a web application which function is to explore culinary and tourism in Bali, Indonesia. Made by native HTML, CSS, and JS.',
    url: 'https://github.com/RobertBudiJr/Kuliwisata.id',
  },
  {
    img: './src/assets/img/Project2.png',
    name: 'Ingfo.id',
    desc: 'Ingfo.id is an web application which main function is to provide information about Coivd-19 vaccinations. Made by native HTML, CSS, and JS.',
    url: 'https://github.com/RobertBudiJr/ingfo.id',
  },
]);

const projectList2 = ref([
  {
    name: 'Natours',
    desc: 'Natours is a web application about tour booking. This app is made as study case to learn Saas, HTML, and JS. And to practice various amazing hover effects.',
    url: 'https://github.com/RobertBudiJr/LatFrontEnd-Natours',
  },
  {
    name: 'Meme Generator',
    desc: 'Based on its name, Meme Generator is a web application which generate meme randomly based on data i provide. Made by React JS as study case.',
    url: 'https://github.com/RobertBudiJr/ReactJs-ThirdProject',
  },
]);
</script>

<template>
  <div class="row g-1 project-list">
    <div class="col-md-12" v-for="project in projectList" v-bind:key="project.id">
      <div class="card card--big" v-motion-fade-visible>
        <div class="left">
          <div class="left__text">
            <h3>{{ project.name }}</h3>
            <p class="text-md">{{ project.desc }}</p>
          </div>
          <div class="left__btn">
            <a :href="project.url" class="btn btn--sm btn--tertiary" target="_blank">
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
      <div class="card card--small" v-motion-fade-visible>
        <div class="text">
          <h3>{{ project2.name }}</h3>
          <p class="text-md">{{ project2.desc }}</p>
        </div>
        <div class="btn-wrap">
          <a :href="project2.url" class="btn btn--sm btn--tertiary" target="_blank">
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

      @include media-breakpoint-down(lg) {
        flex-direction: column-reverse;
        justify-content: unset;
      }

      .left {
        width: 40%;
        display: flex;
        flex-direction: column;
        gap: toRem(24);
        padding: toRem(24);

        @include media-breakpoint-down(lg) {
          width: 100%;
        }

        @include media-breakpoint-down(lg) {
          padding: toRem(0);
        }

        &__text {
          display: flex;
          flex-direction: column;
          gap: toRem(16);
        }

        &__btn {
          width: fit-content;

          @include media-breakpoint-down(xs-2) {
            width: 100%;
          }
        }
      }
      .right {
        width: 60%;
        height: 308px;
        overflow: hidden;
        margin-top: -24px;
        margin-bottom: -24px;

        @include media-breakpoint-down(lg) {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @include media-breakpoint-down(md) {
          display: none;
        }

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

      .btn-wrap {
        @include media-breakpoint-down(xs-2) {
          width: 100%;
        }
      }
    }
  }

  :nth-child(2) {
    > * {
      flex-direction: row-reverse;

      @include media-breakpoint-down(lg) {
        flex-direction: column-reverse;
        justify-content: unset;
      }
    }
  }
}
</style>
