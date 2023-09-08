<script>
export default {
  props: ['theme'],
  created() {
    for (const item in this.theme) {
      let _name = '--data-' + item;
      document?.querySelector(":root").style.setProperty(_name, this.theme[item]);
    }
  }
}
</script>

<template>
<slot></slot>
</template>

<style scoped>

</style>