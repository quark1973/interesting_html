# AgentLook Visual Direction

## Source Read

DeepTutor's current front end is a Next.js, React, and Tailwind workspace. Its public site and repository show a chat-centered shell with a persistent left sidebar, multiple workspace surfaces, markdown-friendly output, and light/dark/glass theme families.

## Vue3 Component Library Choice

Closest match: shadcn-vue.

Why:

- It is designed as open component code rather than a sealed package.
- It has the exact primitives this UI needs: Sidebar, Button, Card, Badge, Textarea, Tooltip, Tabs, Sheet, ScrollArea, Dropdown Menu, and Progress.
- It keeps the same Tailwind-friendly design-system approach as DeepTutor's web app.
- It is easier to bend into a product-specific AI workspace than Element Plus or Ant Design Vue.

Why it is the closest match:

- DeepTutor is not visually based on a heavy enterprise kit; it is a custom React/Tailwind product shell.
- shadcn-vue is the Vue port of that same open-code, Tailwind-first component approach.
- Its component catalog includes the exact shapes this interface needs: Sidebar, Card, Badge, Textarea, Tooltip, Tabs, Sheet, ScrollArea, Message, Bubble, Avatar, Progress, and Dropdown Menu.
- It gives a cleaner ChatGPT/Claude-like product surface than Element Plus, Ant Design Vue, or Arco Design.

Second closest: Naive UI.

Use it if the product later needs many dense admin controls, data tables, forms, modals, and theme switching out of the box.

Not the best visual match: Element Plus.

It is reliable, but its default visual language reads more like enterprise admin software than an agent-native AI workspace.

Not the best visual match: Ant Design Vue / Arco Design.

They are strong admin/dashboard choices, but their default density and corporate product language would need more restyling to feel like DeepTutor.

## Layout

- Left rail: brand, new session, primary surfaces, recent sessions, memory/settings, theme switcher.
- Center canvas: hero prompt, compact capability cards, message stream, composer.
- Right rail: route insight with model, confidence, latency, cost, tools, and trace.

## Theme Tokens

- Snow: white canvas, neutral borders, blue primary.
- Cream: warm canvas, terracotta primary.
- Dark: warm near-black, soft borders.
- Glass: dark translucent panels, violet primary, restrained depth.

## Component Map

- `AppSidebar.vue`: shadcn-vue Sidebar, Button, Tooltip, ScrollArea.
- `ChatWorkspace.vue`: Card, Badge, ScrollArea.
- `ChatComposer.vue`: Textarea, Button, Tooltip.
- `InsightPanel.vue`: Card, Badge, Progress, Separator.
- `FeatureCard.vue`: Card and Badge.
- `MessageBubble.vue`: Avatar, Card.
