const vm = new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
  },
  watch: {
    monsterHealth: function () {
      this.checkWin()
    }
  },
  methods: {
    startGame: function () {
      this.gameIsRunning = true
      this.monsterHealth = 100
      this.playerHealth = 100
      this.turns = []
    },
    attack: function () {
      this.playerAttack(3, 10)
      this.monsterAttack()
    },
    specialAttack: function () {
      this.playerAttack(10, 20)
      this.monsterAttack()
    },
    heal: function () {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10
      } else {
        this.playerHealth = 100
      }
      this.trackAction(true, 'Player heals for 10')
      this.monsterAttack()
    },
    giveUp: function () {
      this.gameIsRunning = false
    },
    calcDamage: function (min, max) {
      return Math.floor(Math.random() * (max - min)) + min
    },
    trackAction: function (isPlayer, text) {
      this.turns.unshift({ isPlayer, text })
    },
    monsterAttack: function () {
      const damage = this.calcDamage(5, 12)
      this.playerHealth -= damage
      this.trackAction(false, 'Monster hits Player for ' + damage)
    },
    playerAttack: function (min, max) {
      const damage = this.calcDamage(min, max)
      this.monsterHealth -= damage
      this.trackAction(true, `Player hits Monster ${min === 10 ? 'hard' : ''} for damage`)
    },
    checkWin: function () {
      if (this.monsterHealth <= 0) {
        if (confirm('You won! New Game?')) {
          this.startGame()
        } else {
          this.gameIsRunning = false
        }
        return true
      } else if (this.playerHealth <= 0) {
        if (confirm('You lost! New Game?')) {
          this.startGame()
        } else {
          this.gameIsRunning = false
        }
        return true
      }
      return false
    }
  }
})
