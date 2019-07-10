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

<style lang="scss" scoped>
p {
  color: red;
}
</style>
