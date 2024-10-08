import { createApp } from 'vue'
import { App } from '@core/components'
import { router } from '@settings/router'
import { allSettled, createEvent, fork } from 'effector'

const appStarted = createEvent()

const scope = fork()

await allSettled(appStarted, { scope })

const app = createApp(App)

app.use(router)

app.mount('#app')
