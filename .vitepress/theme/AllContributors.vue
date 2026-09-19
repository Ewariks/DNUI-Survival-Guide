<script setup lang="ts">
import data from '../contributors-data.json'

interface Contributor {
  name: string
  email: string
  github?: string
  commits: number
}

const list = (data as { overall: Contributor[] }).overall
</script>

<template>
  <div class="all-contributors">
    <a
      v-for="c in list"
      :key="c.github ?? c.email"
      class="contributor-card"
      :href="c.github ? `https://github.com/${c.github}` : undefined"
      rel="noopener"
    >
      <img
        v-if="c.github"
        class="contributor-card-avatar"
        :src="`https://avatars.githubusercontent.com/${c.github}?s=96&v=4`"
        :alt="c.name"
        loading="lazy"
        width="48"
        height="48"
      />
      <span v-else class="contributor-card-avatar contributor-card-avatar--fallback">
        {{ c.name.slice(0, 1) }}
      </span>
      <span class="contributor-card-info">
        <span class="contributor-card-name">{{ c.github ?? c.name }}</span>
        <span class="contributor-card-commits">{{ c.commits }} 次提交</span>
      </span>
    </a>
  </div>
</template>
