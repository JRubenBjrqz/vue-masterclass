<script setup lang="ts">
interface LinkProp {
  title: string
  to?: string
  icon: string
}

const props = defineProps<{
  links: LinkProp[]
}>()
</script>

<template>
  <template v-for="link in links" :key="link.title">
    <RouterLink v-if="link.to" exactActiveClass="text-primary bg-muted" :to="link.to" class="nav-link">
      <iconify-icon :icon="link.icon"></iconify-icon>
      <span class="hidden text-nowrap lg:block">{{ link.title }}</span>
    </RouterLink>

    <div v-else class="nav-link cursor-pointer">
      <iconify-icon :icon="link.icon"></iconify-icon>
      <span class="hidden lg:block text-nowrap">{{ link.title }}</span>
    </div>
  </template>
</template>

<style scoped>
.nav-link {
  @apply mx-2 flex items-center justify-center gap-3 rounded-lg px-4 py-2 text-muted-foreground transition-colors hover:text-primary lg:justify-normal;
}
</style>
