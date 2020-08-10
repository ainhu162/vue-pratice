<template>
  <div class="row">
    <div class="col-12">
      <h1>Mixins</h1>
      <button @click="fruits.push('Cherry')">Add cherry</button>
      <input type="text" v-model="filterText" />
      <ul>
        <li :key="item" v-for="item in filteredFruits">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { fruitMixin } from "./fruitMixin";
export default {
  mixins: [fruitMixin],
};
</script>

<style>
</style>
