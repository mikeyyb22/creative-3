<template>
<div>
  <Rate :cards="rate" />
</div>
</template>

<script>
import Rate from "../components/Rate.vue"
export default {
  name: 'Rating',
  components: {
    Rate
  },
  data() {
    return {
    }
  },
  computed: {
    rate() {
      return this.$root.$data.rate;
    }
  },
  methods: {
  }
}
</script>
