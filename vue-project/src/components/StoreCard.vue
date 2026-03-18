<template>
  <div>
    <img :src="item.image" alt="" />
    <h2>{{ item.name }}</h2>
    <h3>${{ item.price }}</h3>
    <button @click="addToCart">Plz Buy</button>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object
})

const emit = defineEmits(['add-to-cart'])

function addToCart() {
  emit('add-to-cart', props.item)
}
</script>