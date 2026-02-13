<template>
    <div>
<img :src="item.image" alt=""></img>
<h2>{{ item.name }}</h2>
<h3>{{ item.price }}</h3>
<button>Scam yourself</button>
    </div>
</template>

<script setup>
defineProps({
    item:{
        type: Object,
        requires: true
    }
})
</script>

<style scoped>
div{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    border: 5px solid black;
    margin-bottom: 20px;
    
}
.container {
  display: flex;
  width: 80vw;
  margin: 20px auto;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
}
.card {
  border: 100px solid #000000;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 6px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>