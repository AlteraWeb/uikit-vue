<template>
  <div :class="cls">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";

const cls = ref(["uk-grid"]);

const props = defineProps({
  small: String,
  medium: String,
  large: String,
  collapse: String,
  match: String,
  row: String,
  column: String,
  divider: Boolean,
  child: String,
  childS: String,
  childM: String,
  childL: String,
  childXl: String,
});

if (props.small) cls.value.push(`uk-grid-small`);
else if (props.medium) cls.value.push(`uk-grid-medium`);
else if (props.large) cls.value.push(`uk-grid-large`);
else if (props.collapse) cls.value.push(`uk-grid-collapse`);
else if (props.divider) cls.value.push(`uk-grid-divider`);
else if (props.match) cls.value.push(`uk-grid-match`);
if (props.row) cls.value.push(`uk-grid-row-${props.row}`);
else if (props.column) cls.value.push(`uk-grid-column-${props.column}`);
else if (props.child) cls.value.push(`uk-child-width-${props.child}@s`);
else if (props.childS) cls.value.push(`uk-child-width-${props.childS}@m`);
else if (props.childM) cls.value.push(`uk-child-width-${props.childM}@l`);
else if (props.childL) cls.value.push(`uk-child-width-${props.childL}@xl`);
else if (props.childXl) cls.value.push(`uk-child-width-${props.childXl}@xl`);
</script>
