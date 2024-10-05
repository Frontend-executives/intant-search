import { createApp } from 'vue'
import { App } from '@core/components'
import { router } from '@settings/router'

const app = createApp(App)

app.use(router)

app.mount('#app')
