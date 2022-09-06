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

});

if (props.col) cls.value.push(`uk-width-${props.col}`);
if (props.colS) cls.value.push(`uk-width-${props.colS}@s`);
if (props.colM) cls.value.push(`uk-width-${props.colM}@m`);
if (props.colL) cls.value.push(`uk-width-${props.colL}@l`);
if (props.colXl) cls.value.push(`uk-width-${props.colXl}@xl`);
</script>
