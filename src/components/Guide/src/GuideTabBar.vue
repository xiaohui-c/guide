<template>
  <div class="guide-tab-bar" :style="tabBarStyle">
    <span class="guide-tab-label">{{ tabLabel }}</span>
    <label class="guide-switch">
      <input
        type="checkbox"
        :checked="showGuide"
        @change="$emit('toggle-guide', $event)"
      >
      <span class="guide-switch-slider"></span>
    </label>
    <button
      class="guide-fullscreen-btn"
      @click="$emit('toggle-fullscreen')"
    >
      {{ isFullscreen ? exitFullscreenText : fullscreenText }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'GuideTabBar',
  props: {
    tabBarStyle: Object,
    tabLabel: String,
    showGuide: Boolean,
    isFullscreen: Boolean,
    fullscreenText: String,
    exitFullscreenText: String
  }
}
</script>