<template>
  <component :is="routerPath ? 'router-link' : 'router-link'" :to="routerPath" :class="btn">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { defineProps, Ref, ref } from "vue";

const btn: Ref = ref(["uk-button"]);
const props = defineProps({
  routerPath: {
    type: String,
  },
  size: {
    type: String,
    default: () => "",
  },
  type: {
    type: String,
    default: () => "",
  },
  pill: {
    type: Boolean,
    default: () => false,
  },
  rounded: {
    type: Boolean,
    default: () => false,
  },
});

if (
  ["default", "primary", "secondary", "danger", "text", "link"].includes(
    props.type
  )
) {
  btn.value.push(`uk-button-${props.type}`);
}

if (["small", "large"].includes(props.size)) {
  btn.value.push(`uk-button-${props.size}`);
}

if (props.pill) btn.value.push(`uk-border-pill`);
else if (props.rounded) btn.value.push(`uk-border-rounded`);
</script>

<style scoped></style>
