export const fruitMixin = {
  data () {
    return {
      fruits: ['Apples', 'Banana', 'Mango', 'Melon'],
      filterText: ''
    }
  },
  computed: {
    filteredFruits () {
      return this.fruits.filter((el) => {
        return el.match(this.filterText)
      })
    }
  },
  created () {
    console.log('created')
  }
}
