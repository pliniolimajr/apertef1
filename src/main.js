import { createApp } from 'vue'
import './style.css'

document.addEventListener('click', (event) => {
  const target = event.target.closest?.('[data-track]')
  if (!target) return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: target.dataset.track,
    click_location: target.dataset.trackLocation || 'unknown'
  })
})
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
