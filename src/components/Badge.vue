<template>
  <span :class="cls">
    {{ count }}
  </span>
</template>

<script setup lang="ts">
import { defineProps, Ref, ref } from "vue";

const cls: Ref = ref(["uk-badge"]);
const props = defineProps({
  count: {
    type: Number,
    default: () => 0,
  },
});
</script>

<style scoped></style>
