<template>
  <div>
    <uk-container small>
      <uk-alert type="danger" title="Error">Some error with program</uk-alert>
      <uk-alert type="warning" title="Opps">Something strange happend</uk-alert>
      <uk-alert type="success" title="Ok">Saved</uk-alert>
      <button @click="modal = !modal">open</button>
      <uk-modal v-model="modal"> test </uk-modal>
    </uk-container>
  </div>
</template>

<script setup lang="ts">
import ukContainer from "./components/Container";
import ukAlert from "./components/Alert";
import ukModal from "./components/Modal";
import { ref } from "vue";

const modal = ref(false);
</script>

<style>
@import "uikit/dist/css/uikit.css";
</style>
