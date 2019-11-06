<template>
  <div class='l2dPanel'>
    <div id="landlord">
      <div class="message" style="opacity:0"></div>
      <canvas id="live2d" width="280" height="450" class="live2d"></canvas>
      <div class="hide-button">隐藏</div>
    </div>
  </div>
</template>
<script>
import './css/live2d.css'
// 加载本地model文件使用:
import './js/live2d-local.js'
// 加载外网cdn资源使用:
// import './js/live2d.min.js'
import l2d from './js/message.js'
import messageObj from './js/messageObj'
import model from './model/rfbChristmas/normal/model.json'
export default {
  name: 'l2d',
  data() {
    return {
      message_Path: '../'
    }
  },
  // computed: {
  //   ...mapGetters(['admins', 'cruds', 'mode', 'sideShow', 'curUser'])
  // },
  created() {
  	// liveStart.init()
  },
  mounted() {
    // 本地live2d渲染
    // model.moduleName = 'Bronya'
    model.moduleName = 'rfbChristmas'
    model.rootPath = '/normal/'
    loadliveLocal2d("live2d", model)

    // 外网live2d渲染
    // loadlive2d("live2d", 'https://live2d.fghrsh.net/api/get/?id=1-55')
    
    // this.initTips()
  },
  methods: {
    initTips() {
      let result = messageObj
      $.each(result.mouseover, (index, tips) => {
        $(tips.selector).mouseover(() => {
          var text = tips.text;
          if (Array.isArray(tips.text)) text = tips.text[Math.floor(Math.random() * tips.text.length + 1) - 1];
          text = text.renderTip({ text: $(this).text() });
          this.showMessage(text, 3000);
        });
      });
      $.each(result.click, (index, tips) => {
        $(tips.selector).click(() => {
          var text = tips.text;
          if (Array.isArray(tips.text)) text = tips.text[Math.floor(Math.random() * tips.text.length + 1) - 1];
          text = text.renderTip({ text: $(this).text() });
          this.showMessage(text, 3000);
        });
      });
      // }
      // });
    },
    showMessage(text, timeout) {
      if (Array.isArray(text)) text = text[Math.floor(Math.random() * text.length + 1) - 1];
      //console.log('showMessage', text);
      $('.message').stop();
      $('.message').html(text).fadeTo(200, 1);
      if (timeout === null) timeout = 5000;
      this.hideMessage(timeout);
    },
    hideMessage(timeout) {
      $('.message').stop().css('opacity', 1);
      if (timeout === null) timeout = 5000;
      $('.message').delay(timeout).fadeTo(200, 0);
    }
  }
}

</script>
<style rel="stylesheet/scss" lang="scss">
.l2dPanel {
  width: 100%;
  height: 100%;
}

</style>
