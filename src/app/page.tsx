"use client";

import { useState } from "react";
import type { Insight } from "../types/insight";
import { PromptForm } from "../components/PromptForm";
import { PromptSuggestions } from "../components/PromptSuggestions";
import { InsightList } from "../components/InsightList";

function mockGenerateInsights(prompt: string): Insight[] {
  const lower = prompt.toLowerCase();
  const insights: Insight[] = [];

  const push = (
    id: string,
    category: Insight["category"],
    title: string,
    description: string
  ) => {
    insights.push({ id, category, title, description });
  };

  // STUDY
  if (
    lower.includes("study") ||
    lower.includes("exam") ||
    lower.includes("διαβάζω")
  ) {
    push(
      "study-1",
      "study",
      "Study in focused blocks",
      "Try 40-minute deep focus sessions with 5–7 minute breaks."
    );
    push(
      "study-2",
      "study",
      "Start with review",
      "Spend 10–15 minutes reviewing yesterday’s material first."
    );
    push(
      "study-3",
      "study",
      "Make it measurable",
      "Define a clear study goal, like 'Finish chapter 5' instead of 'study'."
    );
  }

  // FITNESS
  if (
    lower.includes("fitness") ||
    lower.includes("gym") ||
    lower.includes("workout")
  ) {
    push(
      "fitness-1",
      "fitness",
      "Short but consistent training",
      "20–30 minutes today is enough to build momentum."
    );
    push(
      "fitness-2",
      "fitness",
      "Prepare your environment",
      "Lay out your workout clothes or shoes now."
    );
    push(
      "fitness-3",
      "fitness",
      "Attach the habit",
      "Link your workout to something you already do daily."
    );
  }

  // CODING
  if (
    lower.includes("coding") ||
    lower.includes("react") ||
    lower.includes("typescript")
  ) {
    push(
      "coding-1",
      "coding",
      "Small experiments",
      "Break tasks into small, testable code experiments."
    );
    push(
      "coding-2",
      "coding",
      "Write the bug out loud",
      "Describe the bug in plain text—it usually reveals the mistake."
    );
    push(
      "coding-3",
      "coding",
      "Commit meaningfully",
      "Commit after each tiny chunk of progress for clean history."
    );
  }

  // SLEEP
  if (
    lower.includes("sleep") ||
    lower.includes("tired") ||
    lower.includes("ύπν")
  ) {
    push(
      "sleep-1",
      "sleep",
      "Set a wind-down time",
      "Choose a moment tonight when screens turn off completely."
    );
    push(
      "sleep-2",
      "sleep",
      "Light ritual",
      "10 minutes of stretching or reading improves sleep quality."
    );
  }

  // PRODUCTIVITY (fallback)
  if (
    insights.length === 0 ||
    lower.includes("productive") ||
    lower.includes("focus")
  ) {
    push(
      "prod-1",
      "productivity",
      "Define a finish line",
      "Write one sentence describing what “done today” means."
    );
    push(
      "prod-2",
      "productivity",
      "One important task first",
      "Start with the task that will matter the most tomorrow."
    );
  }

  return insights;
}

export default function Home() {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [loading, setLoading] = useState(false);
  const [promptValue, setPromptValue] = useState("");

  const handleGenerate = (prompt: string) => {
    setLoading(true);
    setTimeout(() => {
      const result = mockGenerateInsights(prompt);
      setInsights(result);
      setLoading(false);
    }, 600);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            DaySpark <span className="text-indigo-400">AI</span>
          </h1>
          <p className="text-sm text-slate-300 md:text-base">
            Describe what you want to focus on today — or choose one of the
            suggestions below.
          </p>
        </header>

        <PromptForm
          value={promptValue}
          onSetValue={setPromptValue}
          onGenerate={handleGenerate}
          loading={loading}
        />

        <PromptSuggestions
          onSelect={(text: string) => {
            setPromptValue(text);
            handleGenerate(text);
          }}
        />

        <InsightList insights={insights} />
      </div>
    </main>
  );
}
