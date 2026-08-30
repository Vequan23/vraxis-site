import { createSSRApp } from 'vue'
import { registerOsxComponents } from '@vraxis/osx-components'
import '@vraxis/osx-components/theme.css'
import App from './App.vue'
import './styles/brand.css'
import './styles/site.css'

registerOsxComponents()

createSSRApp(App).mount('#app')
