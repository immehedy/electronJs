import './style.scss'
import banner from './public/banner2.jpeg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
  <div class="hero">
  <img src="${banner}" class="banner" alt="banner" />
  <p class="logo">logo</p>
  </div>
  </div>
`

// setupCounter(document.querySelector('#counter'))
