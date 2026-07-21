<script setup lang="ts">
import {
  Activity,
  Bell,
  Gauge,
  Home,
  MoreHorizontal,
  Moon,
  PanelLeftClose,
  Palette,
  Route,
  ScrollText,
  Settings,
  Sun,
  CircleUserRound,
} from "@lucide/vue";
import { primaryNav, secondaryNav } from "../data";
import type { NavItem, ThemeName } from "../types";

const theme = defineModel<ThemeName>("theme", { required: true });
defineProps<{
  activeView: "home" | "account";
}>();

const emit = defineEmits<{
  openHome: [];
  openAccount: [];
}>();

const iconMap = {
  Activity,
  Bell,
  Gauge,
  Home,
  Route,
  ScrollText,
  Settings,
};

const themes: Array<{ name: ThemeName; icon: typeof Sun; label: string }> = [
  { name: "snow", icon: Sun, label: "Snow" },
  { name: "cream", icon: Palette, label: "Cream" },
  { name: "dark", icon: Moon, label: "Dark" },
  { name: "glass", icon: Route, label: "Glass" },
];

function navIcon(item: NavItem) {
  return iconMap[item.icon as keyof typeof iconMap] ?? Home;
}
</script>

<template>
  <aside class="sidebar" aria-label="Workspace navigation">
    <div class="brand-row">
      <div class="brand-mark">Ai</div>
      <div>
        <p class="brand-title">AgentLook</p>
      </div>
      <button class="icon-button" type="button" aria-label="Collapse sidebar">
        <PanelLeftClose :size="18" />
      </button>
    </div>

    <nav class="nav-group">
      <a
        v-for="item in primaryNav"
        :key="item.label"
        class="nav-item"
        :class="{ active: item.active && activeView === 'home' }"
        href="#"
        @click.prevent="item.label === 'Home' ? emit('openHome') : undefined"
      >
        <component :is="navIcon(item)" :size="18" />
        <span>
          <strong>{{ item.label }}</strong>
        </span>
      </a>
    </nav>

    <section class="session-block" aria-label="Recent sessions">
      <div class="section-heading">
        <span>Recents</span>
      </div>
      <p class="empty-recents">No conversations yet</p>
    </section>

    <nav class="nav-group bottom-nav">
      <a v-for="item in secondaryNav" :key="item.label" class="nav-item compact" href="#">
        <component :is="navIcon(item)" :size="18" />
        <span>
          <strong>{{ item.label }}</strong>
        </span>
      </a>
    </nav>

    <button
      class="user-account"
      :class="{ active: activeView === 'account' }"
      type="button"
      aria-label="User account"
      @click="emit('openAccount')"
    >
      <span class="user-avatar">
        <CircleUserRound :size="26" />
      </span>
      <span class="user-copy">
        <strong>Operator</strong>
        <small>Signed in</small>
      </span>
      <MoreHorizontal :size="16" />
    </button>

    <div class="theme-strip" aria-label="Theme switcher">
      <button
        v-for="item in themes"
        :key="item.name"
        class="theme-button"
        :class="{ active: theme === item.name }"
        type="button"
        :aria-label="`Use ${item.label} theme`"
        @click="theme = item.name"
      >
        <component :is="item.icon" :size="16" />
      </button>
    </div>
  </aside>
</template>
