<script setup lang="ts">
import { Typography } from '@core/components'
import { Button } from '@core/lib/shad-cn/components/ui/button'

defineProps<{
  error: '404' | '500'
  title: string
  text: string
  buttonText: string
  buttonHandler: () => void
}>()
</script>

<template>
  <div class="flex h-full flex-col items-center justify-center">
    <div class="flex max-w-[600px] flex-col items-center justify-center gap-4 p-4 text-center">
      <template v-if="error === '404'">
        <img src="/images/404.svg" alt="Страница не найдена" width="300" height="300" />
      </template>
      <template v-else>
        <img src="/images/500.svg" alt="Ошибка на сервере" width="250" height="250" />
      </template>

      <Typography :text="error" type="h1" element="p" />
      <Typography :text="title" type="h3" element="p" />
      <Typography :text="text" type="muted" element="h1" />

      <Button class="w-full" @click="buttonHandler">
        {{ buttonText }}
      </Button>
    </div>
  </div>
</template>
