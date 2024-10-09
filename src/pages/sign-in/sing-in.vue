<script setup lang="ts">
import { useForm } from 'vee-validate'
import { Typography } from '@core/components'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import {
  FormField,
  FormItem,
  FormControl,
  FormDescription
} from '@core/lib/shad-cn/components/ui/form'
import { Input } from '@core/lib/shad-cn/components/ui/input'
import { Button } from '@core/lib/shad-cn/components/ui/button'
import { useUnit } from 'effector-vue/composition'
import { $isPasswordValid, $isSignedIn, authFormSubmitted } from '@/modules/user/model/auth'
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import { ROUTES_PATHS } from '@settings/router'

const formSchema = toTypedSchema(
  z.object({
    password: z.string()
  })
)

const { push } = useRouter()

const isPasswordValid = useUnit($isPasswordValid)
const isSignedIn = useUnit($isSignedIn)
const authFormSubmitHandler = useUnit(authFormSubmitted)

const { handleSubmit, isFieldDirty, values } = useForm({
  validationSchema: formSchema
})

const onSubmit = handleSubmit(({ password }) => authFormSubmitHandler(password))

watch(isSignedIn, (isSignedIn) => {
  if (isSignedIn) {
    push({ path: ROUTES_PATHS.search })
  }
})
</script>

<template>
  <section class="flex items-center justify-center">
    <form @submit="onSubmit">
      <header class="mb-4 flex flex-col gap-1">
        <Typography text="Войдите в систему" type="h3" element="h1" />
        <Typography text="Для доступа к дашбордам необходимо войти" type="muted" element="p" />
      </header>
      <FormField v-slot="{ componentField }" name="password" :validate-on-blur="!isFieldDirty">
        <FormItem>
          <FormControl>
            <Input
              type="password"
              v-bind="componentField"
              autocomplete="off"
              placeholder="Введите пароль"
            />
          </FormControl>
          <FormDescription v-if="!isPasswordValid" class="text-red-600 font-semibold">
            Неверный пароль
          </FormDescription>
        </FormItem>
      </FormField>
      <Button :disabled="!values.password" type="submit" class="w-full mt-4">Войти</Button>
    </form>
  </section>
</template>
