<script setup lang="ts">
import { DarkModeSwitcher, Logo, Navigation } from '@core/components'
import { Separator } from '@core/lib/shad-cn/components/ui/separator'
import { Button } from '@core/lib/shad-cn/components/ui/button'
import { useUnit } from 'effector-vue/composition'
import { $isSignedIn, signedOut } from '@/modules/user/model/auth'

const isSignedIn = useUnit($isSignedIn)
const signOutEvent = useUnit(signedOut)
</script>

<template>
  <div class="flex flex-col border-r border-r-border">
    <Logo />
    <Separator />
    <Navigation />
    <template v-if="isSignedIn">
      <Separator />
      <Button variant="destructive" @click="signOutEvent" class="m-4"> Выйти </Button>
    </template>
    <Separator />
    <DarkModeSwitcher class="m-4" />
  </div>
</template>
