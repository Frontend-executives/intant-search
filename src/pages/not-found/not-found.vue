<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ROUTES_PATHS } from '@settings/router'
import { ErrorTemplate } from '@core/components'

const router = useRouter()

const goToSearchPage = () => router.push(ROUTES_PATHS.search)
</script>

<template>
  <ErrorTemplate
    error="404"
    title="Упс! Кажется, вы заблудились..."
    text="Страница, которую вы ищете, не существует. Попробуйте вернуться на главную или воспользуйтесь меню для навигации"
    buttonText="На главную"
    :buttonHandler="goToSearchPage"
  />
</template>
