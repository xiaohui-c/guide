# guide
a tool for  auto  guide

##### 使用示例
```vue
<template>
  <div id="app">
    <div class="container">
      <div class="header">
        <h1>Vue2 + Vite 图片新手指引示例</h1>
        <p>集成全局指引组件演示</p>
        <button @click="showGuide = true" class="show-guide-btn">
          开启新手指引
        </button>
      </div>
      
      <image-guide
        :visible="showGuide"
        :steps="guideSteps"
        :default-img="defaultImage"
        :initial-show-guide="true"
        :texts="guideTexts"
        @finish="handleFinish"
        @step-change="handleStepChange"
        @guide-toggle="handleGuideToggle"
      />
      
      <div class="feature-grid">
        <div 
          v-for="feature in features" 
          :key="feature.id"
          class="feature-card"
        >
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      showGuide: false,
      defaultImage: 'https://picsum.photos/800/400?random=1',
      guideTexts: {
        tabLabel: '功能指引',
        nextButtonText: '下一步',
        finishButtonText: '我知道了',
        fullscreenText: '全屏',
        exitFullscreenText: '退出全屏'
      },
      guideSteps: [
        {
          title: '欢迎使用',
          dialog_title: '大规模部署-四大能力',
          progress: '1/10',
          content: '欢迎使用我们的系统！这是一个新手指引演示。',
          stepImg: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
          targetArea: { left: 50, top: 50, width: 120, height: 80 }
        },
        {
          title: '主要功能',
          dialog_title: '大规模部署-四大能力',
          progress: '2/10',
          content: '这里是系统的主要功能区域，包含核心操作。',
          stepImg: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80',
          targetArea: { left: 300, top: 150, width: 100, height: 60 }
        },
        {
          title: '设置选项',
          dialog_title: '大规模部署-四大能力',
          progress: '3/10',
          content: '在这里可以配置系统参数和个人偏好设置。',
          stepImg: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
          targetArea: { left: 500, top: 200, width: 150, height: 90 }
        },
        {
          title: '通知中心',
          dialog_title: '大规模部署-四大能力',
          progress: '4/10',
          content: '所有系统通知都会在这里显示。',
          stepImg: 'https://images.unsplash.com/photo-1508766206392-8bd5cf550d1c?auto=format&fit=crop&w=1200&q=80',
          targetArea: { left: 650, top: 60, width: 100, height: 60 }
        },
        {
          title: '用户信息',
          dialog_title: '大规模部署-四大能力',
          progress: '5/10',
          content: '点击这里可以查看和编辑个人信息。',
          stepImg: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=1200&q=80',
          targetArea: { left: 700, top: 300, width: 80, height: 80 }
        },
        {
          title: '搜索功能',
          dialog_title: '大规模部署-四大能力',
          progress: '6/10',
          content: '通过搜索框快速查找内容。',
          stepImg: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
          targetArea: { left: 200, top: 20, width: 180, height: 60 }
        },
        {
          title: '快捷入口',
          dialog_title: '大规模部署-四大能力',
          progress: '7/10',
          content: '常用功能可在此快速访问。',
          stepImg: 'https://images.unsplash.com/photo-1465101178521-c1a4c8a0a8b7?auto=format&fit=crop&w=1200&q=80',
          targetArea: { left: 100, top: 300, width: 120, height: 80 }
        },
        {
          title: '帮助中心',
          dialog_title: '大规模部署-四大能力',
          progress: '8/10',
          content: '遇到问题可点击这里获取帮助。',
          stepImg: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
          targetArea: { left: 400, top: 350, width: 120, height: 60 }
        },
        {
          title: '系统设置',
          dialog_title: '大规模部署-四大能力',
          progress: '9/10',
          content: '系统相关设置都在这里。',
          stepImg: 'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?auto=format&fit=crop&w=1200&q=80',
          targetArea: { left: 600, top: 350, width: 120, height: 60 }
        },
        {
          title: '退出登录',
          dialog_title: '大规模部署-四大能力',
          progress: '10/10',
          content: '点击此处可安全退出系统。',
          stepImg: 'https://images.unsplash.com/photo-1517263904808-5dc0d6a3b43c?auto=format&fit=crop&w=1200&q=80',
          targetArea: { left: 750, top: 20, width: 40, height: 40 }
        }
      ],
      features: [
        { id: 1, title: '快速构建', description: '基于Vite的快速开发体验' },
        { id: 2, title: 'Vue2兼容', description: '完全兼容Vue2生态系统' },
        { id: 3, title: '指引组件', description: '可复用的新手指引组件' },
        { id: 4, title: '响应式', description: '支持全屏和响应式布局' }
      ]
    }
  },
  methods: {
    handleFinish() {
      this.showGuide = false
      console.log('指引完成')
    },
    handleStepChange(stepIndex) {
      console.log('当前步骤:', stepIndex)
    },
    handleGuideToggle(isShow) {
      console.log('指引状态:', isShow ? '开启' : '关闭')
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  background-color: #f5f7fa;
  color: #333;
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 40px;
  padding: 40px 0;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #2c3e50;
}

.header p {
  font-size: 1.1rem;
  color: #7f8c8d;
  margin-bottom: 20px;
}

.show-guide-btn {
  padding: 12px 24px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
}

.show-guide-btn:hover {
  background: #2980b9;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 40px;
}

.feature-card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(0,0,0,0.15);
}

.feature-card h3 {
  color: #2c3e50;
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.feature-card p {
  color: #7f8c8d;
  line-height: 1.5;
}
</style>
```



##### 弹窗和高亮区域智能定位方案示例

```vue
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>智能弹窗位置计算 - 防重叠优化</title>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
  <style>
    body {
      font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
      background-color: #f5f7fa;
      color: #333;
      margin: 0;
      padding: 20px;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    .header {
      text-align: center;
      margin-bottom: 40px;
    }
    .main-image-wrapper {
      position: relative;
      width: 800px;
      height: 400px;
      margin: 0 auto;
      border: 2px solid #ddd;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    .main-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .highlight-area {
      position: absolute;
      border: 2px dashed #3498db;
      background-color: rgba(52, 152, 219, 0.2);
      border-radius: 8px;
      cursor: move;
      transition: all 0.3s ease;
    }
    .highlight-area:hover {
      background-color: rgba(52, 152, 219, 0.3);
    }
    .guide-content {
      position: absolute;
      background: white;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.15);
      width: 300px;
      z-index: 100;
      animation: fadeIn 0.3s ease;
      pointer-events: auto;
      transition: all 0.3s ease;
    }
    .guide-content-arrow {
      position: absolute;
      width: 0;
      height: 0;
      border: 12px solid transparent;
      z-index: 101;
    }
    .guide-content h3 {
      margin-bottom: 10px;
      color: #2c3e50;
    }
    .guide-content p {
      margin-bottom: 20px;
      color: #7f8c8d;
      line-height: 1.5;
    }
    .controls {
      display: flex;
      justify-content: center;
      margin-top: 20px;
      gap: 10px;
    }
    button {
      padding: 10px 20px;
      background: #3498db;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      transition: background 0.3s;
    }
    button:hover {
      background: #2980b9;
    }
    .position-info {
      text-align: center;
      margin-top: 20px;
      padding: 15px;
      background: #ecf0f1;
      border-radius: 4px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    .zone-indicator {
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 50;
    }
    .zone-line {
      position: absolute;
      background: rgba(0,0,0,0.05);
    }
    .zone-line.vertical {
      width: 1px;
      height: 100%;
    }
    .zone-line.horizontal {
      width: 100%;
      height: 1px;
    }
    .zone-label {
      position: absolute;
      font-size: 12px;
      color: #95a5a6;
      background: rgba(255,255,255,0.8);
      padding: 2px 5px;
      border-radius: 3px;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  </style>
</head>
<body>
  <div id="app">
    <div class="container">
      <div class="header">
        <h1>智能弹窗位置计算算法 - 防重叠优化</h1>
        <p>拖动高亮区域，观察弹窗如何智能调整位置，确保不会重叠</p>
      </div>
      <div class="main-image-wrapper" ref="imageWrapper">
        <img src="https://picsum.photos/id/1015/800/400" alt="示例图片" class="main-image">
        
        <!-- 九宫格指示器 -->
        <div class="zone-indicator">
          <div class="zone-line vertical" style="left: 33.33%"></div>
          <div class="zone-line vertical" style="left: 66.66%"></div>
          <div class="zone-line horizontal" style="top: 33.33%"></div>
          <div class="zone-line horizontal" style="top: 66.66%"></div>
          <div class="zone-label" style="top: 10px; left: 10px">左上</div>
          <div class="zone-label" style="top: 10px; left: 50%; transform: translateX(-50%)">上中</div>
          <div class="zone-label" style="top: 10px; right: 10px">右上</div>
          <div class="zone-label" style="top: 50%; left: 10px; transform: translateY(-50%)">左中</div>
          <div class="zone-label" style="top: 50%; left: 50%; transform: translate(-50%, -50%)">中心</div>
          <div class="zone-label" style="top: 50%; right: 10px; transform: translateY(-50%)">右中</div>
          <div class="zone-label" style="bottom: 10px; left: 10px">左下</div>
          <div class="zone-label" style="bottom: 10px; left: 50%; transform: translateX(-50%)">下中</div>
          <div class="zone-label" style="bottom: 10px; right: 10px">右下</div>
        </div>
        
        <!-- 高亮区域 -->
        <div 
          class="highlight-area" 
          :style="{
            left: highlightArea.left + 'px',
            top: highlightArea.top + 'px',
            width: highlightArea.width + 'px',
            height: highlightArea.height + 'px'
          }"
          @mousedown="startDrag"
        ></div>
        
        <!-- 弹窗 -->
        <div 
          v-if="showPopup" 
          class="guide-content"
          :style="popupStyle"
        >
          <h3>智能弹窗</h3>
          <p>这个弹窗的位置是根据高亮区域的位置智能计算的，确保不会重叠且保持合适的距离。</p>
          <p>当前位置: {{ currentPosition }}</p>
          <p>高亮区域所在区域: {{ highlightZoneName }}</p>
          
          <!-- 三角形箭头 -->
          <div class="guide-content-arrow" :style="arrowStyle"></div>
        </div>
      </div>
      
      <div class="position-info">
        <p>高亮区域位置: ({{ highlightArea.left }}, {{ highlightArea.top }})，尺寸: {{ highlightArea.width }}×{{ highlightArea.height }}</p>
        <p>弹窗位置: {{ currentPosition }}</p>
        <p>高亮区域所在区域: {{ highlightZoneName }}</p>
      </div>
      
      <div class="controls">
        <button @click="togglePopup">{{ showPopup ? '隐藏弹窗' : '显示弹窗' }}</button>
        <button @click="randomizeHighlightArea">随机高亮区域</button>
        <button @click="toggleZoneIndicator">{{ showZoneIndicator ? '隐藏九宫格' : '显示九宫格' }}</button>
      </div>
    </div>
  </div>

  <script>
    new Vue({
      el: '#app',
      data: {
        showPopup: true,
        showZoneIndicator: true,
        highlightArea: {
          left: 200,
          top: 150,
          width: 100,
          height: 80
        },
        isDragging: false,
        dragOffset: { x: 0, y: 0 },
        currentPosition: '右侧',
        highlightZoneName: '中心'
      },
      computed: {
        // 计算弹窗位置
        popupStyle() {
          const containerWidth = 800;
          const containerHeight = 400;
          const popupWidth = 300;
          const popupHeight = 160;
          const margin = 20;

          // 高亮区域中心点
          const highlightCenterX = this.highlightArea.left + this.highlightArea.width / 2;
          const highlightCenterY = this.highlightArea.top + this.highlightArea.height / 2;

          // 计算高亮区域所在的九宫格位置
          const zoneX = Math.floor(highlightCenterX / (containerWidth / 3));
          const zoneY = Math.floor(highlightCenterY / (containerHeight / 3));
          const zone = zoneY * 3 + zoneX;

          // 区域名称映射
          const zoneNames = ['左上', '上中', '右上', '左中', '中心', '右中', '左下', '下中', '右下'];
          this.highlightZoneName = zoneNames[zone];

          // 定义每个区域的首选和备选弹窗位置
          const positionPreferences = {
            0: ['right', 'bottom', 'left', 'top'],
            1: ['bottom', 'right', 'left', 'top'],
            2: ['left', 'bottom', 'right', 'top'],
            3: ['right', 'bottom', 'top', 'left'],
            4: ['right', 'bottom', 'left', 'top'],
            5: ['left', 'bottom', 'top', 'right'],
            6: ['right', 'top', 'bottom', 'left'],
            7: ['top', 'right', 'left', 'bottom'],
            8: ['left', 'top', 'bottom', 'right']
          };

          let bestPosition = null;
          let bestCoords = null;
          for (const position of positionPreferences[zone]) {
            let left, top;
            switch (position) {
              case 'right':
                left = this.highlightArea.left + this.highlightArea.width + margin;
                top = highlightCenterY - popupHeight / 2;
                break;
              case 'left':
                left = this.highlightArea.left - popupWidth - margin;
                top = highlightCenterY - popupHeight / 2;
                break;
              case 'top':
                left = highlightCenterX - popupWidth / 2;
                top = this.highlightArea.top - popupHeight - margin;
                break;
              case 'bottom':
                left = highlightCenterX - popupWidth / 2;
                top = this.highlightArea.top + this.highlightArea.height + margin;
                break;
            }
            left = Math.max(margin, Math.min(containerWidth - popupWidth - margin, left));
            top = Math.max(margin, Math.min(containerHeight - popupHeight - margin, top));
            if (!this.checkOverlap(left, top, popupWidth, popupHeight)) {
              bestPosition = position;
              bestCoords = { left, top };
              break;
            }
          }
          if (!bestPosition) {
            let minOverlap = Infinity;
            for (const position of positionPreferences[zone]) {
              let left, top;
              switch (position) {
                case 'right':
                  left = this.highlightArea.left + this.highlightArea.width + margin;
                  top = highlightCenterY - popupHeight / 2;
                  break;
                case 'left':
                  left = this.highlightArea.left - popupWidth - margin;
                  top = highlightCenterY - popupHeight / 2;
                  break;
                case 'top':
                  left = highlightCenterX - popupWidth / 2;
                  top = this.highlightArea.top - popupHeight - margin;
                  break;
                case 'bottom':
                  left = highlightCenterX - popupWidth / 2;
                  top = this.highlightArea.top + this.highlightArea.height + margin;
                  break;
              }
              left = Math.max(margin, Math.min(containerWidth - popupWidth - margin, left));
              top = Math.max(margin, Math.min(containerHeight - popupHeight - margin, top));
              const overlapArea = this.getOverlapArea(left, top, popupWidth, popupHeight);
              if (overlapArea < minOverlap) {
                minOverlap = overlapArea;
                bestPosition = position;
                bestCoords = { left, top };
              }
            }
          }
          switch (bestPosition) {
            case 'right': this.currentPosition = '右侧'; break;
            case 'left': this.currentPosition = '左侧'; break;
            case 'top': this.currentPosition = '上方'; break;
            case 'bottom': this.currentPosition = '下方'; break;
          }
          // 只要弹窗在左侧，统一往左移动50px
          if (bestPosition === 'left') {
            bestCoords.left = Math.max(margin, bestCoords.left - 50);
          }
          return {
            left: bestCoords.left + 'px',
            top: bestCoords.top + 'px'
          };
        },
        
        // 计算箭头样式
        arrowStyle() {
          const containerWidth = 800;
          const containerHeight = 400;
          const popupWidth = 300;
          const popupHeight = 160;
          const margin = 20;
          
          // 高亮区域中心点
          const highlightCenterX = this.highlightArea.left + this.highlightArea.width / 2;
          const highlightCenterY = this.highlightArea.top + this.highlightArea.height / 2;
          
          // 计算弹窗位置
          const popupStyle = this.popupStyle;
          const popupLeft = parseInt(popupStyle.left);
          const popupTop = parseInt(popupStyle.top);
          
          let arrowStyle = {};
          
          // 根据弹窗位置设置箭头
          if (this.currentPosition === '右侧') {
            arrowStyle = {
              left: '-12px',
              top: (highlightCenterY - popupTop) + 'px',
              borderRight: '12px solid white',
              borderTop: '12px solid transparent',
              borderBottom: '12px solid transparent',
              borderLeft: 'none'
            };
          } else if (this.currentPosition === '左侧') {
            arrowStyle = {
              right: '-12px',
              top: (highlightCenterY - popupTop) + 'px',
              borderLeft: '12px solid white',
              borderTop: '12px solid transparent',
              borderBottom: '12px solid transparent',
              borderRight: 'none'
            };
          } else if (this.currentPosition === '上方') {
            arrowStyle = {
              top: '100%',
              left: (highlightCenterX - popupLeft - 12) + 'px',
              borderTop: '12px solid white',
              borderLeft: '12px solid transparent',
              borderRight: '12px solid transparent',
              borderBottom: 'none'
            };
          } else if (this.currentPosition === '下方') {
            arrowStyle = {
              bottom: '100%',
              left: (highlightCenterX - popupLeft - 12) + 'px',
              borderBottom: '12px solid white',
              borderLeft: '12px solid transparent',
              borderRight: '12px solid transparent',
              borderTop: 'none'
            };
          }
          
          return arrowStyle;
        }
      },
      methods: {
        // 检查位置是否有效（不超出边界且有足够空间，且不与高亮区域重叠）
        isPositionValid(position, containerWidth, containerHeight, popupWidth, popupHeight, margin) {
          const highlightCenterX = this.highlightArea.left + this.highlightArea.width / 2;
          const highlightCenterY = this.highlightArea.top + this.highlightArea.height / 2;
          
          let left, top;
          
          switch (position) {
            case 'right':
              left = this.highlightArea.left + this.highlightArea.width + margin;
              top = highlightCenterY - popupHeight / 2;
              // 检查是否超出右边界
              if (left + popupWidth > containerWidth) return false;
              // 检查是否与高亮区域重叠
              if (this.checkOverlap(left, top, popupWidth, popupHeight)) return false;
              break;
            case 'left':
              left = this.highlightArea.left - popupWidth - margin;
              top = highlightCenterY - popupHeight / 2;
              // 检查是否超出左边界
              if (left < 0) return false;
              // 检查是否与高亮区域重叠
              if (this.checkOverlap(left, top, popupWidth, popupHeight)) return false;
              break;
            case 'top':
              left = highlightCenterX - popupWidth / 2;
              top = this.highlightArea.top - popupHeight - margin;
              // 检查是否超出上边界
              if (top < 0) return false;
              // 检查是否与高亮区域重叠
              if (this.checkOverlap(left, top, popupWidth, popupHeight)) return false;
              break;
            case 'bottom':
              left = highlightCenterX - popupWidth / 2;
              top = this.highlightArea.top + this.highlightArea.height + margin;
              // 检查是否超出下边界
              if (top + popupHeight > containerHeight) return false;
              // 检查是否与高亮区域重叠
              if (this.checkOverlap(left, top, popupWidth, popupHeight)) return false;
              break;
            default:
              return false;
          }
          
          return true;
        },
        
        // 检查弹窗是否与高亮区域重叠
        checkOverlap(popupLeft, popupTop, popupWidth, popupHeight) {
          const highlightLeft = this.highlightArea.left;
          const highlightTop = this.highlightArea.top;
          const highlightWidth = this.highlightArea.width;
          const highlightHeight = this.highlightArea.height;
          
          // 检查矩形是否重叠
          return !(popupLeft + popupWidth < highlightLeft || 
                 popupLeft > highlightLeft + highlightWidth || 
                 popupTop + popupHeight < highlightTop || 
                 popupTop > highlightTop + highlightHeight);
        },
        
        // 计算重叠面积
        getOverlapArea(popupLeft, popupTop, popupWidth, popupHeight) {
          const highlightLeft = this.highlightArea.left;
          const highlightTop = this.highlightArea.top;
          const highlightWidth = this.highlightArea.width;
          const highlightHeight = this.highlightArea.height;
          const x_overlap = Math.max(0, Math.min(popupLeft + popupWidth, highlightLeft + highlightWidth) - Math.max(popupLeft, highlightLeft));
          const y_overlap = Math.max(0, Math.min(popupTop + popupHeight, highlightTop + highlightHeight) - Math.max(popupTop, highlightTop));
          return x_overlap * y_overlap;
        },
        
        // 开始拖动高亮区域
        startDrag(e) {
          this.isDragging = true;
          this.dragOffset.x = e.clientX - this.highlightArea.left;
          this.dragOffset.y = e.clientY - this.highlightArea.top;
          
          document.addEventListener('mousemove', this.onDrag);
          document.addEventListener('mouseup', this.stopDrag);
        },
        
        // 拖动高亮区域
        onDrag(e) {
          if (!this.isDragging) return;
          
          this.highlightArea.left = e.clientX - this.dragOffset.x;
          this.highlightArea.top = e.clientY - this.dragOffset.y;
          
          // 限制高亮区域不超出边界
          this.highlightArea.left = Math.max(0, Math.min(800 - this.highlightArea.width, this.highlightArea.left));
          this.highlightArea.top = Math.max(0, Math.min(400 - this.highlightArea.height, this.highlightArea.top));
        },
        
        // 停止拖动
        stopDrag() {
          this.isDragging = false;
          document.removeEventListener('mousemove', this.onDrag);
          document.removeEventListener('mouseup', this.stopDrag);
        },
        
        // 切换弹窗显示
        togglePopup() {
          this.showPopup = !this.showPopup;
        },
        
        // 随机高亮区域位置
        randomizeHighlightArea() {
          this.highlightArea.left = Math.floor(Math.random() * (800 - this.highlightArea.width));
          this.highlightArea.top = Math.floor(Math.random() * (400 - this.highlightArea.height));
        },
        
        // 切换九宫格显示
        toggleZoneIndicator() {
          this.showZoneIndicator = !this.showZoneIndicator;
        }
      },
      mounted() {
        // 初始随机位置
        this.randomizeHighlightArea();
      }
    });
  </script>
</body>
</html>
```



