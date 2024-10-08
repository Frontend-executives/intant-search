<script setup lang="ts">
import { Typography } from '@core/components'

import type { FunctionalComponent, PropType } from 'vue'

defineProps({
  path: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  icon: {
    type: [Object, Function] as PropType<FunctionalComponent>,
    required: true
  }
})
</script>

<template>
  <RouterLink
    active-class="bg-primary hover:!bg-primary text-primary-foreground hover:!text-primary-foreground"
    class="font-medium flex gap-2 items-center px-4 py-2 rounded-md w-full hover:bg-secondary transition-colors"
    :to="path"
  >
    <component :is="icon" class="h-4 w-4" />
    <Typography element="span" :text="text" type="small" />
  </RouterLink>
</template>
