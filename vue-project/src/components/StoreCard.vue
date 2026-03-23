<template>
  <div class="card">
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

<style scoped>
div{
    display: flex;
    height: fit-content;
    flex-direction: column;
    align-items: center;
    width: 300px;
    border: 5px solid black;
    margin-bottom: 20px;  
}

button{
    margin-bottom: 40px;
}

img{
    width:300px;
    height: 300px;
}

.card{
  flex-direction: grid,
}
</style>