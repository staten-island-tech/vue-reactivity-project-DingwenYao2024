<template>
    <div>
<h2>{{ items.name }}</h2>
<h3>{{ items.price }}</h3>

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