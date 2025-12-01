

export type InsightCategory =
  | "study"
  | "fitness"
  | "productivity"
  | "coding"
  | "sleep"
  | "other";

export type Insight = {
  id: string;
  title: string;
  description: string;
  category: InsightCategory;
};
