<script setup lang="ts">
import { ErrorCaptureProvider, RouterViewWithTransitions } from '@core/providers'
import { Sidebar } from '@core/components'
</script>

<template>
  <ErrorCaptureProvider>
    <div class="grid grid-cols-[260px_1fr] m-4 border border-border rounded-sm">
      <Sidebar />
      <RouterViewWithTransitions />
    </div>
  </ErrorCaptureProvider>
</template>

<style>
@import '../../styles/index.css';
</style>
