export default {
  inserted(el) {
    el.style.cursor = 'move'
    el.onmousedown = function (e) {
      // 只允许鼠标左键拖拽
      if (e.button !== 0) return
      const rect = el.getBoundingClientRect()
      const startX = e.clientX
      const startY = e.clientY
      const origLeft = rect.left
      const origTop = rect.top

      // 计算偏移量
      const move = (event) => {
        let newLeft = origLeft + event.clientX - startX
        let newTop = origTop + event.clientY - startY
        // 限制拖拽范围（可选）
        newLeft = Math.max(0, newLeft)
        newTop = Math.max(0, newTop)
        el.style.left = newLeft + 'px'
        el.style.top = newTop + 'px'
        el.style.right = 'auto'
        el.style.bottom = 'auto'
      }

      document.onmousemove = move
      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
}