<script lang="ts" setup>
const {data: tasks, error, status} = await useFetch('/api/tasks', {lazy:true,})
</script>
<template>
    <h1>hello Welcome</h1>
    <div>
        <article v-if="status==='pending'" aria-busy="true"/>
        <article v-else-if="error" class="error">{{ error.statusMessage }} </article>
        <div v-else>
            <article v-for="task in tasks" :key="task.id">
            <h2>{{ task.title }}</h2>
            <p>{{ task.done }}</p>

        </article>

        </div>
        
    </div>
</template>