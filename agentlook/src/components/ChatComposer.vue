<script setup lang="ts">
import { Bot, Paperclip, Plus, SendHorizontal } from "@lucide/vue";
import { ref } from "vue";

const emit = defineEmits<{
  send: [content: string];
}>();

const draft = ref("");

function submit() {
  const content = draft.value.trim();
  if (!content) return;
  emit("send", content);
  draft.value = "";
}
</script>

<template>
  <form class="composer" @submit.prevent="submit">
    <textarea
      v-model="draft"
      rows="2"
      placeholder="How can I help you today?"
      aria-label="Message"
      @keydown.enter.exact.prevent="submit"
    />
    <div class="composer-toolbar">
      <div class="composer-tools">
        <button class="cap-button" type="button" aria-label="Capability">
          <Bot :size="16" />
          <span>Chat</span>
          <span class="chevron">⌄</span>
        </button>
        <button type="button" aria-label="Add context">
          <Plus :size="18" />
        </button>
        <button type="button" aria-label="Attach file">
          <Paperclip :size="17" />
        </button>
      </div>
      <div class="composer-actions">
        <button class="send-button" type="submit" aria-label="Send message">
          <SendHorizontal :size="18" />
        </button>
      </div>
    </div>
  </form>
</template>
