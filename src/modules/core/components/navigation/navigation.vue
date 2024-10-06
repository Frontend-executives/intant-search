<script setup lang="ts">
import { ROUTES_PATHS } from '@settings/router'
import { Typography } from '@core/components'
import {
  CircleHelp,
  Files,
  RefreshCcw,
  Search,
  TriangleAlert,
  VenetianMask,
  VideoOff
} from 'lucide-vue-next'

const NAVIGATION_LINKS = [
  {
    path: ROUTES_PATHS.search,
    text: 'Поиск',
    icon: Search
  },
  {
    path: ROUTES_PATHS.duplicate,
    text: 'Дубликаты',
    icon: Files
  },
  {
    path: ROUTES_PATHS.invalidReplacement,
    text: 'Невалидные замены',
    icon: VideoOff
  },
  {
    path: ROUTES_PATHS.obsoleteWithoutReplacement,
    text: 'Без замены',
    icon: CircleHelp
  },
  {
    path: ROUTES_PATHS.relevantWithReplacement,
    text: 'Актуальные с заменой',
    icon: TriangleAlert
  },
  {
    path: ROUTES_PATHS.selfReplacement,
    text: 'Заменены сами на себя',
    icon: RefreshCcw
  },
  {
    path: ROUTES_PATHS.withoutBrand,
    text: 'Без бренда',
    icon: VenetianMask
  }
]
</script>

<template>
  <nav>
    <ul class="flex flex-col gap-1 p-4">
      <li v-for="({ path, text, icon }, index) in NAVIGATION_LINKS" :key="index">
        <RouterLink
          active-class="bg-primary hover:!bg-primary text-primary-foreground hover:!text-primary-foreground"
          class="font-medium flex gap-2 items-center px-3 py-2 rounded-md w-full hover:bg-secondary transition-colors"
          :to="path"
        >
          <component :is="icon" class="h-4 w-4" />
          <Typography element="span" :text="text" type="extraSmall" />
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
