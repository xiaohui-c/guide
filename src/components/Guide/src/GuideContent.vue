<template>
  <div class="guide-content" :style="contentStyle">
    <div class="guide-content-header">
      <div class="guide-close-btn" @click="$emit('finish')">×</div>
      <div class="guide-header-spacer">{{ currentStep.dialog_title }}</div>
      <div class="guide-triangle"></div>
    </div>
    <div>{{ currentStep.title }}</div>
    <p>{{ currentStep.content }}</p>
    <div class="guide-buttons">
        <span class="guide_progress">{{ currentStep.progress }}</span>
      <span
        v-if="currentStepIndex < steps.length - 1"
        class="guide-button-next"
        @click="$emit('next-step')"
      >
        {{ nextButtonText }}
      </span>
      <span
        v-else
        class="guide-button-next"
        @click="$emit('finish')"
      >
        {{ finishButtonText }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuideContent',
  props: {
    currentStep: Object,
    currentStepIndex: Number,
    steps: Array,
    contentStyle: Object,
    nextButtonText: String,
    finishButtonText: String
  }
}
</script>

<style scoped>
.guide-content {
  background: #197dff;
  color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.18);
  padding: 24px 20px 16px 20px;
  max-width: 320px;
  min-width: 220px;
  word-break: break-word;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
}

.guide-content-header {
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
}

.guide-close-btn {
  background: transparent;
  border: none;
  color: #fff;
  font-size: 22px;
  opacity: 0.8;
  font-weight: normal;
  cursor: pointer;
  line-height: 1;
  margin-top: -8px;
}

.guide-header-spacer {
  flex: 1;
  text-align: end;
      padding-right: 16px;
      font-size: 14px;
      opacity: 0.8;
}

.guide-triangle {
  width: 0;
  height: 0;
  border-left: 12px solid #197dff;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  margin-right: -31px;
}

.guide-buttons {
  margin-top: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.guide_progress {
  opacity: 0.8;
  font-size: 14px;
}

.guide-button-next {
  background: #197dff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 6px 18px;
  font-size: 14px;
  opacity: 0.8;
  cursor: pointer;
  margin-right: -18px;
}

/* .guide-button-next:hover {
  background: #e3eefe;
} */
</style>