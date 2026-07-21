import type { NavItem, RouteDecision, SessionItem } from "./types";

export const primaryNav: NavItem[] = [
  {
    label: "Home",
    description: "Gateway command center",
    icon: "Home",
    active: true,
  },
  {
    label: "Alerts",
    description: "Active incidents and notices",
    icon: "Bell",
  },
  {
    label: "Routes",
    description: "Traffic lanes and failover",
    icon: "Route",
  },
  {
    label: "Logs",
    description: "Requests, traces, and errors",
    icon: "ScrollText",
  },
];

export const secondaryNav: NavItem[] = [];

export const sessions: SessionItem[] = [
  {
    id: "s1",
    title: "What would you like to learn?",
    subtitle: "Chat · Reason · Retrieval",
    status: "running",
  },
  {
    id: "s2",
    title: "Knowledge workflow",
    subtitle: "RAG and references",
    status: "done",
  },
  {
    id: "s3",
    title: "Co-writer draft",
    subtitle: "Notebook handoff",
    status: "idle",
  },
];

export const startingDecision: RouteDecision = {
  lane: "Gateway Activity",
  model: "deepseek-chat",
  confidence: 92,
  latency: "612ms",
  cost: "$0.0031",
  reason:
    "Gateway checks, route decisions, incidents, and referenced runbooks appear here.",
  tools: ["diagnose", "route-check", "runbook"],
};

export const capabilityCards = [
  {
    title: "Smart Route",
    text: "Classify intent and choose model, tool, or knowledge lane.",
    icon: "Route",
    tone: "blue",
  },
  {
    title: "Fallback Policy",
    text: "Recover from provider failure with a visible decision trail.",
    icon: "ShieldCheck",
    tone: "green",
  },
  {
    title: "Knowledge Match",
    text: "Attach RAG libraries when user context needs grounding.",
    icon: "BookOpen",
    tone: "violet",
  },
  {
    title: "Trace Replay",
    text: "Inspect model choice, latency, cost, and final response.",
    icon: "History",
    tone: "amber",
  },
];
