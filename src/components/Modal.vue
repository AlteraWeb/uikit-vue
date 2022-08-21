<template>
  <div class="uk-modal uk-open" :style="{ display: modelValue ? 'block' : '' }">
    <div class="uk-modal-dialog uk-modal-body">
      <h2 class="uk-modal-title">Headline</h2>
      <slot />
      <p class="uk-text-right">
        <button
          class="uk-button uk-button-default uk-modal-close"
          type="button"
          @click="$emit('update:modelValue', false)"
        >
          Cancel
        </button>
        <button class="uk-button uk-button-primary" type="button">Save</button>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  modelValue: Boolean,
});
</script>

<style scoped></style>
