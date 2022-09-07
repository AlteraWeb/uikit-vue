<template>
  <uk-grid small child="auto">
    <uk-width>
      <div class="uk-countdown-number uk-countdown-days">{{ timer.days }}</div>
      <slot name="label-days-out">
        <div
          class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s"
        >
          <slot name="label-days-in">Days</slot>
        </div>
      </slot>
    </uk-width>
    <div class="uk-countdown-separator">{{ separator }}</div>
    <uk-width>
      <div class="uk-countdown-number uk-countdown-hours">
        {{ timer.hours }}
      </div>
      <slot name="label-hours-out">
        <div
          class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s"
        >
          <slot name="label-hours-in">Hours</slot>
        </div>
      </slot>
    </uk-width>
    <div class="uk-countdown-separator">{{ separator }}</div>
    <uk-width>
      <div class="uk-countdown-number uk-countdown-minutes">
        {{ timer.minutes }}
      </div>
      <slot name="label-minutes-out">
        <div
          class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s"
        >
          <slot name="label-minutes-in">Minutes</slot>
        </div>
      </slot>
    </uk-width>
    <div class="uk-countdown-separator">{{ separator }}</div>
    <uk-width>
      <div class="uk-countdown-number uk-countdown-seconds">
        {{ timer.seconds }}
      </div>
      <slot name="label-seconds-out">
        <div
          class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s"
        >
          <slot name="label-seconds-in">Seconds</slot>
        </div>
      </slot>
    </uk-width>
  </uk-grid>
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref } from "vue";
import ukGrid from "@/components/Grid";
import ukWidth from "@/components/Width";

const cls = ref([]);

const props = defineProps({
  days: String,
  hours: String,
  minutes: String,
  seconds: String,
  number: String,
  separator: {
    type: String,
    default: () => ":",
  },
  label: Boolean,
  date: [String, Number],
  titles: Boolean,
});

const timer = ref({
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
});

// функция парсинга времени, чтоб было не 1сек и 1 день,  а 01сек, 01день. и тд
const parseTime = (time: string) => {
  return (parseInt(time) + 100).toString().substr(1); // тут делаем парсинг в чило, посуем 100, переводим в строку, убераем первый символ.
};

// функция с уйкита, я только добавил парсинт на дату
const getTimeSpan = (date: any) => {
  const total = date - Date.now();

  return {
    seconds: parseTime((total / 1000) % 60),
    minutes: parseTime((total / 1000 / 60) % 60),
    hours: parseTime((total / 1000 / 60 / 60) % 24),
    days: parseTime(total / 1000 / 60 / 60 / 24),
  };
};
// когда компонент будет запущен, он запустит интервал в 1сек. и будет менять значение timer
onMounted(() => {
  setInterval(() => {
    timer.value = getTimeSpan(Date.parse(props.date)); // тут меняет значение.
  }, 1000);
});

if (props.days) cls.value.push(`uk-countdown-days`);
if (props.hours) cls.value.push(`uk-countdown-hours`);
if (props.minutes) cls.value.push(`uk-countdown-minutes`);
if (props.seconds) cls.value.push(`uk-countdown-seconds`);
if (props.number) cls.value.push(`uk-countdown-number`);
if (props.label) cls.value.push(`uk-column-label`);
if (typeof Date === "object") {
  cls.value.push(`uk-countdown-${props.date}`);
}
</script>
