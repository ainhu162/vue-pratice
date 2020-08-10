<template>
  <div>
    <button class="btn btn-primary" @click="increment(100)">Increment</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>

    <hr />
    <button class="btn btn-primary" @click="asyncIncrement({by: 10, duration: 500})">Async Increment</button>
    <button class="btn btn-primary" @click="asyncDecrement">Async Decrement</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  methods: mapActions([
    "increment",
    "decrement",
    "asyncIncrement",
    "asyncDecrement",
  ]),
  // methods: {
  //   increment(by) {
  //     this.$store.dispatch('increment',by)
  //   }
  // },
  // methods: mapMutations(["increment", "decrement"]),
  // increment() {
  //   // this.$emit('updated', 1);
  //   this.$store.commit("increment");
  // },
  // decrement() {
  //   // this.$emit('updated', -1);
  //   this.$store.commit("decrement");
  // },
};
</script>