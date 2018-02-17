<template>
  <div class="flashcard">
    Front: {{ front }}
    <br>
    Back: {{ back }}
  </div>
</template>

<script>
export default {
  props: {
    front: {
      type: String,
      default: 'default front',
    },
    back: {
      type: String,
      default: 'default back',
    },
  },
}
</script>
