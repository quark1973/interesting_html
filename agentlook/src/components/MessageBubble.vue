<script setup lang="ts">
import { Bot, UserRound } from "@lucide/vue";
import type { ChatMessage } from "../types";

defineProps<{
  message: ChatMessage;
}>();
</script>

<template>
  <article class="message" :class="message.role">
    <div class="avatar log-icon" aria-hidden="true">
      <Bot v-if="message.role === 'assistant'" :size="15" />
      <UserRound v-else :size="15" />
    </div>
    <div class="message-body">
      <div class="message-meta">
        <strong>{{ message.role === "assistant" ? "Assistant" : "You" }}</strong>
        <span>{{ message.timestamp }}</span>
      </div>
      <p>{{ message.content }}</p>
    </div>
  </article>
</template>
