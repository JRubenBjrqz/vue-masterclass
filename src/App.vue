<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'

const errorStore = useErrorStore()

onErrorCaptured((error) => {
  errorStore.setError({ error })
})

onMounted(() => {
  useAuthStore().trackAuthChanges()
})
</script>

<template>
  <AuthLayout>
    <AppErrorPage v-if="errorStore.activeError" />

    <RouterView v-else v-slot="{ Component, route }">
      <Suspense v-if="Component" timeout="0">
        <Component :is="Component" :key="route.name" />

        <template #fallback>
          <div>
            <h1>Loading...</h1>
          </div>
        </template>
      </Suspense>
    </RouterView>
  </AuthLayout>
</template>
