<template>
    <div>
      <h1>Expensive Furniture</h1>
      <h2>buy my overpriced products plz</h2> 
      <StoreCard v-for="item in items" :key="items.name" :item="item"></StoreCard>
    </div>
</template>

<script setup>
import StoreCard from '@/components/StoreCard.vue';
const items = [
    {
    name: "Sofa",
    price: 508083.99,
    image: ""
  },
  {
    name: "Dining Table",
    price: 431824.99,
    image: ""
  },
  {
    name: "Office Chair",
    price: 853795.99,
    image: ""
  },
  {
    name: "Queen Bed Frame",
    price: 96124.99,
    image: ""
  },
  {
    name: "Bookshelf",
    price: 8622.99,
    image: ""
  },
  {
    name: "Coffee Table",
    price: 117079.99,
    image: ""
  },
  {
    name: "Wardrobe",
    price: 230143.99,
    image: ""
  },
  {
    name: "Recliner",
    price: 467500.99,
    image: ""

}]
</script>

<style scoped>
div {
  padding: 16px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}
h2 {
  text-align: center;
  margin-bottom: 20px;
}
</style>