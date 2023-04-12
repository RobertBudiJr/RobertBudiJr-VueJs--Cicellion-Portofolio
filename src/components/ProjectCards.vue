<script>
import { useProjectStore } from '@/store/projects';
import VLazyImage from 'v-lazy-image';

export default {
  setup() {
    const projectStore = useProjectStore();

    return {
      dataProject: projectStore.data,
      dataProject2: projectStore.data2,
    };
  },
  props: {
    classProp: {
      type: String,
      default: '',
    },
  },
  components: {
    VLazyImage,
  },
};
</script>

<template>
  <div class="row g-1 project-list" :class="classProp">
    <div class="col-md-12 list-big" v-for="item in dataProject" v-bind:key="item.id">
      <div class="card card--big" v-motion-fade-visible>
        <div class="left">
          <div class="left__text">
            <h3>{{ item.name }}</h3>
            <p class="text-md">{{ item.desc }}</p>
          </div>
          <div class="left__btn">
            <a :href="item.url" class="btn btn--sm btn--tertiary" target="_blank">
              <p>Source Code</p>
            </a>
          </div>
        </div>
        <div class="right">
          <!-- <img class="right__img right__img--up" v-for="index in 2" :key="index" :src="item.imgUnload" :src-placeholder="item.img" :alt="item.name" /> -->
          <v-lazy-image class="right__img right__img--up" v-for="index in 2" :key="index" :src="item.img" :src-placeholder="item.imgUnload" :alt="item.name" />
        </div>
      </div>
    </div>
    <div class="col-md-6 list-small" v-for="item2 in dataProject2" v-bind:key="item2.id">
      <div class="card card--small" v-motion-fade-visible>
        <div class="text">
          <h3>{{ item2.name }}</h3>
          <p class="text-md">{{ item2.desc }}</p>
        </div>
        <div class="btn-wrap">
          <a :href="item2.url" class="btn btn--sm btn--tertiary" target="_blank">
            <p>Source Code</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';

.project-list {
  --bs-gutter-x: 20px;
  --bs-gutter-y: 20px;

  &--short {
    .list-big:nth-child(-n + 2) {
      display: none;
    }
    .list-small:nth-last-child(-n + 6) {
      display: none;
    }

    .list-big:nth-child(even) {
      .card--big {
        flex-direction: row-reverse;
      }
    }
  }

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
        flex-direction: column-reverse !important;
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
        display: flex;
        gap: toRem(20);

        @include media-breakpoint-down(lg) {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0;
        }

        @include media-breakpoint-down(md) {
          display: none;
        }

        img {
          width: 50%;
          height: auto;
          object-fit: cover;
          object-position: center top;
        }

        img:nth-child(2) {
          object-position: center bottom;
        }
      }
    }

    &--small {
      display: flex;
      flex-direction: column;
      gap: toRem(24);
      padding: toRem(24);
      height: 100%;
      justify-content: space-between;

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
