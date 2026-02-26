<template>
    <div class="container">
      <h1>Expensive Furniture</h1>
      <h2>buy my overpriced products plz</h2> 
      <StoreCard v-for="item in items" :key="item.name" :item="item"></StoreCard>
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
.container {
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

h1, h2 {
  width: 100%;
  text-align: center;
}
</style>