import { createApp } from 'vue'
import { router } from '@core/router'
import { App } from '@core/components'

const app = createApp(App)

app.use(router)

app.mount('#app')
