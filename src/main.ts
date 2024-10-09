import { createApp } from 'vue'
import { App } from '@core/components'

import { router } from '@settings/router'
import { appStarted } from '@core/model/core'

const app = createApp(App)

// TODO: сделать scope и провайдер для приложения, запустить appStarted внутри allSettled
appStarted()

app.use(router).mount('#app')
