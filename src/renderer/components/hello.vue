<template>
  <p>{{ greeting }}, world!!</p>
</template>

<script>
export default {
  data() {
    return { greeting: "Hello" }
  }
}
</script>

<style scoped>
p {
  color: red;
}
</style>
