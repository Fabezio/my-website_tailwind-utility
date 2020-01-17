<template lang="pug">
.container
  .timer.float-right
    span.minute {{ minutes }}
    span :
    span.seconds {{ seconds }}
  .controls
    .start(v-if='!timer', @click='startTimer')
      i(data-feather='play')
    .pause(v-if='timer', @click='stopTimer')
      i(data-feather='square')
    .stop(v-if='resetButton', @click='resetTimer')
      i(data-feather='rotate-cw')
    .edit(v-if='!timer', @click='editTimer')
      i(data-feather='edit-2')
  .input
    input(type='text', v-if='edit')

</template>

<script>
export default {
  data() {
    return {
      timer: null,
      totalTime: 25 * 60,
      resetButton: false,
      title: 'Countdown to rest time!',
      edit: false
    }
  },
  computed: {
    minutes() {
      const minutes = Math.floor(this.totalTime / 60)
      return this.padTime(minutes)
    },
    seconds() {
      const seconds = this.totalTime - this.minutes * 60
      return this.padTime(seconds)
    }
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => this.countdown(), 1000) // 1000ms = 1 second
      this.resetButton = true
    },
    stopTimer() {
      clearInterval(this.timer)
      this.timer = null
      this.resetButton = true
    },
    resetTimer() {
      this.totalTime = 25 * 60
      clearInterval(this.timer)
      this.timer = null
      this.resetButton = false
    },
    editTimer() {
      this.edit = true
    },
    padTime(time) {
      return (time < 10 ? '0' : '') + time
    },
    countdown() {
      this.totalTime--
    }
  }
}
</script>

<style scoped></style>
