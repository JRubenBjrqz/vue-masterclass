<script setup lang="ts">
import type { MenuInjectionOptions } from '@/utils/injectionKeys'
import { menuKey } from '@/utils/injectionKeys'

interface LinkProp {
  title: string
  to?: string
  icon: string
}

const props = defineProps<{
  links: LinkProp[]
}>()

const emits = defineEmits<{
  actionClicked: [string]
}>()

const emitActionClicked = (linkTitle: string) => {
  emits('actionClicked', linkTitle)
}

const { menuOpen } = inject(menuKey) as MenuInjectionOptions
</script>

<template>
  <template v-for="link in links" :key="link.title">
    <RouterLink
      v-if="link.to"
      exactActiveClass="text-primary bg-muted"
      :to="link.to"
      class="nav-link"
      :class="{'justify-normal': menuOpen, 'justify-center': !menuOpen}"
    >
      <iconify-icon :icon="link.icon"></iconify-icon>
      <span
        class="text-nowrap"
        :class="{ block: menuOpen, hidden: !menuOpen }"
      >
        {{ link.title }}
      </span>
    </RouterLink>

    <div
      v-else
      class="nav-link cursor-pointer"
      :class="{'justify-normal': menuOpen, 'justify-center': !menuOpen}"
      @click="emitActionClicked(link.title)"
    >
      <iconify-icon :icon="link.icon"></iconify-icon>
      <span
        class="text-nowrap"
        :class="{ block: menuOpen, hidden: !menuOpen }"
      >
        {{ link.title }}
      </span>
    </div>
  </template>
</template>

<style scoped>
.nav-link {
  @apply mx-2 flex items-center gap-3 rounded-lg px-4 py-2 text-muted-foreground transition-colors hover:text-primary;
}
</style>
