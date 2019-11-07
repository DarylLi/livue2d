## vue项目中添加live2d看板动画。在原来只支持引入外部cdn基础上，实现本地读取live2d文件~
# 支持的live2d版本: Cubism 2, Cubism 3(只支持外网cdn资源加载)

``` bash
# install dependencies
npm install

# serve with hot reload at test
npm run dev

# build for production with minification
npm run build
```


### 说明及使用方法：
## 该项目参考借鉴其他dalao 不光是代码还是素材，仅仅作了代码的整合，部分逻辑功能和优化还正在做

## 使用:
	# vue页面中直接引入对应版本的组件即可
	<!-- 
		import live2dV2 from '@/components/l2d/live2d'
		import live2dV3 from '@/components/l2d/live2d-3'
	-->

	# live 2.0 相关配置:
		# 加载本地的live2d model文件需要引入live2d-local.js文件:
			import './js/live2d-local.js'
		# 如果想要使用外网cdn挂载的live2d 引入的文件则为: live2d.min.js
			import './js/live2d.min.js'
		# live2d渲染方法:
			本地:
				1. 首先引入live2d资源文件夹下的对应的json文件: 
				如 " import model from './model/Kobayaxi/model.json 
				./model/Kobayaxi 为live2d素材文件的根目录

				2. 引入后的配置
				model.moduleName = 'Kobayaxi' --对应素材文件夹名称
    			model.rootPath = '/' --对应model文件所在素材文件夹下的目录名称

    			注：像该角色包含两个形态的live2d模型，即根目录下有两个子文件夹:
    			 ./model/rfbChristmas/normal/model.json
    			 ./model/rfbChristmas/destory/model.json

    			rootPath相应更改
    			model.rootPath = '/normal/'  --('/destory/')

    			最后执行渲染方法即可:
    			loadliveLocal2d("live2d", model)

			外网cdn:
				选好对应model文件的cdn地址直接传进该渲染方法即可:
				loadlive2d("live2d", 'https://live2d.fghrsh.net/api/get/?id=1-55')

	# live 3.0 相关配置（目前只支持外网cdn加载方式，本地暂时做不到。。）:
		请依次引入下方依赖文件：
		<--! 
		import './js/3.0/pixi/pixi.min.js'
		import Live2DCubismCore from './js/3.0/core/live2dcubismcore.js'
		import LIVE2DCUBISMFRAMEWORK from './js/3.0/framework/live2dcubismframework.js'
		import loadModel from './js/3.0/loadModel.js'
		-->

		live2d模型配置项:

		let option = {
			modelName : 'banrenma_2', //live2d model名称
			tag_target : '#live2d3', //渲染dom
			modelWidth : 280, //模型宽度
			modelHight : 450, //模型高度
			scale : 24  //渲染模型的比例			
		}
		最后调用渲染方法即可:

		loadModel(option)

### API 内所有模型 版权均属于原作者，仅供研究学习，不得用于商业用途（喜欢就去游戏里面氪吧！


