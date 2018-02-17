<template>
  <div id="app">
    <div class="score">{{ score }}</div>
    <flashcard :front="question" :back="answer"></flashcard>

    <div v-if="this.$store.state.cardFlipped">
      <button @click="correct">Correct</button>
      <button @click="wrong">Wrong</button>
    </div>
  </div>
</template>

<script>
import flashcard from './components/Flashcard.vue'
export default {
  components: {
    flashcard,
  },
  data () {
    return {
      score: 0,
    }
  },
  computed: {
    question () {
      return this.$store.getters.currentQuestion // handled by vuex
    },
    answer () {
      return this.$store.getters.currentAnswer // handled by vuex
    },
  },
  methods: {
    correct () {
      this.$store.dispatch('correctAnswer') // handled by vuex
      this.score++
    },
    wrong () {
      this.$store.dispatch('wrongAnswer') // handled by vuex
    },
  },
}
</script>
