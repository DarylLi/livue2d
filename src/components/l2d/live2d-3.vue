<template>
  <div class='l2dPanel'>
    <div id="live2d3">
		<canvas></canvas>
	</div>
  </div>
</template>
<script>
import './css/live2d.css'
// import liveStart from './js/3.0/pixi/pixi.min.js'
import './js/3.0/pixi/pixi.min.js'
import Live2DCubismCore from './js/3.0/core/live2dcubismcore.js'
import LIVE2DCUBISMFRAMEWORK from './js/3.0/framework/live2dcubismframework.js'
import loadModel from './js/3.0/loadModel.js'

export default {
  name: 'l2d',
  data() {
    return {
      message_Path: '../',
      charData:{
	    "Gneisenau (Nightmarish Succubus)":"genaisennao_2",
	    "Surcouf (Shopping Time!)":"xukufu_2",
	    "Shoukaku (Dancing Crane in the Wind)":"xianghe_2",
	    "Zara (Poolside Coincidence)":"zhala_2",
	    "Black Prince (White Princess)":"heitaizi_2",
	    "Vampire (Princess of the Night)":"xixuegui_4",
	    "Honolulu (Festival Date)":"huonululu_5",
	    "Sirius (Midsummer Seirios)":"tianlangxing_3",
	    "Bismarck (Majesty of the Ironblood)":"bisimai_2",
	    "Ark Royal (Banquet Guardian)":"huangjiafangzhou_3",
	    "Taihou (Forbidden Feast)":"dafeng_2",
	    "Atago (Midsummer March)":"aidang_2",
	    "Eldridge (New Year's Handholding)":"aierdeliqi_4",
	    "Emile Bertin (Côte d'Azur)":"aimierbeierding_2",
	    "Centaur (Undine of the Beach)":"banrenma_2",
	    "Belfast (Iridescent Rose)":"beierfasite_2",
	    "Javelin":"biaoqiang",
	    "Javelin (Beach Picnic!)":"biaoqiang_3",
	    "Fubuki (Music Pixy)":"chuixue_3",
	    "Deutschland (Service Time?!)":"deyizhi_3",
	    "Unicorn (Amusement Park Date)":"dujiaoshou_4",
	    "Dunkerque (Summer Sucré)":"dunkeerke_2",
	    "Honolulu (Summer Accident?!)":"huonululu_3",
	    "Cleveland (Gentry Knight)":"kelifulan_3",
	    "Laffey":"lafei",
	    "Laffey (New Year Rabbit)":"lafei_4",
	    "Ayanami":"lingbo",
	    "Akashi":"mingshi",
	    "Graf Zeppelin (Beachside Urd)":"qibolin_2",
	    "St. Louis (Splendor of Spring)":"shengluyisi_2",
	    "St. Louis (Tipsy Snow)":"shengluyisi_3",
	    "Tai Yuan (Clamorous Tortoise)":"taiyuan_2",
	    "Tirpitz (Snow-melting Summer)":"tierbici_2",
	    "Yukikaze":"xuefeng",
	    "Ibuki (Wish of a Snow Goddess)":"yichui_2",
	    "Z23":"z23",
	    "Z46 (First Summer)":"z46_2"
		},
		charList: []
    }
  },
  created() {
  	this.charList = Object.keys(this.charData).map(e => {
  		let char = {};
  		char[e] = this.charData[e]; 
  		return char
  	})
  },
  mounted() {
	let option = {
		modelName : 'banrenma_2', //live2d model名称
		tag_target : '#live2d3', //渲染dom
		modelWidth : 280, //模型宽度
		modelHight : 450, //模型高度
		scale : 24  //渲染模型的比例			
	}
	loadModel(option)
  }
}

</script>
<style rel="stylesheet/scss" lang="scss">
.l2dPanel {
  width: 300px;
  height: 100%;
}

</style>
