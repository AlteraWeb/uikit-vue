<template>
  <div :class="cls"><slot /></div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";

const cls = ref(["uk-container"]);

const props = defineProps({
  xsmall: {
    type: Boolean,
    default: () => false,
  },
  small: {
    type: Boolean,
    default: () => false,
  },
  large: {
    type: Boolean,
    default: () => false,
  },
  xlarge: {
    type: Boolean,
    default: () => false,
  },
  expand: {
    type: Boolean,
    default: () => false,
  },
});

if (props.xsmall) cls.value.push(`uk-container-xsmall`);
else if (props.small) cls.value.push(`uk-container-small`);
else if (props.large) cls.value.push(`uk-container-large`);
else if (props.xlarge) cls.value.push(`uk-container-xlarge`);
else if (props.expand) cls.value.push(`uk-container-expand`);
</script>
