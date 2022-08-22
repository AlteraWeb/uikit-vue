<template>
  <div :class="cls">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, defineProps, PropType } from "vue";
import ColorType from "../types/colors";

const props = defineProps({
  bgColor: {
    type: String as PropType<ColorType>,
    default: () => "",
  },
  xsmall: {
    type: Boolean,
    default: false,
  },
  small: {
    type: Boolean,
    default: false,
  },
  large: {
    type: Boolean,
    default: false,
  },
  xlarge: {
    type: Boolean,
    default: false,
  },
  removeVertical: {
    type: Boolean,
    default: false,
  },
  removeHorizontal: {
    type: Boolean,
    default: false,
  },
});

const cls: Ref = ref(["uk-section"]);
if (props.bgColor) cls.value.push(`uk-section-${props.bgColor}`);

if (props.xsmall) cls.value.push("uk-section-xsmall");
else if (props.small) cls.value.push("uk-section-small");
else if (props.large) cls.value.push("uk-section-large");
else if (props.xlarge) cls.value.push("uk-section-xlarge");
if (props.removeVertical) cls.value.push("uk-padding-remove-vertical");
if (props.removeHorizontal) cls.value.push("uk-padding-remove-horizontal");
</script>

<style scoped></style>
