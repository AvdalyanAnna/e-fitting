<script setup>
import {ref} from 'vue';

const quantity = ref(0);
const increaseQuantity = () => quantity.value++;
const decreaseQuantity = () => {
  if (quantity.value > 0) quantity.value--;
};
</script>


<template>
  <div class="fit-btn__bag">
    <Button v-if="quantity === 0" class="fit-btn__bag-btn" label="Add To Cart" @click="quantity = 1"/>
    <div v-else class="add-to-bag">
      <Button
          icon="pi pi-minus"
          class="add-to-bag__btn"
          :disabled="quantity <= 0"
          @click="decreaseQuantity"
      />
      <span class="quantity-display">{{ quantity }}</span>
      <Button
          icon="pi pi-plus"
          class="add-to-bag__btn"
          @click="increaseQuantity"
      />
    </div>
  </div>
</template>
