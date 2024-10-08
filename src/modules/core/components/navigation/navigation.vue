<script setup lang="ts">
import { ROUTES_PATHS } from '@settings/router'
import { NavigationLink } from '@core/components'
import {
  CircleHelp,
  Files,
  LogIn,
  RefreshCcw,
  Search,
  TriangleAlert,
  VenetianMask,
  VideoOff
} from 'lucide-vue-next'
import { $isSignedIn } from '@/modules/user/model/auth'
import { useUnit } from 'effector-vue/composition'

const NAVIGATION_LINKS = [
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

const isSignedIn = useUnit($isSignedIn)
</script>

<template>
  <nav>
    <ul class="flex flex-col gap-1 p-4">
      <li>
        <NavigationLink :icon="Search" text="Поиск" :path="ROUTES_PATHS.search" />
      </li>
      <template v-if="isSignedIn">
        <li v-for="({ path, text, icon }, index) in NAVIGATION_LINKS" :key="index">
          <NavigationLink :icon="icon" :text="text" :path="path" />
        </li>
      </template>
      <template v-else>
        <li>
          <NavigationLink :icon="LogIn" text="Войти" :path="ROUTES_PATHS.signIn" />
        </li>
      </template>
    </ul>
  </nav>
</template>
