<template lang="pug">
.container
  .float-right
    span.minute {{ date }}
    span :
    span.seconds {{ time }}


</template>

<script>
export default {
  data() {
    return {
      time: '',
      date: '',
      week: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      timerID: '',
      cd: new Date(),
    }
  },
  methods: {
    updateTime() {
      this.time =
        this.zeroPadding(this.cd.getHours(), 2) +
        ':' +
        this.zeroPadding(this.cd.getMinutes(), 2) +
        ':' +
        this.zeroPadding(this.cd.getSeconds(), 2)
      this.date =
        this.zeroPadding(this.cd.getFullYear(), 4) +
        '-' +
        this.zeroPadding(this.cd.getMonth() + 1, 2) +
        '-' +
        this.zeroPadding(this.cd.getDate(), 2) +
        ' ' +
        this.week[this.cd.getDay()]
    },
    zeroPadding(num, digit) {
      let zero = ''
      for (let i = 0; i < digit; i++) {
        zero += '0'
      }
      return (zero + num).slice(-digit)
    },
  },
}
</script>

<style lang="stylus" scoped>
html,
body
	height 100%
body
	background #0f3854
	background radial-gradient(ellipse at center, #0a2e38 0%, #000000 70%)
	background-size 100%
p
	margin 0
	padding 0
#clock
	font-family 'Share Tech Mono', monospace
	color #ffffff
	text-align center
	position absolute
	left 50%
	top 50%
	transform translate(-50%, -50%)
	color #daf6ff
	text-shadow 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0)
</style>
