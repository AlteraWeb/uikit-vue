<template>
  <uk-countdown date="date: 2022-09-14T11:57:55+00:00">
    <slot />
  </uk-countdown>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";

const cls = ref([]);

const props = defineProps({
  days: String,
  hours: String,
  minutes: String,
  seconds: String,
  number: String,
  separator: String,
  label: Boolean,
  date: [String, Number],
  titles: Boolean,
});

if (props.days) cls.value.push(`uk-countdown-${props.days}`);
if (props.hours) cls.value.push(`uk-countdown-hours`);
if (props.minutes) cls.value.push(`uk-countdown-minutes`);
if (props.seconds) cls.value.push(`uk-countdown-seconds`);
if (props.number) cls.value.push(`uk-countdown-number`);
if (props.separator) cls.value.push(`uk-column-separator`);
if (props.label) cls.value.push(`uk-column-label`);
if (typeof Date === "object") {
  cls.value.push(`uk-countdown-${props.date}`);
}
</script>
