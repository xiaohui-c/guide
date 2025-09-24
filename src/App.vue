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