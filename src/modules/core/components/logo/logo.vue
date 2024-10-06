<script setup lang="ts">
import { computed } from 'vue'
import { useDark } from '@vueuse/core'

const isDark = useDark()

const logoSrc = computed(() =>
  isDark.value ? '/images/dark-theme-logo.png' : '/images/light-theme-logo.png'
)
</script>

<template>
  <img draggable="false" class="w-28 mx-auto my-4" :src="logoSrc" alt="logo" />
</template>
