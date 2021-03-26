<template>
<div class="wrapper">
  <div class="cards">
  <h2 v-if="this.$root.$data.rate.length === 0">[No Card to Rate.]</h2>
    <div class="card" v-for="card in cards" :key="card.id">
      <div class="info">
        <h1>{{card.name}}</h1>
        <p>{{card.set}}</p>
      </div>
      <div class="image">
        <img :src="'/images/'+card.image">
      </div>
      <div class="price">
        <h2>{{card.price}}</h2>
        <button class="auto" v-on:click="removeFromCart(card)">Stop Rating</button><br>
        <h2>Average Ungraded Price: ${{card.priceungraded}}</h2><h3 class="auto">Update (Press Enter when done)</h3>
        <input name="newUngradedPrice" type="number" v-on:keyup="updatePriceungraded(card)">
        <h2>Average PSA Grade 10 Price: ${{card.pricegrade10}}</h2><h3 class="auto">Update (Press Enter when done)</h3>
        <input name="new10Price" type="number" v-on:keyup="updatePrice10(card)">
        <h2>Average PSA Grade 9 Price: ${{card.pricegrade9}}</h2><h3 class="auto">Update (Press Enter when done)</h3>
        <input name="new9Price" type="number" v-on:keyup="updatePrice9(card)">
        <h2>Average PSA Grade 8 Price: ${{card.pricegrade8}}</h2><h3 class="auto">Update (Press Enter when done)</h3>
        <input name="new8Price" type="number" v-on:keyup="updatePrice8(card)">
        <h2>Average PSA Grade 7 Price: ${{card.pricegrade7}}</h2><h3 class="auto">Update (Press Enter when done)</h3>
        <input name="new7Price" type="number" v-on:keyup="updatePrice7(card)">
        <h2>Average PSA Grade 6 Price: ${{card.pricegrade6}}</h2><h3 class="auto">Update (Press Enter when done)</h3>
        <input name="new6Price" type="number" v-on:keyup="updatePrice6(card)">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Rate',
  props: {
    cards: Array,
    rate: Array,
  },
  methods: {
    removeFromCart(card) {
      this.$root.$data.rate.splice(this.$root.$data.rate.indexOf(card), 1);
    },
    updatePriceungraded(card) {
      if (card.priceungraded === "N/A") {
        card.priceungraded = 0;
        card.count = 0;
      }
      else {
        let upgradedPrice = document.getElementsByName("newUngradedPrice")[0].value;
        var a = parseInt(upgradedPrice);
        if (event.key == "Enter") {
        card.priceungraded = (card.priceungraded * card.count);
        card.count++;
        card.priceungraded = (card.priceungraded + a) / card.count;
        card.priceungraded = Math.round(card.priceungraded * 100) / 100;
        return card.priceungraded;
        }
      }
    },
    updatePrice10(card) {
      if (card.pricegrade10 === "N/A") {
        card.pricegrade10 = 0;
        card.count = 0;
      }
      else {
        let upgradedPrice = document.getElementsByName("new10Price")[0].value;
        var a = parseInt(upgradedPrice);
        if (event.key == "Enter") {
        card.pricegrade10 = (card.pricegrade10 * card.count);
        card.count++;
        card.pricegrade10 = (card.pricegrade10 + a) / card.count;
        card.pricegrade10 = Math.round(card.pricegrade10 * 100) / 100;
        return card.pricegrade10;
        }
      }
    },
    updatePrice9(card) {
      if (card.pricegrade9 === "N/A") {
        card.pricegrade9 = 0;
        card.count = 0;
      }
      else {
        let upgradedPrice = document.getElementsByName("new9Price")[0].value;
        var a = parseInt(upgradedPrice);
        if (event.key == "Enter") {
        card.pricegrade9 = (card.pricegrade9 * card.count);
        card.count++;
        card.pricegrade9 = (card.pricegrade9 + a) / card.count;
        card.pricegrade9 = Math.round(card.pricegrade9 * 100) / 100;
        return card.pricegrade9;
        }
      }
    },
    updatePrice8(card) {
      if (card.pricegrade8 === "N/A") {
        card.pricegrade8 = 0;
        card.count = 0;
      }
      else {
        let upgradedPrice = document.getElementsByName("new8Price")[0].value;
        var a = parseInt(upgradedPrice);
        if (event.key == "Enter") {
        card.pricegrade8 = (card.pricegrade8 * card.count);
        card.count++;
        card.pricegrade8 = (card.pricegrade8 + a) / card.count;
        card.pricegrade8 = Math.round(card.pricegrade8 * 100) / 100;
        return card.pricegrade8;
        }
      }
    },
    updatePrice7(card) {
      if (card.pricegrade7 === "N/A") {
        card.pricegrade7 = 0;
        card.count = 0;
      }
      else {
        let upgradedPrice = document.getElementsByName("new7Price")[0].value;
        var a = parseInt(upgradedPrice);
        if (event.key == "Enter") {
        card.pricegrade7 = (card.pricegrade7 * card.count);
        card.count++;
        card.pricegrade7 = (card.pricegrade7 + a) / card.count;
        card.pricegrade7 = Math.round(card.pricegrade7 * 100) / 100;
        return card.pricegrade7;
        }
      }
    },
    updatePrice6(card) {
      if (card.pricegrade6 === "N/A") {
        card.pricegrade6 = 0;
        card.count = 0;
      }
      else {
        let upgradedPrice = document.getElementsByName("new6Price")[0].value;
        var a = parseInt(upgradedPrice);
        if (event.key == "Enter") {
        card.pricegrade6 = (card.pricegrade6 * card.count);
        card.count++;
        card.pricegrade6 = (card.pricegrade6 + a) / card.count;
        card.pricegrade6 = Math.round(card.pricegrade6 * 100) / 100;
        return card.pricegrade6;
        }
      }
    },
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
