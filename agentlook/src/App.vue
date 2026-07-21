<script setup lang="ts">
import { computed, ref, watch } from "vue";
import AppSidebar from "./components/AppSidebar.vue";
import ChatWorkspace from "./components/ChatWorkspace.vue";
import InsightPanel from "./components/InsightPanel.vue";
import UserAccountView from "./components/UserAccountView.vue";
import { startingDecision } from "./data";
import type { ChatMessage, RouteDecision, ThemeName } from "./types";

const theme = ref<ThemeName>("snow");
const activeView = ref<"home" | "account">("home");
const messages = ref<ChatMessage[]>([]);
const routeDecision = ref<RouteDecision>(startingDecision);

const shellClass = computed(
  () =>
    `app-shell theme-${theme.value} ${
      activeView.value === "home" && messages.value.length > 0 ? "has-thread" : "is-empty"
    }`,
);

watch(
  theme,
  (next) => {
    document.documentElement.dataset.theme = next;
  },
  { immediate: true },
);

function sendMessage(content: string) {
  const now = new Date();
  const timestamp = now.toLocaleTimeString("zh-CN", {
    hour: "2-digit",
    minute: "2-digit",
  });
  messages.value.push({
    id: `u-${now.getTime()}`,
    role: "user",
    content,
    timestamp,
  });

  const lower = content.toLowerCase();
  const needsKnowledge = /知识|文档|rag|pdf|资料|库/.test(lower);
  const needsSpeed = /快|低延迟|latency|实时|秒/.test(lower);
  const needsTools = /工具|调用|api|workflow|插件/.test(lower);

  routeDecision.value = {
    lane: needsKnowledge
      ? "Knowledge"
      : needsTools
        ? "Tools"
        : needsSpeed
          ? "Fast Chat"
          : "Chat",
    model: needsSpeed ? "gpt-4o-mini" : needsKnowledge ? "qwen-plus" : "deepseek-chat",
    confidence: needsKnowledge || needsTools || needsSpeed ? 94 : 88,
    latency: needsSpeed ? "286ms" : needsKnowledge ? "940ms" : "584ms",
    cost: needsSpeed ? "$0.0008" : "$0.0034",
    reason: needsKnowledge
      ? "Knowledge bases were selected for this turn, so references would be visible in the activity panel."
      : needsTools
        ? "Tool use is enabled for this turn; calls would be grouped in the activity panel."
        : needsSpeed
          ? "The turn stays lightweight and avoids extra context."
          : "Default chat mode keeps the thread open and records selected context.",
    tools: needsKnowledge
      ? ["chat", "rag", "citation"]
      : needsTools
        ? ["chat", "tool-call", "policy-check"]
        : needsSpeed
          ? ["chat", "fast-path"]
          : ["chat", "trace"],
  };

  window.setTimeout(() => {
    messages.value.push({
      id: `a-${now.getTime()}`,
      role: "assistant",
      content: `Using ${routeDecision.value.lane}. The activity panel keeps the model, tools, and references attached to this session.`,
      timestamp,
    });
  }, 280);
}
</script>

<template>
  <main :class="shellClass">
    <AppSidebar
      v-model:theme="theme"
      :active-view="activeView"
      @open-home="activeView = 'home'"
      @open-account="activeView = 'account'"
    />
    <ChatWorkspace v-if="activeView === 'home'" :messages="messages" @send="sendMessage" />
    <UserAccountView v-else />
    <InsightPanel v-if="activeView === 'home' && messages.length > 0" :decision="routeDecision" />
  </main>
</template>
