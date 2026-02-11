<template>
    <div>
<h2>{{ item.name }}</h2>
<h3>{{ item.price }}</h3>

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
}
</style>