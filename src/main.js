/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App
 */

// Vue
import { createApp } from 'vue'

// App root
import App from './App.vue'

// Plugins (Vuetify, Router, etc.)
import { registerPlugins } from '@/plugins'

// Styles
import 'unfonts.css'

const app = createApp(App)

// Registra TODOS os plugins (inclusive Vuetify)
registerPlugins(app)

// Monta a aplicação (sempre por último)
app.mount('#app')
