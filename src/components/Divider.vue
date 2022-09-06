<template>
  <hr :class="cls" />
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";

const cls = ref([]);

const props = defineProps({
  icon: Boolean,
  small: Boolean,
  vertical: Boolean,
});

if (props.icon) cls.value.push(`uk-divider-${props.icon}`);
if (props.small) cls.value.push(`uk-divider-${props.small}`);
if (props.vertical) cls.value.push(`uk-divider-${props.vertical}`);
</script>
