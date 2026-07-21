# AgentLook

Vue visual prototype of a DeepTutor-style workspace UI, adapted for a Hypress intelligent routing AI assistant.

This repo is intentionally focused on the front-end look and shell: navigation, chat canvas, route-insight surfaces, component rhythm, and theme tokens.

## Local Development

```powershell
npm.cmd install
npm.cmd run dev
```

## Intent

AgentLook keeps the DeepTutor-inspired shell:

- fixed workspace sidebar
- chat-first center canvas
- capability cards and session list
- route insight panel for model/tool decisions
- light, dark, and glass themes

## Component Direction

The preferred Vue3 component direction is shadcn-vue style open-code components:

- Button
- Card
- Badge
- Sidebar
- Textarea
- Tooltip
- Tabs
- Sheet
- ScrollArea

That direction is closer to DeepTutor's custom Next/Tailwind interface than heavier admin UI kits. The current prototype uses local Vue components and theme tokens so those shadcn-vue pieces can be dropped in gradually.
