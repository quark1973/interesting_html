<script setup lang="ts">
import type { ChatMessage } from "../types";
import ChatComposer from "./ChatComposer.vue";
import MessageBubble from "./MessageBubble.vue";

defineProps<{
  messages: ChatMessage[];
}>();

const emit = defineEmits<{
  send: [content: string];
}>();
</script>

<template>
  <section class="workspace" aria-label="Routing workspace">
    <section v-if="messages.length === 0" class="welcome-panel" aria-label="Welcome">
      <div class="welcome-mark">Ai</div>
      <h1>What would you like to learn?</h1>
    </section>

    <div v-if="messages.length > 0" class="message-list request-log" data-chat-scroll-root="true">
      <MessageBubble v-for="message in messages" :key="message.id" :message="message" />
    </div>

    <div class="composer-anchor" :class="{ empty: messages.length === 0 }">
      <ChatComposer @send="emit('send', $event)" />
    </div>
  </section>
</template>
