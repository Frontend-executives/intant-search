<script setup lang="ts">
import { ROUTES_PATHS } from '@/modules/core/router'
import { DarkModeSwitcher, ErrorBoundary } from '@core/components'
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
  <ErrorBoundary>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path" />
      </transition>
    </router-view>
  </ErrorBoundary>
</template>

<style>
@import '../../styles/index.css';

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
