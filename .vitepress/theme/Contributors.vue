<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter } = useData()

interface Contributor {
  name: string
  email: string
  github?: string
}
</script>

<template>
  <div v-if="frontmatter.contributors?.length" class="page-contributors">
    <span class="page-contributors-label">本文贡献者</span>
    <div class="page-contributors-list">
      <a
        v-for="c in frontmatter.contributors as Contributor[]"
        :key="c.email"
        class="page-contributor"
        :href="c.github ? `https://github.com/${c.github}` : undefined"
        :title="c.github ? `@${c.github}` : c.name"
        rel="noopener"
      >
        <img
          v-if="c.github"
          class="page-contributor-avatar"
          :src="`https://avatars.githubusercontent.com/${c.github}?s=56&v=4`"
          :alt="c.name"
          loading="lazy"
          width="28"
          height="28"
        />
        <span
          v-else
          class="page-contributor-avatar page-contributor-avatar--fallback"
        >
          {{ c.name.slice(0, 1) }}
        </span>
        <span class="page-contributor-name">{{ c.github ?? c.name }}</span>
      </a>
    </div>
  </div>
</template>
