<template>
    <div>
<img :src="item.image" alt=""></img>
<h2>{{ item.name }}</h2>
<h3>${{ item.price }}</h3>
<button>Plz Buy</button>
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
</style>