
<script setup>
import {ref, onMounted, onBeforeUnmount} from "vue";

onMounted(() => startProgress())

onBeforeUnmount(() => endProgress())

const value1 = ref(0);
const interval = ref();
const startProgress = () => {
  interval.value = setInterval(() => {
    let newValue = value1.value + Math.floor(Math.random() * 6) + 1;
    if (newValue >= 100) {
      newValue = 100;
      endProgress()
    }
    value1.value = newValue;
  }, 2000);
};
const endProgress = () => {
  clearInterval(interval.value);
  interval.value = null;
};
</script>
<template>
  <div class="card">
    <ProgressBar :value="value1"/>
    <div class="progress-text">
      <span>Fitting in progress...</span>
      <div class="progress">{{value1}} %</div>
    </div>
  </div>
</template>

