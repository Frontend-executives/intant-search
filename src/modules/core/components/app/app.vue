<script setup lang="ts">
import { Navigation } from '@core/components'

import { ErrorCaptureProvider, RouterViewWithTransitions } from '@core/providers'
</script>

<template>
  <ErrorCaptureProvider>
    <div class="grid grid-cols-[200px_1fr] min-h-dvh">
      <Navigation />
      <RouterViewWithTransitions />
    </div>
  </ErrorCaptureProvider>
</template>

<style>
@import '../../styles/index.css';
</style>
