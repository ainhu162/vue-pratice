<template>
  <div>
    <h3>New Quote</h3>
    <button @click="count++">Increase</button>
    {{count}}
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      count: 0,
    };
  },
};
</script>
<style scoped>
</style>