<script setup lang="ts">
import { ROUTES_PATHS } from '@/modules/core/router'
</script>

<template>
  <nav class="flex gap-4 bg-black text-white p-4 flex-wrap">
    <RouterLink :to="ROUTES_PATHS.public.search">Поиск</RouterLink>
    <RouterLink :to="ROUTES_PATHS.public.signIn">Войти</RouterLink>
    <RouterLink :to="ROUTES_PATHS.private.duplicate">Дубликаты</RouterLink>
    <RouterLink :to="ROUTES_PATHS.private.invalidReplacement">Невалидные замены</RouterLink>
    <RouterLink :to="ROUTES_PATHS.private.obsoleteWithoutReplacement">Без замены</RouterLink>
    <RouterLink :to="ROUTES_PATHS.private.relevantWithReplacement">Актуальные с заменой</RouterLink>
    <RouterLink :to="ROUTES_PATHS.private.selfReplacement">Заменены сами на себя</RouterLink>
    <RouterLink :to="ROUTES_PATHS.private.withoutBrand">Без бренда</RouterLink>
  </nav>
  <RouterView />
</template>

<style>
@import './modules/core/styles';
</style>
