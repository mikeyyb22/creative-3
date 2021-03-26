<template>
  <div>
    <div>
      <h2 style="text-align:center">This website is to help collectors know how much their cards are worth!</h2>
      <h2 style="text-align:center">Click "Add Grade" to add what you bought/sold your graded or ungraded card for!</h2>
      <h2 style="text-align:center">You may also buy individual cards for their average prices.</h2>
      <h3 style="text-align:center">Thank you for your contribution!</h3>
    </div>
    <CardList :cards="cards" />
  </div>
</template>

<script>
import CardList from "../components/CardList.vue"
export default {
  name: 'Home',
  components: {
    CardList
  },
  data() {
    return {
    }
  },
  computed: {
    cards() {
      return this.$root.$data.cards;
    }
  },
}
</script>
