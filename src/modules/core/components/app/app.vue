<script setup lang="ts">
import { DarkModeSwitcher } from '@core/components'

import { ROUTES_PATHS } from '@settings/router'
import { ErrorCaptureProvider, RouterViewWithTransitions } from '@core/providers'
</script>

<template>
  <nav class="flex gap-4 bg-black text-white p-4 flex-wrap">
    <RouterLink :to="ROUTES_PATHS.search">Поиск</RouterLink>
    <RouterLink :to="ROUTES_PATHS.signIn">Войти</RouterLink>
    <RouterLink :to="ROUTES_PATHS.duplicate">Дубликаты</RouterLink>
    <RouterLink :to="ROUTES_PATHS.invalidReplacement">Невалидные замены</RouterLink>
    <RouterLink :to="ROUTES_PATHS.obsoleteWithoutReplacement">Без замены</RouterLink>
    <RouterLink :to="ROUTES_PATHS.relevantWithReplacement">Актуальные с заменой</RouterLink>
    <RouterLink :to="ROUTES_PATHS.selfReplacement">Заменены сами на себя</RouterLink>
    <RouterLink :to="ROUTES_PATHS.withoutBrand">Без бренда</RouterLink>
  </nav>
  <DarkModeSwitcher />
  <ErrorCaptureProvider>
    <RouterViewWithTransitions />
  </ErrorCaptureProvider>
</template>

<style>
@import '../../styles/index.css';
</style>
