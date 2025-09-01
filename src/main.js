/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'

// Styles
import 'unfonts.css'
import DateFnsAdapter from '@date-io/date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { pt } from 'vuetify/locale'



const vuetify = createVuetify({
    locale:{
        locale: 'pt',
        messages:{ pt }

    },
    date: {
        adapter: DateFnsAdapter,
        locale: {
          pt: ptBR,
        }}

})

const app = createApp(App)

registerPlugins(app)

app.mount('#app')

app.use(vuetify)
