<template>
  <div
    :class="cls"
    :style="{ display: open ? openStyle : '' }"
    @click.self="onBgClose"
  >
    <div
      class="uk-modal-dialog"
      :class="{ 'uk-modal-body': !extended, 'uk-margin-auto-vertical': center }"
    >
      <button
        class="uk-icon uk-close"
        :class="{
          'uk-modal-close-outside': closeOutside,
          'uk-modal-close-default': !closeOutside,
        }"
        type="button"
        @click="$emit('update:modelValue', false)"
      >
        <uk-icon name="close" />
      </button>
      <slot name="title" v-bind:title="title">
        <div :class="{ 'uk-modal-header': extended }">
          <h2 class="uk-modal-title" v-if="!!title">{{ title }}</h2>
        </div>
      </slot>
      <div :class="{ 'uk-modal-body': extended, 'uk-overflow-auto': extended }">
        <slot />
      </div>
      <div :class="{ 'uk-modal-footer': extended }" v-if="footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ukIcon from "./ukIcon";
import {
  defineProps,
  defineEmits,
  Ref,
  ref,
  watch,
  onMounted,
  onUnmounted,
} from "vue";
import { useHotKeys } from "@/utils/hotkeys";

const props = defineProps({
  modelValue: Boolean,
  title: String,
  extended: Boolean,
  footer: Boolean,
  closeOutside: Boolean,
  center: Boolean,
  bgClose: {
    type: Boolean,
    default: () => true,
  },
  escClose: {
    type: Boolean,
    default: () => true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const cls: Ref = ref(["uk-modal"]);
const open: Ref = ref(false);
const openStyle: Ref = ref("block");
const { hotKeys, runHotKeys } = useHotKeys();

if (props.center) openStyle.value = "flex";

const onBgClose = () => {
  if (props.bgClose) emit("update:modelValue", false);
};

hotKeys.value.push({
  keys: ["Escape"],
  callback: (event: any) => {
    event.preventDefault();
    if (props.escClose) emit("update:modelValue", false);
  },
});

const onOpen = () => {
  document.addEventListener("keydown", runHotKeys);
};
const onClose = () => {
  document.removeEventListener("keydown", runHotKeys);
};

watch(
  () => props.modelValue,
  (value) => {
    if (value) {
      cls.value.push("uk-togglabe-enter");
      open.value = props.modelValue;
      setTimeout(() => {
        cls.value.push("uk-open");
        cls.value.splice(
          cls.value.findIndex((el: string) => el === "uk-togglabe-enter"),
          1
        );
      }, 100);
      onOpen();
    } else {
      cls.value = ["uk-modal", "uk-togglabe-leave"];
      setTimeout(() => {
        open.value = props.modelValue;
        cls.value = ["uk-modal"];
      }, 300);
      onClose();
    }
  }
);
</script>

<style scoped></style>
