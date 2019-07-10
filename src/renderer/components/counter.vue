<template>
  <div>
    <p>{{ count }}</p>
    <p>
      <button class="button is-primary" @click="increment">+</button>
      <button class="button is-primary" @click="decrement">-</button>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
	    return this.$store.state.count
    }
  },
  methods: {
    increment() {
      this.$store.commit("increment")
    },
    decrement() {
    	this.$store.commit("decrement")
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
