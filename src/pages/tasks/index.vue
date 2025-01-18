<script setup lang="ts">
import { columns } from '@/utils/tableColumns/taskColumns'
import { tasksWithProjectsQuery } from '@/utils/supaQueries'
import type { TasksWithProjects } from '@/utils/supaQueries'

usePageStore().pageData.title = 'Tasks'

const tasks = ref<TasksWithProjects | null>(null)
const getTasks = async () => {
  const { data, error } = await tasksWithProjectsQuery

  if (error) console.error(error)

  tasks.value = data

  console.log('tasks', tasks.value)
}

await getTasks()
</script>

<template>
  <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>
