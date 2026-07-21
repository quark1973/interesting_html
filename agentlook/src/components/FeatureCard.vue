<script setup lang="ts">
import { BookOpen, History, Route, ShieldCheck } from "@lucide/vue";

defineProps<{
  title: string;
  text: string;
  icon: string;
  tone: string;
}>();

const icons = {
  BookOpen,
  History,
  Route,
  ShieldCheck,
};
</script>

<template>
  <article class="feature-card" :class="tone">
    <div class="feature-icon">
      <component :is="icons[icon as keyof typeof icons] ?? Route" :size="18" />
    </div>
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
  </article>
</template>
