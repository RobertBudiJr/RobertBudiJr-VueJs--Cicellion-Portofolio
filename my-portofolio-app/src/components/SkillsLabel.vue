<script setup>
import { ref } from 'vue';

defineProps({
  skill: String,
});

const skillList = ref([{ name: 'Sass' }, { name: 'HTML5' }, { name: 'CSS' }, { name: 'JavaScript' }, { name: 'Vue JS' }, { name: 'JQuery' }]);
</script>

<template>
  <div class="label-wrap">
    <div class="label label--skills text-sm text-sm--md" v-for="skill in skillList" v-bind:key="skill.name">{{ skill.name }}</div>
  </div>
</template>

<style lang="scss">
@import '../assets/scss/styles.scss';

.label-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: toRem(16);

  @include media-breakpoint-down(md) {
    align-items: center;
    justify-content: center;
  }

  .label--skills {
    padding: toRem(4) toRem(8);
    color: $black;
    border-radius: 5px;
    background: $gradient-secondary;
    width: fit-content;
    cursor: default;
  }
}
</style>
