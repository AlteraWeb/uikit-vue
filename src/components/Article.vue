<template>
  <div :class="cls">
    <slot name="title">
      <h1 v-if="title" class="uk-article-title">{{ title }}</h1>
    </slot>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineProps, Ref, ref } from "vue";

const cls: Ref = ref([]);
const props = defineProps({
  title: {
    type: String,
    default: () => "",
  },
  type: {
    type: String,
    default: () => "",
  },
});

if (["meta", "lead"].includes(props.type)) {
  cls.value.push(`uk-article-${props.type}`);
} else {
  cls.value.push(`uk-article`);
}
</script>
