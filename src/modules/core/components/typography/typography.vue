<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  text: string
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'lead' | 'large' | 'small' | 'extraSmall' | 'muted'
  element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'li' | 'span' | 'blockquote'
}>()

const styles = {
  h1: 'text-4xl font-extrabold sm:text-5xl',
  h2: 'border-b pb-2 text-3xl font-semibold',
  h3: 'text-2xl font-semibold',
  h4: 'text-xl font-semibold',
  p: 'leading-7',
  lead: 'text-xl text-muted-foreground',
  large: 'text-lg font-semibold',
  small: 'text-sm font-medium leading-none',
  extraSmall: 'text-xs leading-none',
  muted: 'text-sm text-muted-foreground'
}

const typographyClasses = computed(() => styles[props.type])
</script>

<template>
  <component :is="element" :class="typographyClasses">
    {{ text }}
  </component>
</template>
