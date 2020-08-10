<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters</h1>
        <p>{{text | uppercase | lowercase}}</p>
        <hr />
        <input type="text" v-model="filterText" />
        <ul>
          <li :key="item" v-for="item in filteredFruits">{{item}}</li>
        </ul>
        <hr />
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
import List from "./List.vue";
import { fruitMixin } from "./fruitMixin";

export default {
  data() {
    return {
      text: "Hello there",
    };
  },
  filters: {
    //local filters
    uppercase(value) {
      return value.toUpperCase();
    },
  },
  mixins: [fruitMixin],
  components: {
    appList: List,
  },
};
</script>

<style>
</style>
