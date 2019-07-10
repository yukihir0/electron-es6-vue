<template>
  <p>{{ greeting }}, world!!</p>
</template>

<script>
export default {
  data() {
    return { greeting: "Goodbye" }
  }
}
</script>

<style lang="scss" scoped>
p {
  color: blue;
}
</style>
