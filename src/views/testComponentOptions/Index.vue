<script >
export default {
  name: 'testComponentOptions',
  data() {
    return {
      a: 1,
      b: 2
    }
  },
  mehtods: {
    changeA() {
      this.a = this.a + 1;
    }
  }
}

</script>

<template>
<div>{{ a }}</div>
<div @click="changeA">a + 1</div>
</template>

<style scoped>

</style>