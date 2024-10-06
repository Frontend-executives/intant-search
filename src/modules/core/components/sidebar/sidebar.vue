<script setup lang="ts">
import { DarkModeSwitcher, Logo, Navigation } from '@core/components'
import { Separator } from '@core/lib/shad-cn/components/ui/separator'
</script>

<template>
  <div class="flex flex-col border-r border-r-border">
    <Logo />
    <Separator />
    <Navigation />
    <Separator />
    <div class="p-4 flex">
      <DarkModeSwitcher />
    </div>
  </div>
</template>
