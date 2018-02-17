<template>
  <div id="app">
    <div class="score">{{ score }}</div>
    <flashcard :front="title" :back="answer"></flashcard>
  </div>
</template>

<script>
import flashcard from './components/Flashcard.vue'
export default {
  components: {
    flashcard,
  },
  data() {
    return {
      title: 'Sample question', // This will be removed later
      answer: 'Sample answer', // This will be removed later
      score: 0,
    }
  }
}
</script>
