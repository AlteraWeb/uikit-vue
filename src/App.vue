<template>
  <div>
    <uk-container small>
      <uk-alert type="danger" title="Error">Some error with program</uk-alert>
      <uk-alert type="warning" title="Opps">Something strange happend</uk-alert>
      <uk-alert type="success" title="Ok">Saved</uk-alert>
    </uk-container>
  </div>
</template>

<script setup lang="ts">
import ukContainer from "./components/ukContainer";
import ukAlert from "./components/ukAlert";
</script>

<style>
@import "uikit/dist/css/uikit.css";
</style>
