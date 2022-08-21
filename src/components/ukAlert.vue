<template>
  <div :class="cls" v-if="!closed">
    <slot name="close">
      <a class="uk-alert-close" v-if="!noClose" @click="closed = true">
        <uk-icon name="close" />
      </a>
    </slot>
    <slot name="title">
      <h3 v-if="title">{{ title }}</h3>
    </slot>
    <slot />
  </div>
</template>

<script setup lang="ts">
import UkIcon from "./ukIcon";
import { defineProps, ref } from "vue";

const cls = ref(["uk-alert"]);
const closed = ref(false);
const props = defineProps({
  title: {
    type: String,
    default: () => "",
  },
  noClose: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: () => "",
  },
});

if (["primary", "warning", "danger", "success"].includes(props.type)) {
  cls.value.push(`uk-alert-${props.type}`);
}
</script>
