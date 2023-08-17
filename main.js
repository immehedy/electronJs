import './style.scss'
import banner from './public/banner2.jpeg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
      <img src="${banner}" class="banner" alt="banner" />
  </div>
`

// setupCounter(document.querySelector('#counter'))
