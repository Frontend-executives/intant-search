<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  text: string
  type:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'p'
    | 'blockquote'
    | 'inlineCode'
    | 'lead'
    | 'large'
    | 'small'
    | 'muted'
  element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'li' | 'span' | 'blockquote'
}>()

const styles = {
  h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight sm:text-5xl',
  h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
  h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
  h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
  p: 'leading-7',
  blockquote: 'mt-6 border-l-2 pl-6 italic',
  inlineCode: 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
  lead: 'text-xl text-muted-foreground',
  large: 'text-lg font-semibold',
  small: 'text-sm font-medium leading-none',
  muted: 'text-sm text-muted-foreground'
}

const typographyClasses = computed(() => styles[props.type])
</script>

<template>
  <component :is="element" :class="typographyClasses">
    {{ text }}
  </component>
</template>
