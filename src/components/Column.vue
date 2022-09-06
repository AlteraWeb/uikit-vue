<template>
  <div :class="cls"><slot /></div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";

const cls = ref([]);

const props = defineProps({
  col: String,
  colS: String,
  colM: String,
  colL: String,
  colXl: String,
  divider: Boolean,
});

if (props.col) cls.value.push(`uk-column-1-${props.col}`);
if (props.colS) cls.value.push(`uk-column-1-${props.colS}@s`);
if (props.colM) cls.value.push(`uk-column-1-${props.colM}@m`);
if (props.colL) cls.value.push(`uk-column-1-${props.colL}@l`);
if (props.colXl) cls.value.push(`uk-column-1-${props.colXl}@xl`);
if (props.divider) cls.value.push(`uk-column-divider`);
</script>

