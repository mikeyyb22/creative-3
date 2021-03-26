<template>
<div class="wrapper">
  <div class="cards">
  <h2 v-if="this.$root.$data.cart.length === 0">[Cart is Empty.]</h2>
    <div class="card" v-for="card in cards" :key="card.id">
      <div class="info">
        <h1>{{card.name}}</h1>
        <p>{{card.set}}</p>
      </div>
      <div class="image">
        <img :src="'/images/'+card.image">
      </div>
      <div class="price">
        <button class="auto" v-on:click="removeFromCart(card)">Remove from Cart</button>
        <h2>Ungraded Price: ${{card.priceungraded}}</h2><button class="auto" v-on:click="addToPriceungraded(card)">Add to Cart</button>
        <h2>PSA Grade 10 Price: ${{card.pricegrade10}}</h2><button class="auto" v-on:click="addToPrice10(card)">Add to Cart</button>
        <h2>PSA Grade 9 Price: ${{card.pricegrade9}}</h2><button class="auto" v-on:click="addToPrice9(card)">Add to Cart</button>
        <h2>PSA Grade 8 Price: ${{card.pricegrade8}}</h2><button class="auto" v-on:click="addToPrice8(card)">Add to Cart</button>
        <h2>PSA Grade 7 Price: ${{card.pricegrade7}}</h2><button class="auto" v-on:click="addToPrice7(card)">Add to Cart</button>
        <h2>PSA Grade 6 Price: ${{card.pricegrade6}}</h2><button class="auto" v-on:click="addToPrice6(card)">Add to Cart</button>
      </div>
      <div class="totalPrice">Total Price: ${{card.total}}</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Cart',
  props: {
    cards: Array,
    cart: Array,
  },
  methods: {
    addToPrice10(card) {
      if (card.pricegrade10 === "N/A") {
        return false;
      }
      card.total = card.total + card.pricegrade10;
      card.total = Math.round(card.total * 100) / 100;
      return card.total;
    },
    addToPrice9(card) {
      if (card.pricegrade9 === "N/A") {
        return false;
      }
      card.total = card.total + card.pricegrade9;
      card.total = Math.round(card.total * 100) / 100;
      return card.total;
    },
    addToPrice8(card) {
      if (card.pricegrade8 === "N/A") {
        return false;
      }
      card.total = card.total + card.pricegrade8;
      card.total = Math.round(card.total * 100) / 100;
      return card.total;
    },
    addToPrice7(card) {
      if (card.pricegrade7 === "N/A") {
        return false;
      }
      card.total = card.total + card.pricegrade7;
      card.total = Math.round(card.total * 100) / 100;
      return card.total;
    },
    addToPrice6(card) {
      if (card.pricegrade6 === "N/A") {
        return false;
      }
      card.total = card.total + card.pricegrade6;
      card.total = Math.round(card.total * 100) / 100;
      return card.total;
    },
    addToPriceungraded(card) {
      if (card.priceungraded === "N/A") {
        return false;
      }
      card.total = card.total + card.priceungraded;
      card.total = Math.round(card.total * 100) / 100;
      return card.total;
    },
    removeFromCart(card) {
      this.$root.$data.cart.splice(this.$root.$data.cart.indexOf(card), 1);
    }
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #F2921D;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: inline;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
