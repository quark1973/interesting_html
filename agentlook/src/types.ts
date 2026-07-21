export type ThemeName = "snow" | "cream" | "dark" | "glass";

export type NavItem = {
  label: string;
  description: string;
  icon: string;
  active?: boolean;
};

export type SessionItem = {
  id: string;
  title: string;
  subtitle: string;
  status: "idle" | "running" | "done";
};

export type ChatMessage = {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: string;
};

export type RouteDecision = {
  lane: string;
  model: string;
  confidence: number;
  latency: string;
  cost: string;
  reason: string;
  tools: string[];
};
