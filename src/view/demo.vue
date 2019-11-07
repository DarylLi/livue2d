<template>
  <div class='mainPanel'>
  <div class='live2dFrame'>
  	<div class='header'>live2d 2.0</div>
	<live2dV2></live2dV2>
  </div>
  <div class='live2dFrame'>
  	<div class='header'>live2d 3.0</div>
	<live2dV3></live2dV3>
  </div>
  </div>
</template>
<script>
// import liveStart from './js/live2d-link.js'
import live2dV2 from '@/components/l2d/live2d'
import live2dV3 from '@/components/l2d/live2d-3'
export default {
  name: 'l2d',
  data() {
    return {
      message_Path: '../',
      home_Path: 'https://haremu.com/'
    }
  },
  components: {
	live2dV2,
	live2dV3
  },
  // computed: {
  //   ...mapGetters(['admins', 'cruds', 'mode', 'sideShow', 'curUser'])
  // },
  created() {
  },
  mounted() {
  },
  methods: {
  }
}

</script>
<style rel="stylesheet/scss" lang="scss">
	.mainPanel{
		width:70%;
		margin:auto;
		display:flex;
		justify-content:space-between;
		position:relative;
		.live2dFrame{
			.header{
				font-size:16px;
			}
		}
	}
</style>
