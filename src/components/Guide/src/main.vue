<template>
  <div
    v-if="visible"
    class="guide-container"
    :class="{ 'guide-fullscreen': isFullscreen }"
    ref="guideContainer"
  >
    <img
      :src="currentStepImage"
      alt="指引图片"
      class="guide-main-image"
      :class="{ 'guide-fullscreen-image': isFullscreen }"
    />
    
    <div
      v-if="showGuide"
      class="guide-overlay"
      :style="overlayStyle"
    >
      <svg
        class="guide-svg-mask"
        :style="svgStyle"
        :width="isFullscreen ? windowWidth : 800"
        :height="isFullscreen ? windowHeight : 400"
      >
        <defs>
          <mask :id="`guide-hole-mask-${uid}`">
            <rect :width="maskWidth" :height="maskHeight" fill="white"/>
            <rect
              v-if="currentArea"
              :x="holeLeft"
              :y="holeTop"
              :width="holeWidth"
              :height="holeHeight"
              fill="black"
              rx="12"
              ry="12"
            />
          </mask>
        </defs>
        <rect
          :width="maskWidth"
          :height="maskHeight"
          fill="rgba(0,0,0,0.7)"
          :mask="`url(#guide-hole-mask-${uid})`"
        />
      </svg>
      <GuideContent
        :currentStep="currentStep"
        :currentStepIndex="currentStepIndex"
        :steps="steps"
        :contentStyle="contentStyle"
        :nextButtonText="nextButtonText"
        :finishButtonText="finishButtonText"
        @next-step="nextStep"
        @finish="finish"
      />
      <!-- <div
        class="guide-content"
        :style="contentStyle"
      >
        <h3>{{ currentStep.title }}</h3>
        <p>{{ currentStep.content }}</p>
        <div class="guide-buttons">
          <button
            v-if="currentStepIndex < steps.length - 1"
            class="guide-button-next"
            @click="nextStep"
          >
            {{ nextButtonText }}
          </button>
          <button
            v-else
            class="guide-button-next"
            @click="finish"
          >
            {{ finishButtonText }}
          </button>
        </div>
      </div> -->
    </div>
    
    <GuideTabBar
      :tabBarStyle="tabBarStyle"
      :tabLabel="tabLabel"
      :showGuide="showGuide"
      :isFullscreen="isFullscreen"
      :fullscreenText="fullscreenText"
      :exitFullscreenText="exitFullscreenText"
      @toggle-guide="toggleGuide"
      @toggle-fullscreen="toggleFullscreen"
    />
  </div>
</template>

<script>
import GuideTabBar from './GuideTabBar.vue'
import GuideContent from './GuideContent.vue'

export default {
  name: 'ImageGuide',
  components: {
    GuideTabBar,
    GuideContent
  },
  
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    steps: {
      type: Array,
      required: true,
      default: () => []
    },
    defaultImg: {
      type: String,
      default: ''
    },
    initialShowGuide: {
      type: Boolean,
      default: false
    },
    texts: {
      type: Object,
      default: () => ({})
    }
  },
  
  data() {
    return {
      showGuide: this.initialShowGuide,
      currentStepIndex: 0,
      isFullscreen: false,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      uid: Math.random().toString(36).substr(2, 9)
    }
  },
  
  computed: {
    currentStep() {
      return this.steps[this.currentStepIndex] || {}
    },
    
    currentArea() {
      return this.currentStep.targetArea
    },
    
    currentStepImage() {
      return this.currentStep.stepImg || this.defaultImg
    },
    
    maskWidth() {
      return this.isFullscreen ? this.windowWidth : 800
    },
    
    maskHeight() {
      return this.isFullscreen ? this.windowHeight : 400
    },
    
    holeLeft() {
      if (!this.currentArea) return 0
      const baseWidth = 800
      return this.isFullscreen ? 
        Math.round(this.currentArea.left * this.windowWidth / baseWidth) : 
        this.currentArea.left
    },
    
    holeTop() {
      if (!this.currentArea) return 0
      const baseHeight = 400
      return this.isFullscreen ? 
        Math.round(this.currentArea.top * this.windowHeight / baseHeight) : 
        this.currentArea.top
    },
    
    holeWidth() {
      if (!this.currentArea) return 0
      const baseWidth = 800
      return this.isFullscreen ? 
        Math.round(this.currentArea.width * this.windowWidth / baseWidth) : 
        this.currentArea.width
    },
    
    holeHeight() {
      if (!this.currentArea) return 0
      const baseHeight = 400
      return this.isFullscreen ? 
        Math.round(this.currentArea.height * this.windowHeight / baseHeight) : 
        this.currentArea.height
    },
    
    contentStyle() {
      if (!this.currentArea) return { top: '50%', left: '50%', transform: 'translate(-50%, -50%)', maxWidth: '320px' }

      let left = this.currentArea.left + this.currentArea.width + 20
      let top = this.currentArea.top + this.currentArea.height / 2
      const containerWidth = this.isFullscreen ? this.windowWidth : 800
      const containerHeight = this.isFullscreen ? this.windowHeight : 400
      const popupWidth = 320
      const popupHeight = 160

      // 如果右侧超出，放到左侧
      if (left + popupWidth > containerWidth) left = this.currentArea.left - popupWidth - 20
      // 如果左侧超出，贴边
      if (left < 20) left = 20
      // 如果底部超出，贴底
      if (top + popupHeight / 2 > containerHeight) top = containerHeight - popupHeight / 2 - 20
      // 如果顶部超出，贴顶
      if (top - popupHeight / 2 < 20) top = popupHeight / 2 + 20

      if (this.isFullscreen) {
        const scaleX = this.windowWidth / 800
        const scaleY = this.windowHeight / 400
        left = Math.round(left * scaleX)
        top = Math.round(top * scaleY)
      }

      return {
        left: left + 'px',
        top: top + 'px',
        transform: 'translateY(-50%)',
        maxWidth: popupWidth + 'px',
        minWidth: '220px',
        wordBreak: 'break-word'
      }
    },
    
    overlayStyle() {
      return this.isFullscreen ? 
        { width: '100vw', height: '100vh' } : 
        { width: '800px', height: '400px' }
    },
    
    svgStyle() {
      const width = this.isFullscreen ? this.windowWidth : 800
      const height = this.isFullscreen ? this.windowHeight : 400
      return {
        width: width + 'px',
        height: height + 'px',
        display: 'block'
      }
    },
    
    tabBarStyle() {
      return this.isFullscreen ? 
        { width: '100vw', left: 0, bottom: 0 } : 
        { width: '800px', left: 0, bottom: 0 }
    },
    
    tabLabel() {
      return this.texts.tabLabel || '新手指引'
    },
    
    nextButtonText() {
      return this.texts.nextButtonText || '下一步'
    },
    
    finishButtonText() {
      return this.texts.finishButtonText || '完成'
    },
    
    fullscreenText() {
      return this.texts.fullscreenText || '全屏'
    },
    
    exitFullscreenText() {
      return this.texts.exitFullscreenText || '还原'
    }
  },
  
  methods: {
    nextStep() {
      if (this.currentStepIndex < this.steps.length - 1) {
        this.currentStepIndex++
        this.$emit('step-change', this.currentStepIndex)
      } else {
        this.finish()
      }
    },
    
    finish() {
      this.showGuide = false
      this.currentStepIndex = 0
      this.$emit('finish')
    },
    
    toggleGuide(event) {
      this.showGuide = event.target.checked
      this.$emit('guide-toggle', this.showGuide)
      if (this.showGuide) {
        this.currentStepIndex = 0
      }
    },
    
    toggleFullscreen() {
      if (!this.isFullscreen) {
        this.enterFullscreen()
      } else {
        this.exitFullscreen()
      }
    },
    
    enterFullscreen() {
      const el = this.$refs.guideContainer
      const methods = [
        'requestFullscreen',
        'webkitRequestFullscreen',
        'mozRequestFullScreen',
        'msRequestFullscreen'
      ]
      
      for (const method of methods) {
        if (el[method]) {
          el[method]()
          break
        }
      }
    },
    
    exitFullscreen() {
      const methods = [
        'exitFullscreen',
        'webkitExitFullscreen',
        'mozCancelFullScreen',
        'msExitFullscreen'
      ]
      
      for (const method of methods) {
        if (document[method]) {
          document[method]()
          break
        }
      }
    },
    
    handleFullscreenChange() {
      this.isFullscreen = !!(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      )
      this.windowWidth = window.innerWidth
      this.windowHeight = window.innerHeight
    },
    
    handleResize() {
      this.windowWidth = window.innerWidth
      this.windowHeight = window.innerHeight
    }
  },
  
  mounted() {
    window.addEventListener('resize', this.handleResize)
    
    const events = [
      'fullscreenchange',
      'webkitfullscreenchange',
      'mozfullscreenchange',
      'MSFullscreenChange'
    ]
    
    events.forEach(event => {
      document.addEventListener(event, this.handleFullscreenChange)
    })
  },
  
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
    
    const events = [
      'fullscreenchange',
      'webkitfullscreenchange',
      'mozfullscreenchange',
      'MSFullscreenChange'
    ]
    
    events.forEach(event => {
      document.removeEventListener(event, this.handleFullscreenChange)
    })
  }
}
</script>

<style src="../style.css"></style>