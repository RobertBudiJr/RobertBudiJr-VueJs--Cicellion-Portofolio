<script setup>
import { ref } from 'vue';

defineProps({
  skill: String,
});

const skillList = ref([{ name: 'Vue JS' }, { name: 'HTML5' }, { name: 'CSS' }, { name: 'JavaScript' }, { name: 'Sass' }, { name: 'JQuery' }, { name: 'Git' }, { name: 'Java' }]);
</script>

<template>
  <div class="row gx-1 gy-1 label-wrap">
    <div class="col-lg-3 col-md-6" v-for="skill in skillList" v-bind:key="skill.name">
      <div class="label label--skills text-sm text-sm--md" v-motion-pop-visible>
        {{ skill.name }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/styles.scss';

.label-wrap {
  --bs-gutter-x: 24px !important;
  --bs-gutter-y: 24px !important;
  padding: 0 toRem(80);

  @include media-breakpoint-down(md) {
    padding: 0;
  }

  .label--skills {
    padding: toRem(4) toRem(8);
    color: $subtext;
    border-radius: 5px;
    background: $gradient-primary-thin;
    cursor: default;
    text-align: center;
  }
}
</style>
