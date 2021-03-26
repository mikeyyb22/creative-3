<template>
<div>
  <Cart :cards="cart" />
</div>
</template>

<script>
import Cart from "../components/Cart.vue"
export default {
  name: 'Buy',
  components: {
    Cart
  },
  data() {
    return {
    }
  },
  computed: {
    cart() {
      return this.$root.$data.cart;
    }
  },
  methods: {
  }
}
</script>
