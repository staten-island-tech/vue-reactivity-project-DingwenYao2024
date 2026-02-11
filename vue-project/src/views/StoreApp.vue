<template>
    <div>
    </div>
</template>

<script setup>
import {ref} from `vue`
import StoreCard from '@/components/StoreCard.vue';
const items = ref([
    {
    name: "Sofa",
    price: 799.99,
    image: ""
  },
  {
    name: "Dining Table",
    price: 499.99,
    image: ""
  },
  {
    name: "Office Chair",
    price: 149.99,
    image: ""
  },
  {
    name: "Queen Bed Frame",
    price: 399.99,
    image: ""
  },
  {
    name: "Bookshelf",
    price: 129.99,
    image: ""
  },
  {
    name: "Coffee Table",
    price: 89.99,
    image: ""
  },
  {
    name: "Wardrobe",
    price: 599.99,
    image: ""
  },
  {
    name: "Recliner",
    price: 349.99,
    image: ""

}])
</script>

<style scoped>
div {
  padding: 16px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}
.container {
  display: flex;
  width: 80vw;
  margin: 20px auto;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.card {
  border: 1px solid #ccc;
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