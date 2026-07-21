<script setup lang="ts">
import { Bell, ChevronRight, CircleUserRound, KeyRound, LogOut, ShieldCheck } from "@lucide/vue";
</script>

<template>
  <section class="account-view" aria-label="User account">
    <header class="session-header">
      <h2>Account</h2>
      <div class="header-actions" aria-label="Account actions">
        <button type="button" aria-label="Notifications">♧</button>
        <button type="button" aria-label="Security">▣</button>
      </div>
    </header>

    <div class="account-shell">
      <section class="account-hero">
        <div class="account-avatar">
          <CircleUserRound :size="52" />
        </div>
        <div>
          <p class="account-kicker">Signed in</p>
          <h1>Operator</h1>
          <p>Local workspace account for AgentLook.</p>
        </div>
      </section>

      <section class="account-card">
        <button type="button" class="account-row">
          <span><ShieldCheck :size="17" /> Workspace access</span>
          <strong>Owner</strong>
        </button>
        <button type="button" class="account-row">
          <span><KeyRound :size="17" /> Sign-in method</span>
          <strong>Local</strong>
        </button>
        <button type="button" class="account-row">
          <span><Bell :size="17" /> Notifications</span>
          <ChevronRight :size="16" />
        </button>
      </section>

      <button type="button" class="sign-out-row">
        <LogOut :size="16" />
        Sign out
      </button>
    </div>
  </section>
</template>
