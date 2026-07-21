<script setup lang="ts">
import { Activity, Gauge, GitBranch, Timer, WalletCards } from "@lucide/vue";
import type { RouteDecision } from "../types";

defineProps<{
  decision: RouteDecision;
}>();
</script>

<template>
  <aside class="insight-panel" aria-label="Route insight">
    <header class="panel-header">
      <div>
        <p class="eyebrow">Activity</p>
        <h2>{{ decision.lane }}</h2>
      </div>
      <div class="confidence-ring" :style="{ '--score': `${decision.confidence}%` }">
        {{ decision.confidence }}
      </div>
    </header>

    <section class="metric-list">
      <div class="metric-row">
        <span><GitBranch :size="16" /> Model</span>
        <strong>{{ decision.model }}</strong>
      </div>
      <div class="metric-row">
        <span><Timer :size="16" /> Latency</span>
        <strong>{{ decision.latency }}</strong>
      </div>
      <div class="metric-row">
        <span><WalletCards :size="16" /> Cost</span>
        <strong>{{ decision.cost }}</strong>
      </div>
      <div class="metric-row">
        <span><Gauge :size="16" /> Confidence</span>
        <strong>{{ decision.confidence }}%</strong>
      </div>
    </section>

    <section class="decision-card">
      <div class="section-heading">
        <span>Summary</span>
        <Activity :size="16" />
      </div>
      <p>{{ decision.reason }}</p>
    </section>

    <section class="decision-card">
      <div class="section-heading">
        <span>Tools used</span>
        <small>{{ decision.tools.length }}</small>
      </div>
      <div class="tool-list">
        <span v-for="tool in decision.tools" :key="tool">{{ tool }}</span>
      </div>
    </section>

    <section class="timeline">
      <div class="section-heading">
        <span>Trace</span>
        <small>trace</small>
      </div>
      <ol>
        <li>Message received</li>
        <li>Context selected</li>
        <li>Model routed</li>
        <li>Answer streamed</li>
      </ol>
    </section>
  </aside>
</template>
