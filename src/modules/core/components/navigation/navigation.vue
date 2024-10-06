<script setup lang="ts">
import { ROUTES_PATHS } from '@settings/router'
import { Typography } from '@core/components'

const NAVIGATION_LINKS = [
  {
    path: ROUTES_PATHS.search,
    text: 'Поиск'
  },
  {
    path: ROUTES_PATHS.signIn,
    text: 'Войти'
  },
  {
    path: ROUTES_PATHS.duplicate,
    text: 'Дубликаты'
  },
  {
    path: ROUTES_PATHS.invalidReplacement,
    text: 'Невалидные замены'
  },
  {
    path: ROUTES_PATHS.obsoleteWithoutReplacement,
    text: 'Без замены'
  },
  {
    path: ROUTES_PATHS.relevantWithReplacement,
    text: 'Актуальные с заменой'
  },
  {
    path: ROUTES_PATHS.selfReplacement,
    text: 'Заменены сами на себя'
  },
  {
    path: ROUTES_PATHS.withoutBrand,
    text: 'Без бренда'
  }
]
</script>

<template>
  <nav>
    <ul class="p-4 flex flex-col gap-1">
      <li v-for="({ path, text }, index) in NAVIGATION_LINKS" :key="index">
        <RouterLink
          active-class="bg-primary hover:!bg-primary text-primary-foreground hover:!text-primary-foreground"
          class="flex items-center px-3 py-2 rounded-md w-full hover:bg-secondary transition-colors"
          :to="path"
        >
          <Typography element="span" :text="text" type="extraSmall" />
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
