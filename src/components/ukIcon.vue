<template>
  <component :is="dynamicIcon" />
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, defineProps } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const dynamicIcon = computed(() => {
  const name = props.name;
  return defineAsyncComponent(() => import(`../images/icons/${name}.vue`));
});
</script>

<style scoped></style>
