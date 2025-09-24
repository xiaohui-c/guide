import ImageGuide from './src/main.vue'

ImageGuide.install = function(Vue) {
  Vue.component(ImageGuide.name, ImageGuide)
}

export default ImageGuide