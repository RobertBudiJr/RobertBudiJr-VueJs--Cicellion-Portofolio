<script setup>
defineProps(['titleMsg']);
</script>

<template>
  <h2 v-motion-slide-visible-once-top>{{ titleMsg }}</h2>
</template>
