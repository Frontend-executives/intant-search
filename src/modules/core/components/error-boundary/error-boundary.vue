<script>
import { PageError } from '@core/components'

export default {
  components: { PageError },
  data() {
    return {
      isErrorShown: false
    }
  },
  methods: {
    reloadPage() {
      window.location.reload()
    }
  },
  errorCaptured() {
    this.isErrorShown = true

    return false
  }
}
</script>

<template>
  <PageError
    v-if="isErrorShown"
    title="Что-то пошло не так..."
    error="500"
    text="Мы столкнулись с проблемой. Пожалуйста, попробуйте обновить страницу или вернитесь позже."
    buttonText="Обновить страницу"
    :buttonHandler="reloadPage"
  />
  <slot v-else />
</template>
