<template>
<div class="wrapper">
  <div class="cards">
    <div class="card" v-for="card in cards" :key="card.id">
      <div class="info">
        <h1>{{card.name}}</h1>
        <p>{{card.set}}</p>
      </div>
      <div class="image">
        <img :src="'/images/'+card.image">
      </div>
      <div class="price">
        <h2>${{card.priceungraded}}</h2>
        <router-link to="/rating">
          <div class="menu-item">
            <button class="auto" v-on:click="rateCard(card)">Add Grade</button>
          </div>
        </router-link>
        <router-link to="/buy">
          <div class="menu-item">
            <button class="auto" v-on:click="buyCard(card)">Buy Card</button>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CardList',
  props: {
    cards: Array,
  },
  methods: {
    buyCard(card) {
      let exist = false;
      this.$root.$data.cart.forEach(item => {
        if (item.id == card.id) {
            exist = true;
        }
      });
      if (!exist) {
        card.quantity = 1;
        this.$root.$data.cart.push(card);
      }
      else {
        return;
      }
    },
    rateCard(card) {
      let exist = false;
      this.$root.$data.rate.forEach(item => {
        if (item.id == card.id) {
            exist = true;
        }
      });
      if (!exist) {
        card.quantity = 1;
        this.$root.$data.rate.push(card);
      }
      else {
        return;
      }
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.cards {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.card img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.card .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #CC0000;
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
  display: flex;
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
