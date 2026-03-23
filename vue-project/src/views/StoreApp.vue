<template>
  <div class="container">
    <h1>Expensive Furniture</h1>
    <h2>buy my overpriced products plz</h2> 

    <StoreCard
      v-for="item in items"
      :key="item.name"
      :item="item"
      @add-to-cart="addToCart"
    />

    <div class="cart">
      <h2>Cart</h2>

      <div v-for="(item, index) in cart" :key="index">
        {{ item.name }} - ${{ item.price }}
      </div>

      <h3>Total: ${{ total }}</h3>
    </div>
  </div>
</template>

<script setup>
import StoreCard from '@/components/StoreCard.vue'
import { ref, computed } from 'vue'

const items = ref([
  {
    name: "Sofa",
    price: 508083.99,
    image: "https://m.media-amazon.com/images/I/81mWxd0a8ZL._AC_.jpg",
  },
  {
    name: "Dining Table",
    price: 431824.99,
    image: "https://i5.walmartimages.com/asr/370cc94f-fe62-4333-8d69-40137395f1f2.6a0063a7afc8b196b60be6e3b8a47a88.jpeg",
  },
  {
    name: "Office Chair",
    price: 853795.99,
    image: "https://m.media-amazon.com/images/I/81njuidrYsL._AC_SL1500_.jpg",
  },
  {
    name: "Queen Bed Frame",
    price: 96124.99,
    image: "https://i5.walmartimages.com/seo/Queen-Bed-Frame-HAIIDE-Queen-Size-Platform-Bed-Frame-with-Upholstered-Headboard-and-Strong-Wooden-Slats-Dark-Grey_a8629ad9-e2a6-4e53-876d-a4bbfbdc2e55.e976bb9cb2fa862cf774ca26f7ff9bf3.jpeg",
  },
  {
    name: "King Bed Frame",
    price: 85025323.99,
    image:"https://m.media-amazon.com/images/I/91gYbnaqZQL._AC_.jpg",
  },
  {
    name: "Bookshelf",
    price: 8622.99,
    image: "https://m.media-amazon.com/images/I/81WcJZtuMOL._AC_SL1500_.jpg",
  },
  {
    name: "Coffee Table",
    price: 117079.99,
    image: "https://i.etsystatic.com/26066868/r/il/8acecd/2785715284/il_fullxfull.2785715284_lbfi.jpg",
  },
  {
    name: "Wardrobe",
    price: 230143.99,
    image: "https://www.centuryply.com/assets/img/blog/30-11-22/Blog-24.jpg",
  },
  {
    name: "Recliner",
    price: 467500.99,
    image: "https://i5.walmartimages.com/asr/1c851bb2-4a98-4755-a399-ed9326577c02.e1dd91cef583e3f2699adb89fe021440.jpeg",
  }
])

const cart = ref([])

function addToCart(item) {
  cart.value.push(item)
}

const total = computed(() => {
  return cart.value.reduce((sum, item) => sum + item.price, 0)
})
</script>

<style scoped>
.container {
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

h1 {
  width: 100%;
  text-align: center;
  font-size: 100px;
}

h2{
  width: 100%;
  text-align: center;
}
</style>